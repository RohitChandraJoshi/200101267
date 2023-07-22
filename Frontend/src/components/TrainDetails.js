import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const TrainDetails = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/trains/${trainNumber}`)
      .then((response) => {
        setTrain(response.data);
        setLoading(false);
        setError(null); 
      })
      .catch((error) => {
        console.error('Error fetching train details:', error);
        setLoading(false);
        setError('Error fetching train details'); 
      });
  }, [trainNumber]);

  return (
    <Box
      bgcolor="#f5f5f5"
      padding="20px"
      margin="20px"
      borderRadius="5px"
      boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
    >
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>{error}</Typography>
      ) : (
        <>
          <Typography variant="h5" component="h2">
            {train.trainName}
          </Typography>
          <Typography color="textSecondary">
            Train Number: {train.trainNumber}
          </Typography>
          <Typography>
            Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
          </Typography>
          <Typography>
            Sleeper Seats Available: {train.seatsAvailable.sleeper}
          </Typography>
          <Typography>
            AC Seats Available: {train.seatsAvailable.AC}
          </Typography>
          <Typography>
            Price (Sleeper): {train.price.sleeper}
          </Typography>
          <Typography>
            Price (AC): {train.price.AC}
          </Typography>
          <Typography>
            Delayed By: {train.delayedBy} minutes
          </Typography>
        </>
      )}
    </Box>
  );
};

export default TrainDetails;
