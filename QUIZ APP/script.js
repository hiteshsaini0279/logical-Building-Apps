let startbtn = document.getElementById("start-btn");
let startScreen = document.getElementById("start-screen");
let options = document.getElementById("options");
let checkBtn = document.getElementById("check-btn");
let nextBtn = document.getElementById("next-btn");
let scoreDisplay = document.getElementById("score");
let endBtn = document.getElementById("end-btn");
let resultDiv = document.getElementById("result");
let quizScreen = document.getElementById("quiz-screen");
     let questions = [];
let currentQuestionIndex = 0;
let answered = false;
let score =0;

function showQuestion() {
     answered = false;
let question=document.getElementById("question");

question.innerText=questions[currentQuestionIndex].question;
options.innerHTML="";
questions[currentQuestionIndex].options
for(let i=0;i<questions[currentQuestionIndex].options.length;i++){
     let optionBtn=document.createElement("button");
     optionBtn.innerText=questions[currentQuestionIndex].options[i];
     optionBtn.addEventListener("click",function(){
for (let btn of options.children) {
    btn.classList.remove("selected");
}
        this.classList.add("selected");
     })
         options.appendChild(optionBtn);
        
}
}
function updateScore() {
    scoreDisplay.innerText = "Score: " + score;
}
         checkBtn.addEventListener("click",function(){
          if(answered) return;
          let selectedBtn=options.querySelector(".selected");
   if(selectedBtn){
     let answer=selectedBtn.innerText;
     if(answer.trim().toLowerCase() === questions[currentQuestionIndex].correct.trim().toLowerCase()){
           score++;
               updateScore();
           alert("Correct!");
   }else{
     alert("Wrong! The correct answer is: " + questions[currentQuestionIndex].correct);
   }
         }else{
     alert("Please select an option!");
         }
         answered=true;
});


nextBtn.addEventListener("click",function(){

if(!answered){
     alert("Please check your answer before moving to the next question!");
     return;
}
  currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz Finished! Score: " + score);
    }

});
endBtn.addEventListener("click",function(){
quizScreen.style.display="none";
resultDiv.style.display="block";
resultDiv.innerText="Your final score is: " + score + " out of " + questions.length;
});
startbtn.addEventListener("click", function() {
     startScreen.style.display = "none";
           let quizScreen = document.getElementById("quiz-screen");
              quizScreen.style.display = "flex";
              fetch("questions.json")
            .then(response=>response.json())
            .then(data=>{
                questions = data;
                showQuestion();
            })
            .catch(error=>console.error("Error fetching questions:", error));
});