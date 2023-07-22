import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';
import { Grid } from '@mui/material';


const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/trains')
      .then((response) => {
        setTrains(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error while fetching train schedule:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 style={{color: "black", fontSize:50, fontFamily : "HanaOpen Sans", textAlign:"center"}}>Train Schedule</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={2}>
          {trains.map((train) => (
            <Grid key={train.trainNumber} item xs={12} sm={6} md={4}>
              <TrainCard train={train} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default TrainList;
