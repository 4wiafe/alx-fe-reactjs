import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      : undefined,
  }
});

export const fetchUserData = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};
