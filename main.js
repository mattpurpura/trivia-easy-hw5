$(document).ready(function() {

var correct = 0;
var wrong = 0;

var questionSet = [
    {
        question: "What color is the sky?",
        answers: [
            "Blue",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    },
    {
        question: "What is question two?",
        answers: [
            "Answer one",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    },
    {
        question: "What is question three?",
        answers: [
            "Answer one",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    },
    {
        question: "What is question four?",
        answers: [
            "Answer one",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    },
    {
        question: "What is question five?",
        answers: [
            "Answer one",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    },
    {
        question: "What is question six?",
        answers: [
            "Answer one",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    },
    {
        question: "What is question seven?",
        answers: [
            "Answer one",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    },
    {
        question: "What is question eight?",
        answers: [
            "Answer one",
            "Answer two",
            "Answer three",
            "Answer four"
        ],
        correctAnswer: "Answer one"
    }
]
for (let i=0; i < questionSet.length; i++){
    $("#question"+i).html(questionSet[i].question);
    for (let j=0; j < 4; j++){
        var newInput = $("<input type='radio'>");
        newInput.attr("id", "answer-"+i+"-"+j);
        newInput.attr("name", "answer"+i);
        newInput.attr("value", questionSet[i].answers[j]);
        $("#answers"+i).append(newInput);
        var newLabel = $("<label>");
        newLabel.attr("for", "answer-"+i+"-"+j);
        $("#answers"+i).append(newLabel);
        newLabel.text(questionSet[i].answers[j]);
    }
}


$(".finish").on("click", function(){
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
        else{
            wrong++;
        }
    }
    console.log(correct, wrong);
});


// for (let i=0; i < questionSet.length; i++){
//     $("#question"+i).html(questionSet[i].question);
//     $("#answers"+i).append("<input type='radio'>");
//     $("#answers"+i).append("<input type='radio'>");
//     $("#answers"+i).append("<input type='radio'>");
//     $("#answers"+i).append("<input type='radio'>");

}); //ends document ready function

