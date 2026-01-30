import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_GITHUB_API_KEY ?
    `token ${import.meta.env.VITE_GITHUB_API_KEY}` :
    null
  }
});

export const searchUsers = (query) => 
  githubApi.get(`/search/users?q=${query}`);
