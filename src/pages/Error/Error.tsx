import { Link } from "react-router-dom";
import { Wrapper } from "./styles/error.syledcomponents";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you tried cannot be found</h3>
        <Link to="/login" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
