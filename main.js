$(document).ready(function() {

var correct = 0;
var wrong = 0;

var questionSet = [
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
]
for (let i=0; i < questionSet.length; i++){
    $("#question"+i).html(questionSet[i].question);
    for (let j=0; j < questionSet[i].answers.length; j++){
        var newInput = $("<input type='radio'>");
        newInput.attr("id", "answer-"+i+"-"+j);
        newInput.attr("class", "option");
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

