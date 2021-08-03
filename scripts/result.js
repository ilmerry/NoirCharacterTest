const restartButton = document.querySelector(".js-restart"),
    resultImg = document.querySelector(".js-resultImg"),
    resultTitle = document.querySelector(".js-resultTitle"),
    resultExplain = document.querySelector(".js-resultExplain");

const title_LIST = {
    "INTJ" : "조직의 우두머리",
    "ESTJ" : "조직의 2인자",
    "INFJ" : "조직의 후계자",
    "ISFJ" : "조직의 서포터",
    "ISTJ" : "조직의 감시자",
    "ISFP" : "조직의 이중스파이",
    "INFP" : "조직의 중재자",
    "ENFJ" : "조직의 통솔자",
    "ISTP" : "조직의 설계자",
    "INTP" : "조직의 독설가",
    "ENTJ" : "조직의 야망가",
    "ENFP" : "조직의 반항아",
    "ENTP" : "조직의 언변가",
    "ESTP" : "조직의 행동대장",
    "ESFP" : "조직의 분위기메이커",
    "ESFJ" : "조직의 대모"
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
    const link = '/questions.html';
    location.href = link;
}

function resultGreeting(){
    let index = 0;
    const userMBTI = localStorage.getItem(USER_MBTI);

    resultImg.src = "/images/" + userMBTI +".png";
    for (var mbti in title_LIST){
        if(mbti == userMBTI){
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