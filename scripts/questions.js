const question = document.querySelector(".js-question"),
    choice1 = document.querySelector(".js-choice1"),
    choice2 = document.querySelector(".js-choice2");

const question_LIST = [
    "내가 실제로 갱스터, 마피아가 된다면",
    "다른 조직과의 구역 싸움이 벌어졌을 때 나는",
    "수상하지만 솔깃한 제의가 나에게 들어온다면",
    "새로운 사업을 추진할 기회를 맞딱뜨렸을 때 나는",
    "스파이인 것이 들통난 부하가 자신의 조직을 배신하고 내 사람이 되겠다고 한다",
    "야심차게 준비했던 사업이 결국 실패로 돌아갔을 때 나는",
    "사랑하는 연인이 다른 조직에서 쏜 총에 맞아 나 대신 목숨을 잃는다면" ,
    "힘든 하루를 보내고 난 후 마시는 위스키 한 모금" 
],
choice1_LIST = [
    "직접 나서서 모든 일을 해결하는 마피아 조직의 두목",
    "다친 조직원은 얼마나 되는지 알아본다 = F",
    "문제가 생기면 그때가서 생각하자. 곧바로 제의를 받아들인다 = P",
    "리스크를 감수해야 하더라도 새로운 사업을 시도해본다 = N",
    "한 번 조직을 배신한 자는 또다시 배신하게 되는 법. 절대 받아주지 않는다 = J",
    "비록 실패했지만 좋은 교훈을 얻었으니 괜찮다 = F",
    "당장 복수하러 쳐들어 간다 = N",
    "부드럽고 스모키한 향을 가진 스카치 위스키 = T"
],
choice2_LIST = [
    "명석한 두뇌로 해결책을 제시하는 든든한 조력자",
    "싸움이 왜 일어났는지 사건의 전후관계부터 파악한다 = T",
    "무슨 속셈이 있진 않은지 철저하게 조사한 뒤 결정한다 = J",
    "했다가 실패하면 어떡해? 기존에 추진하던 사업에 열중한다 = S",
    "받아들이고 이중 스파이로 이용한다 = P",
    "애초에 시작하지 말걸 후회한다= T",
    "슬픔에 빠져 아무것도 하지 않는다 = S",
    "무겁고 깊은 맛이 나는 위스키의 원조 아이리시 위스키 = F"
];

const userChoice = [];
let i = 0;
let IorE, NorS, ForT, PorJ;

function resultLoader(){
    const resultArr = [IorE, NorS, ForT, PorJ];
    const resultStr = resultArr.join('');
    console.log(resultStr);

    const link = '/result.html';
    location.href = link;
}

//확률로 추정해야 함
function resultJudgement(){
    for(i = 0; question_LIST[i]; i++){
        switch (i){
            case 0:
                if(userChoice[i] == 1) IorE = "E";
                else IorE = "I";
                break;
            case 3: case 4: case 7:
                if(userChoice[i] == 1) NorS = "N";
                else NorS = "S";
                break;
            case 1: case 6:
                if(userChoice[i] == 1) ForT = "F";
                else ForT = "T";
                break;
            case 2: case 5:
                if(userChoice[i] == 1) PorJ = "P";
                else PorJ = "J";
                break;
            default:
                break;
        }
    }
    resultLoader();
}

function handleChoice1(){
    userChoice[i++] = 1;
    
    if(question_LIST[i]){
        question.innerText = question_LIST[i];
        choice1.innerText = choice1_LIST[i];
        choice2.innerText = choice2_LIST[i];
    }
    else resultJudgement();
}

function handleChoice2(){
    userChoice[i++] = 2;

    if(question_LIST[i]){
        question.innerText = question_LIST[i];
        choice1.innerText = choice1_LIST[i];
        choice2.innerText = choice2_LIST[i];
    }
    else resultJudgement();
}

function init(){
    question.innerText = question_LIST[0];
    choice1.innerText = choice1_LIST[0];
    choice2.innerText = choice2_LIST[0];
    choice1.addEventListener("click", handleChoice1);
    choice2.addEventListener("click", handleChoice2);
}

init();