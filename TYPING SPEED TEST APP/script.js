const startBtn= document.getElementById("start-btn");
const textDisplay= document.getElementById("text");
const inputArea= document.getElementById("input");
const timerDisplay= document.getElementById("timer");
const resultDisplay= document.querySelector(".result"); 
let timeLeft= 60;
let timer;
 let isTyping = false;
let sampleTxt="Time management is a critical skill for administrative professionals. Prioritize tasks based on urgency and importance. Set realistic deadlines and break down large projects into smaller, manageable steps. Utilize time management tools like calendars and to-do lists to stay organized. Minimize distractions and focus on one task at a time to maximize efficiency. Delegate tasks when appropriate to free up time for high-priority responsibilities.";
 startBtn.addEventListener("click", function(){
    textDisplay.style.display="block";
    inputArea.style.display="block";
    timerDisplay.style.display="block";
    startBtn.style.display = "none";
    inputArea.disabled = false;
inputArea.focus();
textDisplay.textContent= sampleTxt;
 })
 function startTimer(){
    timer =setInterval(function(){
        timeLeft--;
        timerDisplay.textContent= `Time Left: ${timeLeft}s`;
        if(timeLeft <= 0){
            clearInterval(timer);
              let userText = inputArea.value; 
            inputArea.disabled = true;
            let accuracy =calculateResults(userText, originalText);
            let wpm = calculateWPM(userText);
             resultDisplay.style.display = "block";
             if (userText.trim() === "") {
    resultDisplay.innerText = "No typing detected!";
}
            resultDisplay.innerHTML = `Time's up!<br>Accuracy: ${accuracy}%<br>WPM: ${wpm}`;
        }
    }, 1000);
 }

inputArea.addEventListener("input", function(){
if(!isTyping){
    startTimer();
   isTyping=true;    
}
});


let originalText = sampleTxt;
let userText = inputArea.value;
function calculateResults(userText, originalText) {
    let correct = 0;

    for (let i = 0; i < userText.length; i++) {
        if (userText[i] === originalText[i]) {
            correct++;
        }
    }

    let accuracy = (correct / userText.length) * 100;
    return accuracy.toFixed(2);
}
function calculateWPM(userText) {
    let words = userText.trim().split(" ").length;
    let timeTaken = (60 - timeLeft) / 60;
if (timeTaken === 0) return 0;
    let wpm = words / timeTaken;
    return Math.round(wpm);
}
