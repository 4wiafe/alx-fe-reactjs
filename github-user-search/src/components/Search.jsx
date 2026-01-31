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
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-gray-950 text-gray-100 flex flex-col items-center justify-center px-4 py-16 min-h-screen">
      <div className="w-full max-w-md space-y-4">

        {/* Search Form */}
        <form
          onSubmit={handleFormSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-4 shadow-lg space-y-3"
        >
          <label className="block text-sm font-medium text-gray-300">
            GitHub Username
          </label>

          <input
            type="text"
            name="username"
            id="username"
            placeholder="eg. johndoe"
            value={value}
            onChange={handleInputValue}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-2 rounded-lg"
          >
            Search
          </button>
        </form>

        {/* User Result Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 shadow-lg min-h-[180px] flex items-center justify-center text-center">
          {isLoading && (
            <p className="text-gray-400 animate-pulse">Loading...</p>
          )}

          {error && (
            <p className="text-red-400">
              Looks like we can't find the user
            </p>
          )}

          {user && (
            <div className="space-y-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto border border-gray-700"
                loading="lazy"
              />

              <h3 className="text-xl font-semibold">{user.login}</h3>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                View GitHub Profile
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
