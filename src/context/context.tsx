import React, { useState, useEffect, useContext } from 'react';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';
import axios from 'axios';
import { GithubUser } from './types/GithubUser.type';
import { GithubRepo } from './types/GithubRepo.type';
import { GithubFollower } from './types/GithubFollower.type';
import CustomError from './types/CustomError.type';

const rootUrl = 'https://api.github.com';

interface GithubContextTypes {
	githubUser: GithubUser;
	repos: GithubRepo[];
	followers: GithubFollower[];
	requests: number;
	isLoading: boolean;
	error: CustomError;
	searchGithubUser: (user: string) => Promise<void>;
}

const GithubContext = React.createContext({} as GithubContextTypes);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GithubProvider = ({ children }: any) => {
	const [githubUser, setGithubUser] = useState<GithubUser>(mockUser);
	const [repos, setRepos] = useState<GithubRepo[]>(mockRepos);
	const [followers, setFollowers] = useState<GithubFollower[]>(mockFollowers);
	const [requests, setRequests] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<CustomError>({ show: false, msg: '' });

	const searchGithubUser = async (user: string): Promise<void> => {
		toggleError();
		setIsLoading(true);
		const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));
		if (response) {
			setGithubUser(response.data);
			const { login, followers_url } = response.data;

			await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), axios(`${followers_url}?per_page=100`)]).then((response) => {
				const [repos, followers] = response;
				const status = 'fulfilled';
				if (repos.status === status) {
					setRepos(repos.value.data);
				}
				if (followers.status === status) {
					setFollowers(followers.value.data);
				}
			});
		} else {
			toggleError(true, 'there is no user with that username');
		}
		checkRequests();
		setIsLoading(false);
	};

	const checkRequests = () => {
		axios(`${rootUrl}/rate_limit`)
			.then((data) => {
				const remaining = data.data.rate.remaining;
				setRequests(remaining);
				if (remaining === 0) {
					toggleError(true, 'sorry, you have exeeded your hourly rate limit!');
				}
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		checkRequests();
	}, []);

	const toggleError = (show: boolean = false, msg: string = '') => {
		setError({ show, msg });
	};

	return (
		<GithubContext.Provider
			value={{
				githubUser,
				repos,
				followers,
				requests,
				isLoading,
				error,
				searchGithubUser,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

const useGithubContext = () => {
	const context = useContext(GithubContext);

	return context;
};

export { GithubProvider, useGithubContext };
