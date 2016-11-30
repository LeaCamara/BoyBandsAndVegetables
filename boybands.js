var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;
/* will only loop <5 times since there are five items, starting at 0 */

// Keep track of which band we're on in the loop
var currentBand = "";
/* same as var current band; */

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
/* b/c <div id="boy-bands"> */

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
/* loopTracker is the same thing as the index [i], which starts at 0, 
	runs less than the loop count of 5, & increments by 1 */

  // Add the band names into the correct <div>
  currentBand = bands[loopTracker]
  /* gets the band ID & starts to run the loop in increments starting at 0 */

  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker]


	bandElement.innerHTML += '<p>' + currentBand + '</p>';

	veggieElement.innerHTML = veggieElement.innerHTML + '<p>' + currentVeggie + '</p>';

	/* These two are the exact same thing, but the first is less redundant. 
	The += is saying assign this new variable/element/object (+ the property .innerHTML) to make it equal to what came before and also add the  
	bands/veggies, each in their own paragraph/block element. */

}

// Loop through the two arrays provided (bands and vegetables) 
// and output each element in the arrays into their corresponding HTML <div> element. 
// Ensure that each item is in a block element (e.g. li, div, p. etc...)
