function light(color, callback) {
  // Log the color after a 1-second delay
  window.setTimeout(() => {
    console.log(color);
    // Call the callback after logging the color
    callback();
  }, 1000);
}

function trafficLightSequence() {
  // Define the sequence of colors
  const colors = ["green", "amber", "red", "amber", "green"];

  // Start the sequence
  function nextColor(index) {
    if (index < colors.length) {
      light(colors[index], () => {
        // Move to the next color in the sequence
        nextColor(index + 1);
      });
    } else {
      // Log 'finished' after the sequence is complete
      console.log("finished");
    }
  }

  // Start the sequence with the first color
  nextColor(0);
}

// Start the traffic light sequence
trafficLightSequence();
