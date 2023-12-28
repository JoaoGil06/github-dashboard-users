import { MdSearch } from "react-icons/md";
import { useGithubContext } from "../../context/context";
import { ChangeEvent, FormEvent, useState } from "react";
import { ErrorWrapper, Wrapper } from "./styles/search.styledcomponents";

const Search = () => {
  const [user, setUser] = useState<string>("");
  const { requests, error, searchGithubUser, isLoading } = useGithubContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser(e.target.value);
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              onChange={handleChangeUser}
            />
            {requests > 0 && !isLoading && (
              <button type="submit">search</button>
            )}
          </div>
        </form>
        <h3>requests: {requests}/60 </h3>
      </Wrapper>
    </section>
  );
};

export default Search;
