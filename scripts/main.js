const startButton = document.querySelector(".js-start"),
    shareButton = document.querySelector(".js-share");

//미완성
function handleShareClick(event){
    event.preventDefault();
    
	document.execCommand("copy");
	alert("URL이 복사되었습니다"); 
}

function handleStartClick(event){
    event.preventDefault();

    const link = '/questions.html';
    location.href = link;
}

function init(){
    startButton.addEventListener("click", handleStartClick);
    shareButton.addEventListener("click", handleShareClick);
}

init();