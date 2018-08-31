$(document).ready(function() {

var correct;
var wrong;
var unanswered;
var time;
var isRunning;
var intervalId;
var questionSet = [];


function init(){
     correct = 0;
     wrong = 0;
     unanswered=0;
     time = 45;
     isRunning = false;

     $("#timer").html(time);
    $("#quiz-page").hide();
    $("#final-page").hide();

    questionSet = [
    {
        question: "What color is the sky?",
        answers: [
            "Blue",
            "Green",
            "Pink",
            "Red"
        ],
        correctAnswer: "Blue"
    },
    {
        question: "What is the capitol of California?",
        answers: [
            "San Diego",
            "Oakland",
            "Los Angeles",
            "Sacramento"
        ],
        correctAnswer: "Sacramento"
    },
    {
        question: "In what year was UCLA founded?",
        answers: [
            "1911",
            "1927",
            "1919",
            "1934"
        ],
        correctAnswer: "1919"
    },
    {
        question: "Who owns Amazon?",
        answers: [
            "Elon Musk",
            "Jeff Bezos",
            "Peter Thiel",
            "Bill Gates"
        ],
        correctAnswer: "Jeff Bezos"
    },
    {
        question: "What river is the longest in the world?",
        answers: [
            "Nile",
            "Amazon",
            "Mississippi",
            "Euphrates"
        ],
        correctAnswer: "Amazon"
    },
    {
        question: "When was the War of 1812?",
        answers: [
            "1812",
            "1813",
            "1811",
            "1809"
        ],
        correctAnswer: "1812"
    },
    {
        question: "What is the tallest mountain in California?",
        answers: [
            "Denali",
            "Mt. McKinley",
            "Mt. Whitney",
            "Mt. Everest"
        ],
        correctAnswer: "Mt. Whitney"
    },
    {
        question: "What company owns Xbox?",
        answers: [
            "Sony",
            "Nintendo",
            "Atari",
            "Microsoft"
        ],
        correctAnswer: "Microsoft"
    }
];

for (let i = 0; i <questionSet.length; i++){
    var newH = $("<h3 class='question'>");
    var que = (questionSet[i].question);
    newH.text(que);
    $("#question"+i).append(newH);
    
    for (let j=0; j < questionSet[i].answers.length; j++){
        //creates one radio button for each possible answer
        var newInput = $("<input type='radio'>");
        newInput.attr("id", "answer-"+i+"-"+j);
        newInput.attr("class", "option");
        newInput.attr("name", "answer"+i);
        newInput.attr("value", questionSet[i].answers[j]);
        $("#answers"+i).append(newInput);
        
        //creates a new label for each button
        var newLabel = $("<label>");
        newLabel.attr("for", "answer-"+i+"-"+j);
        $("#answers"+i).append(newLabel);
        newLabel.text(questionSet[i].answers[j]);
    }
   }
}
init();

function startQuiz(){
    $("#quiz-page").show();
    $("#start-page").hide();
    clearInterval(intervalId);
    intervalId = setInterval(quizTimer, 1000);
}

function quizTimer(){
    time--;
    $("#timer").html(time);
    if (time === 0){
        endQuiz();
    }
}

$("#start").on("click", startQuiz);


//uses two loops to add the questions and answers to DOM elements
 //ends init functionfor (let i=0; i < questionSet.length; i++){
function endQuiz(){
    clearInterval(intervalId);
    $("#quiz-page").hide();
    $("#final-page").show();
    var userAnswers = [
        $("input[name='answer0']:checked").val(),
        $("input[name='answer1']:checked").val(),
        $("input[name='answer2']:checked").val(),
        $("input[name='answer3']:checked").val(),
        $("input[name='answer4']:checked").val(),
        $("input[name='answer5']:checked").val(),
        $("input[name='answer6']:checked").val(),
        $("input[name='answer7']:checked").val(),
    ]

console.log(userAnswers);

    for (let i=0; i<questionSet.length; i++){
        if(userAnswers[i] === questionSet[i].correctAnswer){
            correct++;
        }
        else if(!userAnswers[i]){
            unanswered++;
        }

        else{
            wrong++;
        }
    }
    console.log(correct, wrong);
    var correctScore = $("<h3 class='results'>");
    var wrongScore = $("<h3 class='results'>");
    var unansweredScore = $("<h3 class='results'>");
    correctScore.text("Correct: "+ correct);
    wrongScore.text("Incorrect: " + wrong);
    unansweredScore.text("Unanswered: " + unanswered);
    $("#final-page").append(correctScore, wrongScore, unansweredScore);
    if (correct <= 4){
        $("#failed").show();
    }
    else if (correct > 4){
        $("#passed").show();
    }
}


$(".finish").on("click", endQuiz);
//     var userAnswers = [
//         $("input[name='answer0']:checked").val(),
//         $("input[name='answer1']:checked").val(),
//         $("input[name='answer2']:checked").val(),
//         $("input[name='answer3']:checked").val(),
//         $("input[name='answer4']:checked").val(),
//         $("input[name='answer5']:checked").val(),
//         $("input[name='answer6']:checked").val(),
//         $("input[name='answer7']:checked").val(),
//     ]

// console.log(userAnswers);

//     for (let i=0; i<questionSet.length; i++){
//         if(userAnswers[i] === questionSet[i].correctAnswer){
//             correct++;
//         }
//         else{
//             wrong++;
//         }
//     }
//     console.log(correct, wrong);
// });


// for (let i=0; i < questionSet.length; i++){
//     $("#question"+i).html(questionSet[i].question);
//     $("#answers"+i).append("<input type='radio'>");
//     $("#answers"+i).append("<input type='radio'>");
//     $("#answers"+i).append("<input type='radio'>");
//     $("#answers"+i).append("<input type='radio'>");

}); //ends document ready function

