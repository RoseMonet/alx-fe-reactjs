import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Advanced search function
  const fetchUserData = async (username, location, minRepos) => {
    try {
      const query = `q=${username ? username : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`;
      const response = await axios.get(`https://api.github.com/search/users?${query}`);
      return response.data.items;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError('Something went wrong or no users found.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-5">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub Username"
            className="input-field p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="input-field p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum Repositories"
            className="input-field p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display search results */}
      <div className="results mt-6">
        {userData && userData.map((user) => (
          <div key={user.id} className="flex items-center p-4 bg-white rounded-lg shadow-md mt-4">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Visit Profile
              </a>
              <p>{user.location ? `Location: ${user.location}` : 'Location: N/A'}</p>
              <p>{user.public_repos ? `Repos: ${user.public_repos}` : 'Repos: N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;