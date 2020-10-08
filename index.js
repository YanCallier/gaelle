var currentQuestion = 0;
var test = 0;

function resolve(answer) {
    app.answer = answer;
    app.answerTxt = app.content.answers[answer].text;
    if (app.content.answers[answer].id == app.content.goodAnswer) {
        currentQuestion++;
        app.nextTxt = "SUIVANT >>";
    } else {
        app.nextTxt = "ESSAYES ENCORE >>";
    }
}

function nextQuestion() {
    if (currentQuestion >= data.length) {
        currentQuestion = 0;
    }
    app.content = data[currentQuestion];
    app.answer = null;
}

var app = new Vue({
    el: '#app',
    data: {
        content: data[currentQuestion],
        answer: null,
    }
});