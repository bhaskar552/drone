import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import './Home.css';
import videoBg from '../assets/videoBg.mp4'; // Import your video file

function Home() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleViewDrones = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/drones');
    }
  };

  return (
    <div className="home">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted className="background-video" />
      <div className="content">
        <h1 className="welcome-text">WELCOME</h1>
        <div className="button-container">
          {isAuthenticated ? (
            <>
              <button onClick={handleViewDrones} className="button">View Drones</button>
              <button onClick={handleLogout} className="button logout">Logout</button>
            </>
          ) : (
            <button onClick={handleViewDrones} className="button">Login</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
