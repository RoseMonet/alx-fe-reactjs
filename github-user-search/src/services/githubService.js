import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username, location, minRepos) => {
  const q = `${username ? username : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`;
  const response = await axios.get(`https://api.github.com/search/users?q`);
  return response.data.items;
};