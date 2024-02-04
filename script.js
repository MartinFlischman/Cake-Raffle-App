// Get relevant elements
const nameInput = document.getElementById('participantName');
const participantsList = document.querySelector('.participants-container');
const drawButton = document.getElementById('draw-button');
const winnerDisplay = document.getElementById('winnerSection');

// Array to store participant names
const participants = [];

// Function to add participant to the list
function addParticipant() {
    // Get the entered name
    const name = nameInput.value.trim();

    // Check if the name is not empty
    if (name !== '') {
        // Add the name to the participants array
        participants.push(name);

        // Display the name in the participants list
        updateParticipantsList();

        // Clear the input field
        nameInput.value = '';
    }
}

// Function to draw a random winner
function drawWinner() {
    // Check if there are participants
    if (participants.length > 0) {
        // Randomly select a winner
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];

        // Display the winner's name with emojis
        winnerDisplay.innerHTML = `<p>🎉 Winner: ${winner} 🍰</p>`;
    }
}

// Function to update participants list display
function updateParticipantsList() {
    participantsList.innerHTML = '<h2>Participants</h2>';
    
    // Loop through participants and display each name
    participants.forEach(participant => {
        participantsList.innerHTML += `<p>${participant}</p>`;
    });
}

// Event listener for form submission
document.getElementById('submit-button').addEventListener('click', addParticipant);

// Event listener for the draw button
drawButton.addEventListener('click', drawWinner);
