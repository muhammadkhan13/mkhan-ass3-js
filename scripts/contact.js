// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById('submit-button');
let toBeRemoved = document.getElementsByTagName('form');
const toBeReplaced = document.getElementById('replace');
const replacement = document.createElement('p');
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function submit() {
    let i = 0;
    while (i < toBeRemoved.length) {
        toBeRemoved[i].remove();
        i++;
    }

    replacement.innerText = 'Thank you for your message!';
    replacement.style.fontSize = '24px';
    toBeReplaced.parentNode.replaceChild(replacement, toBeReplaced);
}

submitButton.addEventListener('click', submit);