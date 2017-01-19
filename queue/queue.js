// TODO: persist queue to disk or a DB every once in a while in lieu of a crash

class Queue {
  constructor() {
    this.q = [];
  }
  
  push(command) {
    // you could prevent the push if you didn't want multiple commands from the same user or only wanted it from 1 user
    this.q.push(command);
  }

  shift() {
    return this.q.shift();
  }
}

module.exports = Queue;
