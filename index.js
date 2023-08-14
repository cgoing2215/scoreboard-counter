let homeScoreShow = document.getElementById("home-score");
let guestScoreShow = document.getElementById("guest-score");
let winnerAnnouncement = document.getElementsByClassName("announce-winner")
let textAnnouncement = document.getElementsByClassName("announcement-text")
let mainContent = document.getElementsByClassName("container")
let homeScore = 0;
let guestScore = 0;

 // Home Score Functions
function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreShow.textContent = homeScore;
}

function increaseHomeScoreTwo() {
    homeScore += 2;
    homeScoreShow.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3;
    homeScoreShow.textContent = homeScore
}

// Guest Score Functions
function increaseGuestScoreOne() {
    guestScore += 1;
   guestScoreShow.textContent = guestScore;
}

function increaseGuestScoreTwo() {
    guestScore += 2;
   guestScoreShow.textContent = guestScore;
}

function increaseGuestScoreThree() {
    guestScore += 3;
   guestScoreShow.textContent = guestScore;
}

// Restart

function restartGame() {
    guestScore = 0;
    homeScore = 0;

    homeScoreShow.textContent = homeScore;
    guestScoreShow.textContent = guestScore;
}