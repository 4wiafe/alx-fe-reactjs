import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      : undefined,
  },
});

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users from GitHub");
  }
};
