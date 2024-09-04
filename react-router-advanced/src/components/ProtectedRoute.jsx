import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth(); // Use the authentication status

  // Check if the user is authenticated
  if (!isAuthenticated) {
    // Redirect to login or another route if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if authenticated
  return <Component />;
};

export default ProtectedRoute;
