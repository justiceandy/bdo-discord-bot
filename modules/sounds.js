var player = require('play-sound')(opts = {})
var Promise = require('bluebird');

/*
  Module Handles Playing Sound Notifications for Spawns
*/

// Trigger Boss Audio Notification
exports.bossAudioNotification = function(boss){
  return new Promise(function(resolve, reject) {
    // Run Notification Sound
    exports.playBossSound(boss)
    .then(function(result){
      resolve(result);
    })
    // If we failed, kill Audio process and return err message
    .catch(function(err){
      err.audio.kill();
      resolve(err.msg);
    })
  });
}

// Promise Wrapper for Boss Sound MP3 File
exports.playBossSound = function(boss){
  return new Promise(function(resolve, reject) {
      var audio = player.play('./mp3/'+boss+'.mp3', function(err){
        if (err) reject({'audio': audio, 'msg': err});
        else resolve(true);
      })
  });
}


module.exports = exports;
