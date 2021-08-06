const question = document.querySelector(".js-question"),
    choice1 = document.querySelector(".js-choice1"),
    choice2 = document.querySelector(".js-choice2");

const question_LIST = [
    "내가 실제로 갱스터가 된다면",
    "다른 조직과의 구역 다툼이 벌어졌을 때 나는",
    "수상하지만 솔깃한 제의가 나에게 들어온다면",
    "새로운 사업을 추진할 기회를 맞닥뜨렸을 때 나는",
    "스파이인 것이 들통난 부하가 내 사람이 되겠다고 한다",
    "야심차게 준비했던 사업이 결국 실패로 돌아갔을 때 나는",
    "사랑하는 연인이 누군가의 총에 맞아 나 대신 목숨을 잃는다면" ,
    "힘든 하루를 보내고 난 후 마시는 위스키 한 모금",
    "나의 보스가 터무니 없는 작전을 지시한다면",
    "나는 평소에 마피아가 되어 싸우는 상상을" 
],

//ENFP
choice1_LIST = [
    "직접 나서서 모든 일을 해결하는\n조직의 두목",
    "다친 조직원은 얼마나 되는지 알아본다",
    "문제가 생기면 그때가서 생각하자.\n곧바로 제의를 받아들인다",
    "리스크를 감수해야 하더라도 새로운\n사업을 시도해본다",
    "이중스파이로 이용할 수 있으니\n받아들인다",
    "비록 실패했지만 좋은 교훈을 얻었으니\n괜찮다",
    "당장 복수하러 쳐들어 간다",
    "무겁고 깊은 맛이 나는 위스키의 원조\n아이리시 위스키",
    "위험하지만 보스의 명령이므로\n지시를 따른다",
    "자주한다"
],

//ISTJ
choice2_LIST = [
    "명석한 두뇌로 해결책을 제시하는\n든든한 조력자",
    "싸움이 왜 일어났는지 일의 전후관계부터 파악한다",
    "무슨 속셈이 있진 않은지 철저하게\n조사한 뒤 결정한다",
    "했다가 실패하면 어떡해? 기존에 추진하던 사업에 열중한다",
    "한 번 조직을 배신한 자는 또다시 배신하게 되는 법. 절대 받아주지 않는다",
    "애초에 시작하지 말걸 후회한다",
    "슬픔에 빠져 아무것도 하지 않는다",
    "부드럽고 스모키한 향을 가진\n스카치 위스키",
    "실패할 게 뻔하므로 반대 의사를\n내비친다",
    "자주 하지는 않는다"
];

const USER_MBTI = "currentMBTI";
const userChoice = [];
let i = 0;
let N = 0, S = 0, F = 0, T = 0, P = 0, J = 0;
let IorE, NorS, ForT, PorJ;

function resultLoader(){
    NorS = (N > S)? "N" : "S";
    ForT = (F > T)? "F" : "T";
    PorJ = (P > J)? "P" : "J";

    const resultArr = [IorE, NorS, ForT, PorJ];
    const resultStr = resultArr.join('');
    console.log(resultStr);
    localStorage.setItem(USER_MBTI, resultStr);

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
            case 3: case 6: case 9:
                if(userChoice[i] == 1) N += 30;
                else S += 30;
                break;
            case 1: case 5: case 7:
                if(userChoice[i] == 1) F += 30;
                else T += 30;
                break;
            case 2: case 4: case 8:
                if(userChoice[i] == 1) P += 30;
                else J += 30;
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
    
    choice1.addEventListener("click", handleChoice1);
    choice2.addEventListener("click", handleChoice2);
}

function handleChoice2(){
    userChoice[i++] = 2;

    if(question_LIST[i]){
        question.innerText = question_LIST[i];
        choice1.innerText = choice1_LIST[i];
        choice2.innerText = choice2_LIST[i];
    }
    else resultJudgement();
    
    choice1.addEventListener("click", handleChoice1);
    choice2.addEventListener("click", handleChoice2);
}

function init(){
    question.innerText = question_LIST[0];
    choice1.innerText = choice1_LIST[0];
    choice2.innerText = choice2_LIST[0];
    choice1.addEventListener("click", handleChoice1);
    choice2.addEventListener("click", handleChoice2);
}

init();