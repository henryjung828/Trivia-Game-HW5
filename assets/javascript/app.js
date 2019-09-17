$(document).ready(function(){

    $("#start").on('click', nbatrivia.startGame);
    $("time-remaining").hide();
    $(docuemnt).on('click', '.option', trivia.guessChecker);

})

var trivia = {
 
    correct: 0,
    incorrect: 0,
    notAnswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',

    questions: {
        q1: "T/F - Giannis Antekeumpo is the MVP of 2019 NBA Season?",
        q2: "T/F - Golden State Warriors are the 2019 NBA Champions?",
        q3: "T/F - Kawaii Leneaord was Finals MVP?"
       
    },

    answers: {
        q1: True,
        q2: False,
        q3: True,
        q4: True,
    
    },
    
}