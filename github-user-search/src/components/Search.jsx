import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleInputValue(event) {
    setValue(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(value);
      setUser(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <label>
            Enter GitHub username
            <input 
              type="text" 
              name="username" 
              id="username" 
              className="username-field" 
              placeholder="eg. johndoe" 
              value={value}
              onChange={handleInputValue}
            />
          </label>

          <button type="submit" className="submit">Submit</button>
        </form>

        <div className="user-details">
          { isLoading && <p>Loading...</p> }
          { error && <p>Looks like we cant find the user</p> }
          { user && (
            <>
              <img 
                src={user.avatar_url} 
                alt={user.login}
                width="100"
              />

              <h3 className="name">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile
              </a>
            </>
          ) }
        </div>
      </div>
    </>
  );
}
