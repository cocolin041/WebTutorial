# We use python flask package and socket method here to communicate with frontend
from flask import Flask, session
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

# when frontend call socket.emit('join'), this function will be triggered, and you can see 
# the message being printed in terminal
@socketio.on('join')
def join():
  print('Someone new just joined!')

# 
@socketio.on('generate')
def generate_question():
  # emit to frontend
  emit('question', 'What\'s the first letter of Brian\'s name?')

@socketio.on('answer')
def check_answer(ans):
  print(f'Answer: {ans}')

  if ans == 'B':
    emit('score', 'Correct!')
  else:
    emit('score', 'Incorrect!')

if __name__ == '__main__':
  socketio.run(app, debug=True)
