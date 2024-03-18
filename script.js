// DOM ELEMENT VARIABLES

//Submit Button Element
const submitBtn = document.getElementById("submit-btn");

//Rating Component Element
const ratingComponent = document.getElementById("rating-component")


//Thank you Component Element
const thankYouComponent = document.getElementById("thankyou-component")

//Rating Buttons
const ratingBtns = document.querySelectorAll(".rating-btn")


//Dynamic Number 
let ratingScore = document.querySelector(".dynamic-number");


//Default Score 
let defaultScore = 0;



//EVENT LISTENERS

//Submit Btn Event Listener
submitBtn.addEventListener("click", submitScore);

//Rating Btn Event Listener
ratingBtns.forEach((btn) => {
btn.addEventListener("click", ratingBtnClicked)
})






//Functions
function submitScore (e) {

  e.preventDefault();

  ratingComponent.style.display = "none";
  thankYouComponent.style.display = "block"

  ratingScore.textContent = defaultScore;
}


function ratingBtnClicked (e) {

if(e.target.classList.contains("rating-btn")) {
  e.target.classList.toggle("active");
}

defaultScore = e.target.textContent;

}


