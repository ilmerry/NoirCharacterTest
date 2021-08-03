const restartButton = document.querySelector(".js-restart"),
    resultImg = document.querySelector(".js-resultImg"),
    resultTitle = document.querySelector(".js-resultTitle"),
    resultExplain = document.querySelector(".js-resultExplain");

const title_LIST = {
    "INTJ" : "타이틀",
    "ESTJ" : "설명",
    "INFJ" : "설명",
    "ISFJ" : "설명",
    "ISTJ" : "설명",
    "ISFP" : "설명",
    "INFP" : "설명",
    "ENFJ" : "설명",
    "ISTP" : "설명",
    "INIP" : "설명",
    "ENTJ" : "설명",
    "ENFP" : "설명",
    "ENTP" : "설명",
    "ESTP" : "설명",
    "ESFP" : "설명",
    "ESFJ" : "설명"
};
const expain_LIST = [
    "설명1",
    "설명2",
    "설명3",
    "설명4",
    "설명5",
    "설명6",
    "설명7",
    "설명8",
    "설명9",
    "설명10",
    "설명11",
    "설명12",
    "설명13",
    "설명14",
    "설명15",
    "설명16"
];

const USER_MBTI = "currentMBTI";

function handleRestart(){
    const link = '/question.html';
    location.href = link;
}

function resultGreeting(){
    let index = 0;
    const currentMBTI = localStorage.getItem(USER_MBTI);

    resultImg.src = "/images/" + currentMBTI +".png";
    for (var mbti in title_LIST){
        if(mbti == currentMBTI){
            resultTitle.innerText = title_LIST[mbti];
            resultExplain.innerText = expain_LIST[index];
            return;
        }
        index++;
    }
}

function init(){
    resultGreeting();
    restartButton.addEventListener("click", handleRestart);
}

init();