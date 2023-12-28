import Card from "../Card/Card";
import Followers from "../Followers/Followers";
import { Wrapper } from "./styles/user.styledcomponents";

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

export default User;
