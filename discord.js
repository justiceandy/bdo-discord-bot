var Discord = require('discord.io');
require('dot-env');

var bot = new Discord.Client({
    token: process.env.token,
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
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
