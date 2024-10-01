const colors = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 
    'pink', 'brown', 'gray', 'cyan', 'lime', 'magenta', 
    'pink', 'brown', 'gray', 'cyan', 'lime', 'magenta', 
    'red', 'blue', 'green', 'yellow', 'purple', 'orange',
    
];

// Duplicate colors array to make pairs
let colorPairs = colors.flatMap(color => Array(4).fill(color));

// Shuffle the colors
function shuffleColors() {
    // colorPairs = colorPairs.sort(() => 0.5 - Math.random());
    for (let i = colorPairs.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [colorPairs[i], colorPairs[j]]=[colorPairs[j], colorPairs[i]];
    }
}

// Shuffle the colors initially
shuffleColors();

const board = document.getElementById('game-board');
const scoreElement = document.getElementById('score');
const movesElement = document.getElementById('moves');
const timeElement = document.getElementById('time');
const resetButton = document.getElementById('reset-button');

const winModal = document.getElementById('win-modal');
const closeModalButton = document.getElementById('close-modal');
const instructionsModal = document.getElementById('instructions-modal');

let flippedCards = [];
let matchedCards = 0;
let moves = 0;
let score = 0;
let timerInterval;
let time = 0;

window.onload = function (){
    showinstructionsModal();
    closeModalButton();
}

// Start the game timer
function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        timeElement.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    time = 0;
    timeElement.textContent = '00:00';
}

// Delay timer
function delayedStartTimer(){
    setTimeout(()=>{
        startTimer();
    }, 2000)
}
// Function to create a card element
function createCard(color, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-color', color);
    card.setAttribute('data-index', index);

    card.addEventListener('click', () => handleCardClick(card));
    return card;
}

// Function to handle card click
function handleCardClick(card) {
    // If already flipped or matched, ignore click
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    // Flip the card
    card.classList.add('flipped');
    card.style.backgroundColor = card.getAttribute('data-color');

    // Store flipped cards
    flippedCards.push(card);

    // Increment moves
    moves++;
    movesElement.textContent = moves;

    // Check if we have two flipped cards
    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Check if two flipped cards match
function checkMatch() {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.getAttribute('data-color') === secondCard.getAttribute('data-color')) {
        // Match found
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCards += 2;
        score += 10; // Increase score for a match
        scoreElement.textContent = score;

        // Check if the game is won
        if (matchedCards === colorPairs.length) {
            setTimeout(() => {
                showWinModal();  // Show win modal
                resetButton();
            }, 500);
        }
    } else {
        // No match, flip the cards back over
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.style.backgroundColor = '#333';
            secondCard.style.backgroundColor = '#333';
        }, 1000);
    }

    flippedCards = [];
}

// Show the win modal
function showWinModal() {
    winModal.style.display = 'flex';
}

function showinstructionsModal(){
    instructionsModal.style.display = 'flex';
}

function hideinstructionsModal(){
    instructionsModal.style.display = 'none'
}

// Hide the win modal
function hideWinModal() {
    winModal.style.display = 'none';
}

// Render the cards
function renderBoard() {
    board.innerHTML = ''; // Clear the board
    colorPairs.forEach((color, index) => {
        const card = createCard(color, index);
        board.appendChild(card);
    });
}

// Function to reset the game
function resetGame() {
    flippedCards = [];
    matchedCards = 0;
    moves = 0;
    score = 0;
    scoreElement.textContent = score;
    movesElement.textContent = moves;
    resetTimer();
    delayedStartTimer();
    shuffleColors(); // Reshuffle the cards
    renderBoard();   // Re-render the board
    hideWinModal();  // Hide the modal if it's visible
}

// Event listener for reset button
resetButton.addEventListener('click', resetGame);

// Event listener for closing the modal
closeModalButton.addEventListener('click', () => {
    hideWinModal();
    delayedStartTimer();
    hideinstructionsModal();
});

// Initialize the game
startTimer();
renderBoard();



