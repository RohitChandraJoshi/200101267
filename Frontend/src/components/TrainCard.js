import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const TrainCard = ({ train }) => {
  const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = train;

  return (
    
    
    <Box
    bgcolor="#f5f5f0"
    padding="20px"
    margin="20px"
    borderRadius="5px"
    boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
  >
        <Typography variant="h5" component="h2">
          {trainName}
        </Typography>
        <Typography color="textSecondary">
          Train Number: {trainNumber}
        </Typography>
        <Typography color="textSecondary">
          Departure Time: {departureTime.Hours}:{departureTime.Minutes}
        </Typography>
        <Typography>
          Sleeper Seats Available: {seatsAvailable.sleeper}
        </Typography>
        <Typography>
          AC Seats Available: {seatsAvailable.AC}
        </Typography>
        <Typography>
          Price (Sleeper): {price.sleeper}
        </Typography>
        <Typography>
          Price (AC): {price.AC}
        </Typography>
        <Typography>
          Delayed By: {delayedBy} minutes
        </Typography>
        <Link to={`/train/${trainNumber}`}>View Details</Link>
        </Box>
  );
};

export default TrainCard;
