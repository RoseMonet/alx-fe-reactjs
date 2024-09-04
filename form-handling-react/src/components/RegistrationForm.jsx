import React, { useState } from 'react';

const RegistrationForm = () => {
  // Initialize state for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); 

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

     const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required'; // Check for empty email
    if (!password) newErrors.password = 'Password is required'; // Check for empty password

    // Set errors if validation fails
    setErrors(newErrors);

    // If there are errors, stop form submission
    if (Object.keys(newErrors).length > 0) return;
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