import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDroneDetails } from '../redux/actions/droneActions';
import { Card, CardMedia, Typography, Grid, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Battery20Icon from '@mui/icons-material/Battery20';
import Map from './Map';
import MaintenanceLogs from './MaintenanceLogs';
import './DroneDetails.css';
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

function DroneDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drone = useSelector(state => state.drones.currentDrone);

  useEffect(() => {
    dispatch(fetchDroneDetails(id));
  }, [dispatch, id]);

  if (!drone) {
    return <Typography>Loading...</Typography>;
  }

  // Extract battery percentage as a number
  const batteryLevel = parseInt(drone.battery_status, 10);

  return (
    <Box sx={{ padding: 2, backgroundColor: '#003049', minHeight: '100vh', width: '100%', margin: 0 }}> {/* Background color applied here */}
      <h1 style={{ color: '#ffffff', textAlign: 'center' }}>{drone.id} Details</h1>
      <Card sx={{ borderRadius: '8px', padding: '16px', position: 'relative', backgroundColor: '#ffffff', maxWidth: '1200px', margin: 'auto' }}> {/* Optional: Card background color */}
        <IconButton onClick={() => navigate(-1)} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="320"
              image={droneImages[drone.id] || '/default-drone-image.png'}
              alt={`Drone ${drone.id}`}
              sx={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: 'auto',
                borderRadius: '8px' 
              }}
            />
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
              ID : {drone.id}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Battery20Icon sx={{ mr: 1 }} />
              <Typography variant="body2">Battery</Typography>
              <Box sx={{ flexGrow: 1, ml: 2, height: 10, backgroundColor: '#e0e0e0', borderRadius: '4px' }}>
                <Box
                  sx={{
                    width: `${batteryLevel}%`,
                    backgroundColor: batteryLevel > 50 ? '#056517' : '#bf1029',
                    height: '100%',
                    borderRadius: '4px',
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ ml: 2 }}>{drone.battery_status}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">Last Known Location</Typography>
              <Map latitude={drone.last_known_location[0]} longitude={drone.last_known_location[1]} />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>Details</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}><strong>Status:</strong> {drone.status}</Typography>
            <Typography variant="body1"><strong>Current Mission:</strong> {drone.current_mission || 'N/A'}</Typography>
            <Typography variant="body1"><strong>Flight Hours:</strong> {drone.flight_hours}</Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Maintenance Logs</Typography>
              <MaintenanceLogs logs={drone.maintenance_logs} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default DroneDetails;
