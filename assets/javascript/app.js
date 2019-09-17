$(document).ready(function(){

    
    
    $("time-remaining").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);

})

var trivia = {
 
    correct: 0,
    incorrect: 0,
    notAnswered: 0,
    currentSet: 0,
    timer: 15,
    timerOn: false,
    timerId: '',

    questions: {
        q1: 'Giannis Antetokounmpo is the MVP of 2019 NBA Season?',
        q2: 'Golden State Warriors are the 2019 NBA Champions?',
        q3: 'Kawhi Leonard was Finals MVP?',
        q4: 'David Stern is the current 2019 commissioner of the NBA',
        q5: 'Lebron James has never missed the playoffs'
       
    },

    options: {
        q1: ['True', 'False'],
        q2: ['True', 'False'],
        q3: ['True', 'False'],
        q4: ['True', 'False'],
        q5: ['True', 'False'],

    },

    answers: {
        q1: 'True',
        q2: 'False',
        q3: 'True',
        q4: 'False',
        q5: 'False',
    
    
    },
    

    startGame: function() {
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.notAnswered = 0;
        clearInterval(trivia.timerId);

       
    $('#game')
    .show();

    $('#results')
    .html('');

    $('#timer')
    .text(trivia.timer);
   
    $('#start')
    .hide();
   
    $('#time-remaining')
    .show();


   trivia.nextQuestion();

},


nextQuestion: function() {
trivia.timer = 15;
    $('#timer')
        .removeClass('last-seconds');
    $('#timer')
        .text(trivia.timer);

        if (trivia.timerOn) {
            trivia.timerId = setInterval(trivia.timerRunning, 1000);
        }



    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
   
   
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
    if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
            $('#timer').text(trivia.timer);
            trivia.timer--;
            if (trivia.timer === 4 ) {
                $('#timer').addClass('last-seconds');
            }
        } else if (trivia.timer === -1) {
            trivia.notAnswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $('#results').html('<h3>Timeout! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
        } else if (trivia.currentSet === Object.keys(trivia.questions).length) {
            $('#results')
                .html('<h3>Your an NBA All-Star!</h3>' +
                    '<p>Correct: ' + trivia.correct + '</p>' +
                    '<p>Incorrect: ' + trivia.incorrect + '</p>' +
                    '<p>unanswered: ' + trivia.notAnswered + '</p>' +
                    '<p>Get some more practice and try again!</p>');
            
            $('#game').hide();

            $('#start').show();

    }
},

    guessChecker: function() {
        var resultId;
        var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

        if ($(this).text() === currentAnswer){
        $(this).addClass('btn-success').removeClass('btn-info');
        trivia.correct++;
        
        clearInterval(trivia.timerId);
       
        resultId = setTimeout(trivia.guessResult, 1000);
       
        $('#results').html('<h3>Gotem Coach</h3>');
    }

            else {
                $(this).addClass('btn-danger').removeClass('btn-info');

                trivia.incorrect++;
            
                clearInterval(trivia.timerId);
            
                resultId = setTimeout(trivia.guessResult, 1000);
            
                $('#results').html('<h3>Get some more practice! ' + currentAnswer + '</h3>');



            }

    },
    guessResult: function() {

        trivia.currentSet++;
        $('.option').remove();
        $('#results h3').remove();

        

        trivia.nextQuestion();
        } 

}
