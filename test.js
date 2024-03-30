const io = require('socket.io-client');

// Replace 'http://your-nodejs-server-url' with the actual URL of your Socket.IO server
const socket = io('https://webapistg.msdf.gov.qa/sokoon');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

// Listen for 'new_notification' event
socket.on('new_notification', (data) => {
  console.log('Received notification:', data);
});

// Listen for any errors
socket.on('error', (error) => {
  console.error('Error:', error);
});
