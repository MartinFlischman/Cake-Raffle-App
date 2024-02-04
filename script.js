const participantInput = document.getElementById('participantName');
const participantsContainer = document.querySelector('.participants-container');
const winnerSection = document.getElementById('winnerSection');
const winnerNameElement = document.getElementById('winnerName');
let participants = [];

function addParticipant() {
    const participantName = participantInput.value.trim();
    if (participantName !== '') {
        participants.push(participantName);
        participantInput.value = '';
        updateParticipantsList();
    }
}

function drawWinner() {
    if (participants.length > 0) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[randomIndex];
        winnerNameElement.innerText = winner;
        showWinnerSection();
    } else {
        hideWinnerSection();
    }
}

function updateParticipantsList() {
    participantsContainer.innerHTML = '<h2>Participants</h2>';
    participants.forEach(participant => {
        participantsContainer.innerHTML += `<p>${participant}</p>`;
    });
}

function showWinnerSection() {
    winnerSection.style.display = 'block';
}

function hideWinnerSection() {
    winnerSection.style.display = 'none';
}
