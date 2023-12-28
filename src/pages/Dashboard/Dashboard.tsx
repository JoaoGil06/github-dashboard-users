import { Info, Repos, User, Search } from "../../components";
import loadingImage from "../../images/preloader.gif";
import { useGithubContext } from "../../context/context";

const Dashboard = () => {
  const { isLoading } = useGithubContext();

  if (isLoading) {
    return (
      <main>
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }

  return (
    <main>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
