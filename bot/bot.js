const Bot = require('node-twitchbot');
const config = require('../private/botConfig.json');
const EventEmitter = require('events');
const inst = require('./instructions.json');
const Command = require('../queue/Command.js');
var botEmitter = new EventEmitter();


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

