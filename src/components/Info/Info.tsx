import { useGithubContext } from "../../context/context";
import { GoRepo, GoCodeSquare } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { Wrapper } from "./styles/info.styledcomponents";
import InfoItem from "../InfoItem";

const Info = () => {
  const { githubUser } = useGithubContext();

  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoCodeSquare className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <InfoItem key={item.id} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

export default Info;
