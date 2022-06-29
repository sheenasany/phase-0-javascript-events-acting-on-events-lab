// first grabbing dodger and saving a variable to it to reference it again later
const dodger = document.getElementById("dodger")

// now to add event to keydown to let user interact with browser and move dodger using the left and right keys
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
// code to actually move dodger with all these other complicated topics
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
// add another event listener now for the right keydown event and name it moveDodgerRight() 
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  // code to move dodger and become more interactive for the user to move to the right, making sure dodger does not fly off the page and disappear
  function moveDodgerRight() {
      const rightNumbers = dodger.style.left.replace("px", "");
      const right = parseInt(rightNumbers, 10);
    // max width of the page is 400px, subtract the width of dodger and comes to 360 
    // so the parameters must be right should be less than or equal to the 360 which is 
    // the width of the game minus the width of dodger 
      if (right <= 360) {
        dodger.style.left = `${right + 1}px`; //we use plus so that dodger moves to the right instead of - to move it left
      }
    }

// then asked to change the color
dodger.style.backgroundColor = "#FF69B4"

// moving dodger from the bottom directly up a bit.
// dodger.style.bottom = "100px"
// dodger.style.left = "0px"
// dodger.style.bottom = "100px"
/* can even see the "coordinates of dodger by inputing 
'dodger.style.left' or 'dodger.style.bottom' into the console
of the DOM to help you figure out where and how much to move dodger*/


  
