const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const trains = [
  {
    trainName: 'Chennai Express',
    trainNumber: '23442',
    departureTime: {
      Hours: 21,
      Minutes: 35,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 3,
      AC: 1
    },
    price: {
      sleeper: 500,
      AC: 1000
    },
    delayedBy: 15
  },
  {
    trainName: 'Mumbai Rajdhani',
    trainNumber: '12341',
    departureTime: {
      Hours: 12,
      Minutes: 15,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 10,
      AC: 5
    },
    price: {
      sleeper: 800,
      AC: 2000
    },
    delayedBy: 5
  },
  {
    trainName: 'Kolkata Mail',
    trainNumber: '56782',
    departureTime: {
      Hours: 9,
      Minutes: 45,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 5,
      AC: 3
    },
    price: {
      sleeper: 600,
      AC: 1500
    },
    delayedBy: 0
  },
  {
    trainName: 'Purnagiri Express',
    trainNumber: '12035',
    departureTime: {
      Hours: 9,
      Minutes: 00,
      Seconds: 00
    },
    seatsAvailable: {
      sleeper: 45,
      AC: 20
    },
    price: {
      sleeper: 200,
      AC: 620
    },
    delayedBy: 10
  },
  {
    trainName: 'Shatabdi Express',
    trainNumber: '12031',
    departureTime: {
      Hours: 10,
      Minutes: 10,
      Seconds: 00
    },
    seatsAvailable: {
      sleeper: 15,
      AC: 10
    },
    price: {
      sleeper: 650,
      AC: 1200
    },
    delayedBy: 00
  },
  {
    trainName: 'Jan Shatabdi Express',
    trainNumber: '12021',
    departureTime: {
      Hours: 6,
      Minutes: 20,
      Seconds: 00
    },
    seatsAvailable: {
      sleeper: 00,
      AC: 23
    },
    price: {
      sleeper: 550,
      AC: 2500
    },
    delayedBy: 00
  },
  
];

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hi I am Rohit, Welcome to the backend API. Please use the /trains endpoint to fetch train data.');
});


app.get('/trains', (req, res) => {
 
  const sortedTrains = trains.sort((a, b) => {
    
    if (a.price.sleeper !== b.price.sleeper) {
      return a.price.sleeper - b.price.sleeper;
    }

    
    if (a.seatsAvailable.sleeper !== b.seatsAvailable.sleeper) {
      return b.seatsAvailable.sleeper - a.seatsAvailable.sleeper;
    }

   
    const aDepartureTimeInMinutes = a.departureTime.Hours * 60 + a.departureTime.Minutes + a.delayedBy;
    const bDepartureTimeInMinutes = b.departureTime.Hours * 60 + b.departureTime.Minutes + b.delayedBy;
    return bDepartureTimeInMinutes - aDepartureTimeInMinutes;
  });

  res.json(sortedTrains);
});

app.get('/trains/:trainNumber', (req, res) => {
  const { trainNumber } = req.params;
  const train = trains.find((train) => train.trainNumber === trainNumber);

  res.json(train);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
