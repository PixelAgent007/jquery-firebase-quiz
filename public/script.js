let count = 0;

$(document).ready(function() {
    $('#question').text(questions[count]["q"]);

    $('#yes').text(questions[count]["aw1"]);
    $('#no').text(questions[count]["aw2"]);

    $('#question').show();
    $('#yes').show();
    $('#no').show();
});

function onYes () {
    if (questions[count]["correct"] !== 0) {
        $('#title').css('color', 'red');
        $('#title').text("Du hast verloren!");
        $('#question').hide();
        $('#yes').hide();
        $('#no').hide();
    } else {
        if (count + 1 === questions.length) {
            $('#title').css('color', 'green');
            $('#title').text("Du hast gewonnen!");
            $('#question').hide();
            $('#yes').hide();
            $('#no').hide();
        } else {
            count += 1;
            $('#question').text(questions[count]["q"]);

            $('#yes').text(questions[count]["aw1"]);
            $('#no').text(questions[count]["aw2"]);
        }
    }
}

function onNo() {
    if (questions[count]["correct"] !== 1) {
        $('#title').css('color', 'red');
        $('#title').text("Du hast verloren!");
        $('#question').hide();
        $('#yes').hide();
        $('#no').hide();
    } else {
        if (count + 1 === questions.length) {
            $('#title').css('color', 'green');
            $('#title').text("Du hast gewonnen!");
            $('#question').hide();
            $('#yes').hide();
            $('#no').hide();
        } else {
            count += 1;
            $('#question').text(questions[count]["q"]);

            $('#yes').text(questions[count]["aw1"]);
            $('#no').text(questions[count]["aw2"]);
        }
    }
}
