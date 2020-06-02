// this is a interface to connect function at server
// these functions will be imported and use at other js files
import openSocket from 'socket.io-client';

// listen to server ip
const socket = openSocket('http://localhost:5000');

export function subscribeToQuestions(callback) {
  // socket.on: trigger event at backend
  socket.emit('join');

  // socket.on: trigger event at backend to receive information
  // start listening to frontend and receive information when there's action
  socket.on('question', question => callback(question));

  // this will be printed in the console section on browser
  console.log('Subscribed to questions.');
}

export function generateQuestion() {
  socket.emit('generate');
}

export function answerQuestion(ans) {
  socket.emit('answer', ans);
}

export function subscribeToAnswer(callback) {
  socket.on('score', score => callback(score));
}