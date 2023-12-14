/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let dayCounter = 0;
let clickedElements = [];
const displayedCost = document.getElementById('calculated-cost');

let dayButtons = document.getElementsByTagName('li');
let clearButton = document.getElementById('clear-button');
let halfButton = document.getElementById('half');
let fullButton = document.getElementById('full');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function colorChange(ev) {
    let button = ev.target;
    if (button.classList.contains('clicked') == false) {
        if (clickedElements.includes(button) == false) {
            button.style.backgroundColor = '#e5af42';
            button.classList.add('clicked');
            clickedElements.push(button);
            dayCounter += 1;
        }
    }

    recalculate();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    while (clickedElements.length > 0) {
        let tempButton = clickedElements.pop();
        tempButton.classList.remove('clicked');
        tempButton.style.backgroundColor = 'white';
    }
    costPerDay = 0;
    dayCounter = 0;

    recalculate();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function chooseHalf() {
    costPerDay = 20;

    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");

    halfButton.style.backgroundColor = '#e5af42';
    fullButton.style.backgroundColor = 'white';

    clickedElements.push(halfButton);

    recalculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function chooseFull() {
    costPerDay = 35;

    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");

    fullButton.style.backgroundColor = '#e5af42';
    halfButton.style.backgroundColor = 'white';

    clickedElements.push(fullButton);

    recalculate();
}





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    let totalcost = dayCounter * costPerDay;
    displayedCost.innerHTML = totalcost;
}


for (let i = 0; i < dayButtons.length; i++) {
    dayButtons[i].addEventListener('click', colorChange);
}
clearButton.addEventListener('click', clearDays);
halfButton.addEventListener('click', chooseHalf);
fullButton.addEventListener('click', chooseFull);