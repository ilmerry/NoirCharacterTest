const question = document.querySelector(".js-question"),
    choice1 = document.querySelector(".js-choice1"),
    choice2 = document.querySelector(".js-choice2");

const question_LIST = [
    "1. 내가 느와르 영화에 등장한다면?",
    "2. 부하가 뛰쳐들어와 \"다른 조직하고 시비가 붙어서 일이 커졌다\"고 말할 때 나는",
    "4. 다른 조직으로부터 수상하지만 솔깃한 제의가 들어왔을 때 나는",
    "5. 새로운 사업을 추진할 기회를 맞딱뜨렸을 때 나는",
    "6. 조직의 사업을 확장하기 위해 투자자들을 유치하고자 할 때 나는",
    "7. 우리 조직에 스파이가 있다! 스파이인 것이 들통난 그는 자신의 조직을 배신할테니\n조직원으로 받아들여 달라고 애원하는데...",
    "8. 야심차게 준비했던 사업이 결국 실패로 돌아갔을 때 나는",
    "9. 사랑하는 연인이 다른 조직에서 쏜 총에 맞아 나 대신 목숨을 잃었을 때 나는"  
],
choice1_LIST = [
    "\"내가 나서서 직접 모든 일을 해결한다!\"\n마피아 조직의 두목",
    "\"우리쪽 애들은? 크게 다친 애들 없어?\"\n부하들 걱정부터 한다 = F",
    "문제가 생기면 그때가서 생각하자. 곧바로 제의를 받아들인다 = P",
    "리스크를 감수해야 하더라도 새로운 사업을 시도해본다 = N",
    "\"우리 회사가 지난 해 달성한 기록들을 보면...\"\n우리 조직의 업적에 대해 수치를 들어 자세하게 설명한다 = S",
    "한 번 조직을 배신한 자는 또다시 배신하게 되는 법. 절대 받아주지 않는다 = J",
    "\"비록 실패했지만 좋은 사람들을 많이 알게됐으니 됐어.\"\n실패는 했지만 그 과정 속에서 교훈을 얻었다고 생각한다 = F",
    "복수를 다짐하며 이를 간다 = N"
],
choice2_LIST = [
    "\"나서는건 질색이야\"\n명석한 두뇌로 해결책을 제시하는 든든한 조력자",
    "\"시비가 왜 붙었는데?\"\n사건의 전후관계부터 파악한다 = T",
    "무슨 속셈이 있진 않은지 철저하게 조사한 뒤 결정한다 = J",
    "했다가 실패하면 어떡해? 기존에 추진하던 사업에 열중한다 = S",
    "\"우리 회사의 신뢰도에 대해 말하자면...\"\n비유를 사용해 투자자들을 설득한다 = N",
    "이중 스파이로서 받아들여 주지만 끝까지 의심한다. = P",
    "\"이 사업은 시작하지 말았어야 하는건데...\"\n실패했다는 사실때문에 화가 난다 = T",
    "\"복수를 한다고 연인이 돌아오는 건 아니니까\"\n슬픔에 빠져 아무것도 하지 않는다 = S"
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