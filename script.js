
// Create instances of Chateau for red and blue castles
const redCastle = new Chateau("red");
const blueCastle = new Chateau("blue");
var points;
// Add event listeners for blue castle buttons
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

document.getElementById("move").addEventListener("click", function() {
  moveWarriorsOneStep(); // Call the moveWarriorsOneStep function when the button is clicked
});
// Function to update resources display for blue castle
function updateBlueResources() {
  document.getElementById("blue-resources").textContent = blueCastle.resources;
}

// Function to update resources display for red castle
function updateRedResources() {
  document.getElementById("red-resources").textContent = redCastle.resources;
}





// Function to move warriors one step on the track
// Function to move warriors one step on the track


// Example of calling moveWarriorsOneStep function
// Call this function whenever you want to move the warriors one step (e.g., when a button is clicked)
// Add event listener to the "move" button


