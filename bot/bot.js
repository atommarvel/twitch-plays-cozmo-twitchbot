const Bot = require('node-twitchbot');
const dotenv = require('dotenv');
const EventEmitter = require('events');
const inst = require('./instructions.json');
const Command = require('../queue/Command.js');
var botEmitter = new EventEmitter();
dotenv.load();
const config = {
  "username": process.env.BOT_USERNAME,
  "channel": process.env.BOT_CHANNEL,
  "oauth": process.env.BOT_OAUTH
}

/*
Chatter user obj example
{
  user: 'KRITZWARE',
  msg: 'Hello chat! Keepo',
  channel: 'kritzware',
  user_id: '44667418'
  level: 'mod',
  sub: '0',
  turbo: '0'
}
*/

function initBot(queue) {
  Bot.run(config);

  Bot.listenFor('!help', (err, chatter) => {
    Bot.msg('This is where I could give tips on how to control Cozmo');
  });

  Bot.listenFor(inst.forward, (err, chatter) => {
    queue.push(new Command(chatter, inst.forward));
  });

  Bot.listenFor(inst.left, (err, chatter) => {
    queue.push(new Command(chatter, inst.left));
  });

  Bot.listenFor(inst.right, (err, chatter) => {
    queue.push(new Command(chatter, inst.right));
  });

  return botEmitter;
}


exports.init = initBot;
exports.getBot = () => {return Bot};

