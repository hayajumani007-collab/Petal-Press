// This variable stores how many sets are in the bag
var count = 0;

// This function runs when someone clicks "Add to Bag"
function addToBag() {
  count = count + 1;
  document.getElementById("bagCount").innerHTML = "Bag (" + count + ")";
  alert("Added to your bag!");
}

// This function runs when someone clicks the Bag button at the top
function showBag() {
  alert("You have " + count + " nail set(s) in your bag.");
}
