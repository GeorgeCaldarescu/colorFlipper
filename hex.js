// create the variable to pick a random hex code
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn  = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#';
    
    // set a loop that run 6 times to get a random value from hex array
    for(let i = 0; i < 6; i++){
        hexColor +=hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// set a function to get random numbers from the array

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
};