// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import DroneList from './components/DroneList';
import DroneDetails from './components/DroneDetails';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/drones" 
            element={isAuthenticated ? <DroneList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/drones/:id" 
            element={isAuthenticated ? <DroneDetails /> : <Navigate to="/login" />} 
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;