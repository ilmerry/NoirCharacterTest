const question = document.querySelector(".js-question"),
    choice1 = document.querySelector(".js-choice1"),
    choice2 = document.querySelector(".js-choice2");

const question_LIST = ["도서관에 간 당신", "늦은 밤 피곤해진 당신", "손님을 만난 당신"],
    choice1_LIST = ["책을 읽는다", "잠을 잔다", "차를 마신다"],
    choice2_LIST = ["수다를 떤다", "감성에 젖는다", "요거트 스무디를 마신다"];

const userChoice = [];
let i = 0;

function handleChoice1(){
    userChoice[i] = 1;
    i++;
    question.innerText = question_LIST[i];
    choice1.innerText = choice1_LIST[i];
    choice2.innerText = choice2_LIST[i];
}

function handleChoice2(){
    userChoice[i] = 2;
    i++;
    question.innerText = question_LIST[i];
    choice1.innerText = choice1_LIST[i];
    choice2.innerText = choice2_LIST[i];
}

function init(){
    question.innerText = question_LIST[0];
    choice1.innerText = choice1_LIST[0];
    choice2.innerText = choice2_LIST[0];
    choice1.addEventListener("click", handleChoice1);
    choice2.addEventListener("click", handleChoice2);
}

init();