
let count1 = 0;
let count2 = 0;

function playerChoice(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerSelection, computerSelection);

    displayResult(playerSelection, computerSelection, result);
    updateScoreDisplay(); // Update the score after displaying the result
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function displayResult(player, computer, result) {
    const winnerElement = document.getElementById('winner');

    winnerElement.textContent = `${result} You chose ${player}, and the computer chose ${computer}.`;
    
    if (result.includes('You win')) {
        count1++;
        winnerElement.style.backgroundColor = 'green';
    } else if (result.includes('Computer wins')) {
        count2++;
        winnerElement.style.backgroundColor = 'red';
    } else { // It's a tie
        winnerElement.style.backgroundColor = 'grey';
    }

    winnerElement.style.display = 'block';
}

function updateScoreDisplay() {
    const playerScoreElement = document.getElementById('playerCount');
    const computerScoreElement = document.getElementById('compCount');

    playerScoreElement.textContent = count1;
    computerScoreElement.textContent = count2;
}


