// Access the form and relevant elements
const form = document.querySelector('.form-container');
const nameInput = document.getElementById('participantName');
const participantsList = document.getElementById('participants-list');
const drawButton = document.getElementById('draw-button');
const resetButton = document.getElementById('reset-button');
const winnerDisplay = document.getElementById('winnerSection');

// Array to store participant names
const participants = [];

// Submit event listener for the form
form.addEventListener('click', function (event) {
    if (event.target.id === 'submit-button') {
        event.preventDefault(); // Prevent form submission

        // Get the entered name
        const name = nameInput.value.trim();

        // Check if the name is not empty
        if (name !== '') {
            // Add the name to the participants array
            participants.push(name);

            // Display the name in the participants list
            participantsList.innerHTML += `<p>${name}</p>`;

            // Clear the input field
            nameInput.value = '';
        }
    }
});

// Click event listener for the draw button
drawButton.addEventListener('click', function () {
    // Check if there are participants
    if (participants.length > 0) {
        // Randomly select a winner
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];

        // Display the winner's name with emojis
        winnerDisplay.innerHTML = `<p>Winner: ${winner}</p>`;

        // Trigger confetti
        triggerConfetti();

        // Clear participants array (reset for a new round)
        participants.length = 0;
    }
});

// Click event listener for the reset button
resetButton.addEventListener('click', function () {
    // Clear the participants array
    participants.length = 0;

    // Clear the participants list
    participantsList.innerHTML = '';

    // Clear the winner display
    winnerDisplay.innerHTML = '';
});

// Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}
