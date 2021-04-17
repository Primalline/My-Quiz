class Question{
    constructor(){
        this.title = createElement('h1');
        this.input1 = createInput("Enter your name here");
        this.input2 = createInput("Your Answer");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
    }

    display(){
        this.title.html("My Quiz");
        this.title.position(150, 0);

        this.question.html("Question - What does BODMAS stand for? ");
        this.question.position(150, 80);
        this.option1.html("i. Bracket Order Division Multiplication Addition Subtraction");
        this.option1.position(150, 100);
        this.option2.html("ii. Base Object Data Median Abacus Scale");
        this.option2.position(150, 120);

        this.input1.position(150, 210);
        this.input2.position(150, 240);
        this.button.position(150, 270);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount +=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}