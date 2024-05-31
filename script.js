
// Create instances of Chateau for red and blue castles
const redCastle = new Chateau("red");
const blueCastle = new Chateau("blue");
var points;
var worr={"elf":"elf","chief-elf":"chief-elf","nain":"nain","chief-nain":"chief-nain"}
Object.entries(worr).forEach(([key, selector]) => {
  console.log(selector);
  document.querySelector(".B"+selector).addEventListener("click", function() {
    blueCastle.addWarrior(key);
    updateResources();
  });
  document.querySelector(".R"+selector).addEventListener("click", function() {
    redCastle.addWarrior(key);
    updateResources();
  });
  console.log(selector);
});
/* Add event listeners for blue castle buttons
document.querySelector(".Belf").addEventListener("click", function() {
  blueCastle.addWarrior("elf");
  updateBlueResources();
});

document.querySelector(".Bchief-elf").addEventListener("click", function() {
  blueCastle.addWarrior("chief-elf");
  updateBlueResources();
});

document.querySelector(".Bnain").addEventListener("click", function() {
  blueCastle.addWarrior("nain");
  updateBlueResources();
  
});

document.querySelector(".Bchief-nain").addEventListener("click", function() {
  blueCastle.addWarrior("chief-nain");
  updateBlueResources();
});

// Add event listeners for red castle buttons
document.querySelector(".Relf").addEventListener("click", function() {
  redCastle.addWarrior("elf");
  updateRedResources();
});

document.querySelector(".Rchief-elf").addEventListener("click", function() {
  redCastle.addWarrior("chief-elf");
  updateRedResources();
});

document.querySelector(".Rnain").addEventListener("click", function() {
  redCastle.addWarrior("nain");
  updateRedResources();
});

document.querySelector(".Rchief-nain").addEventListener("click", function() {
  redCastle.addWarrior("chief-nain");
  updateRedResources();
});
*/
document.getElementById("move").addEventListener("click", function() {
  moveWarriorsOneStep(); // Call the moveWarriorsOneStep function when the button is clicked
});
// Function to update resources display for blue castle
function updateResources() {
  document.getElementById("blue-resources").textContent = blueCastle.resources;
  document.getElementById("red-resources").textContent = redCastle.resources;
}



document.addEventListener('DOMContentLoaded', () => {
  // Initialize audio element
  const audio = new Audio("mp3/bg.mp3");
  audio.volume = 0.2;
  audio.loop = true;

  // Function to toggle audio playback
  function toggleAudio() {
      if (audio.paused) {
          audio.play().catch(error => {
              console.error('Error playing audio:', error);
          });
      } else {
          audio.pause();
      }
  }

  // Add event listener to the play button
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', toggleAudio);
});
