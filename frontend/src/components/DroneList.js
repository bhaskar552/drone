import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchDrones } from '../redux/actions/droneActions';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  CircularProgress,
} from '@mui/material';
import drone1 from '../assets/drone1.png';
import drone2 from '../assets/drone2.png';
import drone3 from '../assets/drone3.png';
import drone4 from '../assets/drone4.png';
import drone5 from '../assets/drone5.png';
import drone6 from '../assets/drone6.png';

const droneImages = {
  Drone1: drone1,
  Drone2: drone2,
  Drone3: drone3,
  Drone4: drone4,
  Drone5: drone5,
  Drone6: drone6,
  // Add other drone images here
};

const DroneList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drones = useSelector(state => state.drones.list);
  const loading = useSelector(state => state.drones.loading);
  const error = useSelector(state => state.drones.error);

  useEffect(() => {
    dispatch(fetchDrones());
  }, [dispatch]);

  useEffect(() => {
    const handlePopState = () => {
      navigate('/');
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const handleDroneClick = (id) => {
    navigate(`/drones/${id}`);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'available': return 'success';
      case 'in-flight': return 'primary';
      case 'maintenance': return 'warning';
      case 'charging': return 'info';
      default: return 'default';
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ 
      display: "flex", 
      flexWrap: "wrap", 
      justifyContent: "center", 
      mt: 3,
      backgroundColor: '#f5f0ec',  // Background color applied here
      minHeight: '100vh',          // Ensures the background covers the full height
      padding: 3                   // Optional: Adds padding around the content
    }}>
      <h1>Drone List</h1>
      <Grid container spacing={2} justifyContent="center">
        {drones.map((drone) => (
          <Grid item key={drone.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardActionArea onClick={() => handleDroneClick(drone.id)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={droneImages[drone.id] || 'url_to_default_drone_image'}
                  alt={`Drone ${drone.id}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ID : {drone.id}
                  </Typography>
                  <Chip 
                    label={drone.status} 
                    color={getStatusColor(drone.status)}
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Battery Status: {drone.battery_status}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DroneList;
