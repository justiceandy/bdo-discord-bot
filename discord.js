var Discord = require('discord.io');

// Load Environment Variables [.env.json] for Tokens
require('dot-env');

// Import Json Files for Channels, Boss Info, Discord Setup, Commands
var channels = require('./data/json/channels.json');
var bosses = require('./data/json/bosses.json');
var commands = require('./data/json/commands.json');

// Authenticate Client
var bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});

// On Bot StartUP
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
    // Send Log Data
});

bot.on('message', function(user, userID, channelID, message, event) {
  console.log(user, userID, channelID, message, event);

  // Test
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});
