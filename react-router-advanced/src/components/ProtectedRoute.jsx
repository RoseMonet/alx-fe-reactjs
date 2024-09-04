import React from 'react';
import { Navigate } from 'react-router-dom';
// Mock authentication check (replace with real logic) const isAuthenticated = () => { // This should be replaced with actual authentication logic return localStorage.getItem('isAuthenticated') === 'true'; };

const ProtectedRoute = ({ component: Component }) => { if (!isAuthenticated()) { return <Navigate to="/" replace />; } return <Component />; };

export default ProtectedRoute;
