$(document).ready(function(){
    var questions = [
{
    questionsNumber1: 1,
    questionText: "T/F - Giannis Antekeumpo is the MVP of 2019 NBA Season?",
        answers: [{
            answerNumber: 1,
            answerText: 'True',
            answersCorrect: True
    },
    {
        answerNumber: 2,
            answerText: 'False',
            answerCorrect: False
            },
                    ],
    
    questionsNumber2: 2,
    questionText: "T/F - Golden State Warriors are the 2019 NBA Champions?",
        answers: [{
            answerNumber: 2,
            answerText: 'True',
            answersCorrect: False
    },
    {
        answerNumber: 2,
            answerText: 'False',
            answerCorrect: True
            },
                    ],
    
    questionsNumber3: 3,
    questionText: "T/F - Kawaii Leneaord was Finals MVP?",
        answers: [{
            answerNumber: 3,
            answerText: 'True',
            answersCorrect: True
    },
    {
        answerNumber: 3,
            answerText: 'False',
            answerCorrect: False
        },
                ],

}]}

)

var userAnswer;
var numCorrect = 0;
var numQuestions = questions.length;
var questionTracker = 0;
var timer;
var time = 20;


