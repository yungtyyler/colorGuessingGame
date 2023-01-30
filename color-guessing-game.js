const colorsArray = ['cyan', 'pink', 'violet', 'blue', 'magenta', 'green', 'orange', 'red', 'yellow', 'white'];

function runGame() {
    
    let guess = "";
    let correct = false;
    const targetIndex = Math.floor(Math.random()*colorsArray.length);
    const target = colorsArray[targetIndex];
    let numTries = 0;

    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + colorsArray.sort().join(', ') +
        '\n\nWhat color am I thinking of?\n');
        if (guess === null) {
            alert('Sad to see you go...');
            return;
        }
        numTries += 1;
        alert(numTries + ' attempt(s).')
        correct = checkGuess(guess.toLowerCase(), target);
    } while(!correct);
    alert('Congratulations!\n\nIt only took you ' + numTries + ' attempt(s) to guess my color!');
    
    document.body.style.background = guess; 
}

function checkGuess(guess, target) {
    let correct = false;
    if (!colorsArray.includes(guess)) {
        alert('Invalid guess...');
    } else if (guess > target) {
        alert('Your color is of a higher alphabetical index than my color!');
    } else if (guess < target) {
        alert('Your color is of a lower alphabetical index than my color!');
    } else {
        alert('You got my color!');
        return correct = true;
    }
}