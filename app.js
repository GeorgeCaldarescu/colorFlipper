// This is the JS code for the simple page

// set the variable
const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"];

// target the html code, for example when the button is clicked will do an action
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// set the event listener, so what will happens when the button is clicked
btn.addEventListener('click', function(){
    // get random number between 0-3 
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// generate a function to get a random number between 0 and 3 because of the index colors
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);   //math floor is used to round down the number (1.56 will be 1)
}