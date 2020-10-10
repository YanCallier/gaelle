var app = new Vue({
    el: '#app',
    data: {
        currentQuestion: 0,
        content: data[0],
        answer: null,
    },
    methods: {
        resolve: function (answer, answerName) {
            this.answer = answerName;
            this.answerTxt = answer.text;
            if (answerName === this.content.goodAnswer) {
                this.currentQuestion++;
                this.nextTxt = "SUIVANT >>";
            } else {
                this.nextTxt = "ESSAYES ENCORE >>";
            }
        },
        nextQuestion: function () {
            if (this.currentQuestion >= data.length) {
                this.currentQuestion = 0;
            }
            this.content = data[this.currentQuestion];
            this.answer = null;
        }
    },
});