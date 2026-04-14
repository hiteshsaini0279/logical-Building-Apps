let startbtn = document.getElementById("start-btn");
let startScreen = document.getElementById("start-screen");
     let questions = [];


function showQuestion() {

}

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