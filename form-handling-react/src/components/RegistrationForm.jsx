import React, { useState } from 'react';

const RegistrationForm = () => {
  // Initialize state for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation checks
    if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }

    // Simulate an API call or handle registration logic
    console.log('Form Submitted', { username, email, password });
    alert('User registered successfully!');

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username} // Controlled input for username
          onChange={(e) => setUsername(e.target.value)} // Update state on change
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} // Controlled input for email
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Controlled input for password
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          placeholder="Enter your password"
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;