videojs.registerPlugin('videoLoop', function() {
  // Get a reference to the player
  var myPlayer = this,
      videoLoopNum = 0;

  // Listen for the "ended" event and play the video
  // You can also do this by adding the loop attribute to the player code
  myPlayer.on("ended", function () {
      playVideo();
  });

  // Play the video first time
  playVideo();

  // +++ Loop video 3 times +++
  function playVideo () {
    // Check the number of times the video has played
    if (videoLoopNum < 3) {
      // Start video playback
      myPlayer.play();
      // Increment number of times video played
      videoLoopNum++;
    }
  }
});
