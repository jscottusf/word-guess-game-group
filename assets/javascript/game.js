var wordChoices = ["fish", "shark", "whale", "limefish", "orca", "porpoise"]
var goalWord;
var wordBoard = [];
var wordBoardText;
var guessesRemaining;
var guessesRemainingText = document.getElementById("guessesRemainingText");
var guesses;
var guessesText;
var wins = 0;
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var losses = 0;
var playerGuess;
// var goalWordIndex;
//assign variables to text
wordBoardText = document.getElementById("wordBoardText");
guessesText = document.getElementById("guessesText");
function ResetGame() {
    guessesRemaining = 10;
    guessesRemainingText.textContent = guessesRemaining;
    goalWord = wordChoices[(Math.floor(Math.random() * wordChoices.length) + 1)];
    wordBoard = [];
    for (let i = 0; i < goalWord.length; i++){
        wordBoard.push("_");
    }
    wordBoardText.textContent = wordBoard.join("");
    guesses = [];
};
function addLetter(letter){
    if(!(guesses.includes(letter))){
        guesses.push(letter);
        guessesText.textContent = guesses.join(" ");
    }
}
ResetGame();
console.log(goalWord);
document.onkeyup = function(event) {
    playerGuess = event.key.toLowerCase();
    if(event.which <= 90 || event.which >= 65){
        
        if(guessesRemaining == 0){
            losses++
            lossesText.textContent = losses;
            ResetGame();
        } else if(goalWord == wordBoard.join("")){
            wins++
            winsText.textContent = wins;
            ResetGame();
        }
        if(goalWord.includes(playerGuess)){
            console.log(playerGuess);
            for (let i = 0; i < goalWord.length; i++){
               let goalWordIndex = goalWord.indexOf(playerGuess, i);
                    if(!(goalWordIndex == -1)){
                        wordBoard[goalWordIndex] = playerGuess;
                        wordBoardText.textContent = wordBoard.join("");
                    }
            }
        } else {
            guessesRemaining--;
            guessesRemainingText.textContent = guessesRemaining;
        }
        addLetter(playerGuess);
    }
}















