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
    

    startGame: function() {
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.notAnswered = 0;
        clearInterval(trivia.timerId);

       
    $('#game')
    .show();

    $('#remaining-time')
    .show();

    $('#results')
    .html('');

    $('#timer')
    .text(trivia.timer);

    $('#start')
    .hide();

    trivia.nextQuestion();

},


nextQuestion: function() {
trivia.timer = 20;
    $('#timer')
        .removeClass('last-seconds');
    $('#timer')
        .text(trivia.timer);


    var questionContent = Object.values(trivia.questions)
    [trivia.currentSet];
   
   
    $('#question')
        .text(questionContent);

    var questionOptions = Object.values(trivia.options)
    [trivia.currentSet];

$.each(questionOptions, function(index, key) {
    $('#options')
        .append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
})
},

timerRunning: function() {
    if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions)
            .length) {
            $('#timer')
                .text(trivia.timer);
            trivia.timer--;
            if (trivia.timer === 5) {
                $('#timer')
                    .addClass('last-seconds');
            }
        } else if (trivia.timer === -1) {
            trivia.notAnswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $('#results')
                .html('<h3>Timeout! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
        } else if (trivia.currentSet === Object.keys(trivia.questions)
        .length) {
            $('#results')
                .html('<h3>Your an NBA All-Star!</h3>' +
                    '<p>Correct: ' + trivia.correct + '</p>' +
                    '<p>Incorrect: ' + trivia.incorrect + '</p>' +
                    '<p>notAnswered: ' + trivia.notAnswered + '</p>' +
                    '<p>Please play again!</p>');
            
            $('#game')
            .hide();

            $('#start')
            .show();

    }
},

    guessChecker: function() {
        var resultId;
        var currentAnswer = Object.values(triia.answers)[trivia.currentSet];

        if ($(this).text() === currentAnswer){
        $(this).addClass('btn-success').removeClass('btn-info');
        trivia.correct++;
        
        clearInterval(trivia.timerId);
       
        resultId = setTimeout(trivia.guessResult, 1000);
       
        $('#results').html('<h3>Gotem Coach</h3>');
    }

            else {
                $(this)
                .addClass('btn-danger')
                .removeClass('btn-info');

            trivia.incorrect++;
            
            clearInterval(trivia.timerId);
            
            resultId = setTimeout(trivia.guessResult, 1000);
            
            $('#results').html('<h3>Get some more practice! ' + currentAnswer + '</h3>');



            }

    },
    guessResult: function() {

    






    } 

}
