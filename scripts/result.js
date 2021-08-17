const restartButton = document.querySelector(".js-restart"),
    resultImg = document.querySelector(".js-resultImg"),
    resultTitle = document.querySelector(".js-resultTitle"),
    resultExplain = document.querySelector(".js-resultExplain"),
    bestMatchImg = document.querySelector(".js-bestMatchImg"),
    worstMatchImg = document.querySelector(".js-worstMatchImg");


const title_LIST = {
    "INTJ" : "조직의 우두머리",
    "ESTJ" : "조직의 2인자",
    "INFJ" : "조직의 후계자",
    "ISFJ" : "조직의 서포터",
    "ISTJ" : "조직의 감시자",
    "ISFP" : "조직의 이중스파이",
    "INFP" : "조직의 중재자",
    "ENFJ" : "조직의 통솔자",
    "ISTP" : "조직의 정보수집가",
    "INTP" : "조직의 설계자",
    "ENTJ" : "조직의 야망가",
    "ENFP" : "조직의 반항아",
    "ENTP" : "조직의 언변가",
    "ESTP" : "조직의 행동대장",
    "ESFP" : "조직의 분위기메이커",
    "ESFJ" : "조직의 대모"
};
const expain_LIST = [
    "조직의 우두머리이자 느와르 영화의 주인공인 당신은 회전력 빠른 두뇌와 철저한 계획으로 자신의 조직을 최고로 끌어올립니다. 사실 느와르 영화는 이 사람들을 위해 만들어졌다고 해도 과언이 아닐 정도로 당신은 느와르 영화 주인공에 잘 어울립니다. 감정에 잘 휘둘리지 않고 자신의 속마음을 남에게 잘 이야기 하지 않습니다. 때문에 당신의 조직원들은 당신을 두려워하기도 합니다만, 사실 당신에게 감성적인 면도 있다는 것은 눈치채지 못하지요. 무언가를 해결해야 할 때면 다른 사람에게 조언을 구하기 보단 혼자서 해결책을 찾아내곤합니다. 이런 당신을 알고 있는 사람들이라면 당신에 대해 이렇게 말하죠. \"그를 함부로 건드려선 안돼.\"",
    "계산적이고 합리적인 당신의 조직의 2인자, 보스의 오른팔입니다. 무언가를 감정적으로 판단하기 보다는 객관적으로 상황을 바라봅니다. 교묘하게 남을 조작하는 능력이 뛰어나기 때문에 다른 조직과 마찰이 일어나더라도 능력껏 상황을 타개합니다. 계획에 차질이 생기는 것을 매우 싫어합니다. 마치 항해사처럼 조직을 자신이 생각하는 목표를 향해 몰고갑니다. 때론 보스의 결정이 탐탁지 않을 때도 있지만, 굳이 반기를 들지는 않습니다. 그렇지만 당신은 언제든 그를 자리에서 몰아내고 자신이 1인자가 될 가능성을 염두에 두고있습니다. 그만큼 당신에게는 리더의 자질이 있으며, 모두가 당신의 능력을 인정하고 당신 또한 그 사실을 인지하고 있습니다. 이런 당신을 알고 있는 사람들은 이렇게 말합니다. \"그가 등을 돌리면, 조직은 난파된 배처럼 수면 아래로 가라앉게 되겠지.\"",
    "보스가 죽자, 가장 먼저 거론된 것은 당신이었습니다. 사실 보스가 죽기 오래 전부터 당신에게는 이 조직의 후계자가 될 자질이 충분히 있었습니다. 겉으로는 유해보이고 한없이 착해보이지만 알고보면 모두가 놀랄만큼 유능하고 영악한 속내를 지니고 있습니다. 그렇기 때문에 당신의 이런 이면을 알지 못하는 사람들이 절대 선을 넘게 두지는 않습니다. 눈치가 빠르고 주위에 쉽게 적응합니다. 당신은 다정한 보스입니다만, 마음의 문을 쉽게 열지 않기 때문에 자신의 속내를 털어놓을 진정한 내 사람이 없는 고독한 보스이기도 합니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"하룻강아지인 줄 알았는데, 알고보니 범이었단 사실을 그 누가 알았겠어.\"",
    "당신은 조직의 든든한 수호천사, 조직의 서포터입니다. 뛰어난 공감능력을 지닌 당신에게 조직원들은 알게 모르게 정신적으로 많이 의지합니다. 주로 밖을 돌아다니는 행동대장들과는 달리 당신은 주로 건물 내에서 회계를 담당하거나 다친 조직원들을 치료해주곤 합니다. 당신의 책임감과 헌신은 겉으로 보기엔 티가 나지 않지만 실제로는 조직에 큰 힘이 됩니다. 조직 내에서 의견이 갈리는 경우에는 다수의 의견에 따르는 경향이 있습니다만, 그것이 꼭 옳아서라기 보다는 다른 사람 앞에서 자신의 주장을 쉽게 펴지 못하는 성격 탓입니다. 하지만 그렇다고 해서 줏대가 없는 것은 아닙니다. 오히려 당신은 완고한 편에 속합니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그는 이쪽 세계에 있을 사람이 전혀 아닌데, 이상하게도 본인은 그걸 즐기는 듯 보인단 말이지.\"",
    "조직의 회계 담당자인 당신은 철저한 논리주의자이자 조직의 감시자입니다. 계획이 흐트러지는 것을 매우 싫어하는 당신은 혹여 원칙을 따르지 않는 조직원이 있는지 철저히 감시하는 역할을 수행합니다. 자신의 속내를 털어놓는 것은 물론 타인에게 일말의 관심을 주는 것조차 않습니다. 때문에 종종 다른 조직원들과 갈등을 빚기도 합니다만, 모두가 당신의 능력을 무시하지 못한다는 것을 알기에 한 발 물러서곤 합니다. 조직을 위해 일을 하기는 하나 헌신은 하지 않는 당신을 보며 믿음직 하지 않다고 여길 수도 있지만, 그 생각을 비웃기라도 하듯 당신은 조직을 배신하는 행동은 일절 하지 않습니다. 은근한 충신이라는 수식어가 어울려 보입니다. 당신을 알고 있는 사람들은 이렇게 말합니다. \"남 일에 관심이 많아질 수록 생각도 많아지는 법. 미련 없는 삶을 산다는 것은 큰 행운이야.\"",
    "당신은 사실 경찰에 의해 파견된 스파이였습니다만, 어느샌가 이곳의 진짜 조직원이 되어있었습니다. 현재는 조직의 이중 스파이로서 활동 중이었지요. 당신의 속내는 알아차리기 힘든 수수께끼이지만, 진심으로 다가오는 당신의 모습에 조직원들도 차츰 마음의 문을 열기 시작합니다. 평소에는 조용한 성격이지만 친한 사람들과 있을 때면 활발해지는 당신을 보고 많은 사람들은 미소를 짓습니다. 또한 당신이 자주 하곤 하는 칭찬들은 어느새 조직의 정신적인 지주가 되었습니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그는 알다가도 모르겠단 말이지. 여전히 내게도 난제로 남아있어.\"",
    "어떠한 갈등에 있어서 싸움보다는 조화를 이루고자 하는 당신은 조직의 중재자입니다. 이는 조직 내에서뿐만 아니라 조직간의 다툼이 벌어졌을 때도 마찬가지지요. 상황을 극단적으로 몰고가려는 의견이 우세하더라도 자신의 주장을 쉬이 굽히지 않습니다. 호불호가 확실하고 내면에는 정의를 추구하는 성향이 있기 때문입니다. 때론 지나치게 이상적인 의견을 제시할 때도 있지만, 조직원들의 반감을 사지는 않습니다. 겉으로는 나약하고 보호받아야 할 존재로 보여도 사실은 누구보다 강한 존재임을 차차 증명해 나갑니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그는 마치 어린아이 같아. 하지만 어린아이의 순수함은 그 누구도 이길 수 없다는 사실을 알아야 해.\"",
    "열정으로 가득한 당신은 조직의 통솔자입니다. 조직의 모든 사람과 가깝게 지내고자 노력합니다. 당신의 노력이 무색하지 않게, 많은 조직원들이 실제로 당신으로부터 많은 영감과 용기를 얻어갑니다. 눈치가 빠르고 상대방을 기분 좋게 하는 능력을 타고났기 때문에 조직 내에서 일어난 갈등 대부분이 당신의 손에서 와해되기도 합니다. 또한 사기가 꺾인 모두에게 동기를 부여해 조직을 위기에서 구해내는 구원자이기도 합니다. 보스가 당신을 신뢰한다는 사실을 알았을 때 당신은 뛸듯이 기뻤습니다. 당신이 이 모든 일을 행하는 이유는 거기에 있기 때문이죠. 이런 당신을 알고 있는 사람들은 이렇게 말합니다. \"그가 없었더라면 진작에 무너졌을 테지. 그는 영원히 쓰러지지 않는 기둥이나 다름없어.\"",
    "조직의 정보수집가",
    "조직의 모든 시스템은 조직의 설계자인 당신의 손에서 탄생했습니다. 당신의 효율적인 계획과 당신이 가진 창의력은 조직이 도시의 지배자가 되는 데 큰 기여를 합니다. 다만 가장 어려운 것은 당신의 참여를 이끌어내는 것이겠지만요. 당신의 유능함을 진작부터 알아본 보스가 당신을 조직원으로 만들기까지 매우 오랜 기간 공을 들였다는 이야기도 있을 정도입니다. 만사가 귀찮으며 정해진 규율과 법칙을 싫어하기 때문입니다. 이러한 성격으로 인해 때로는 조직원들과 불화가 생기기도 합니다만, 당신은 다른 사람과의 관계에 대해서는 별로 개의치 않아 보입니다. 혼자 있기를 좋아하며, 자신만의 세계를 만들어나가는 것을 중요시 여깁니다. 지나친 몽상 안에서 위대한 발견을 이루는 사람입니다. 이러한 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그의 부지런한 버전이 있었다면 그는 이미 보스가 되고도 남았을걸.\"",
    "조직을 최고로 이끌어내고자 하는 당신. 조직의 야망가이자 조직의 중추신경입니다. 당신은 조직이 단지 골목대장 놀이를 하는 것에 만족하길 원치 않습니다. 당신의 야망은 조직이 도시의 지배자를 넘어서, 정치/경제/사회 전반을 장악할 힘을 갖는 것에 있습니다. 당신은 이 원대한 목표에 부합하지 않는 사람은 필요하지 않다고 말합니다. 설령 그것이 보스일지라도요. 꼭 그가 반역을 꿈꿔서라기 보단, 단지 조직이 성장하는 데 방해가 되는 잡초는 제거해야 하는 게 맞다고 생각하기 때문입니다. 그만큼 당신은 타고난 사업가이자 리더입니다. 당신의 체계적인 아이디어와 실행 능력은 누구도 대체할 수 없습니다. 문제가 발생하면 발벗고 나서 부딛히며, 새로운 사업에 도전하기를 두려워하지 않습니다. 이러한 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다 \"그가 손 댄 모든 것들은 열정으로 불타오르지. 하지만 그 뒤엔 항상 재가 남기 마련.\"",
    "ENFP조직의 반항아 : 모두가(심지어 INTJ도) 좋아함. 진지하게 일하면 잘 하는데 절대 진지해지지 않음. 사고쳐서 잘림. 하지만 모두가 그리워함",
    "ENTP 조직의 언변가 : 재미로 일을 방해함. 하지만 순도 백프로의 카리스마와 가끔씩 보여주는 쓸모있는 아이디어가 그를 잘리지 않게 만들어주고 잇따",
    "ESTP조직의 행동대장: 하루종일 지각하고 술마셔서 해고됨. 너무 등신짓 많이함",
    "ESFP조직의 분위기메이커: 낙하산으로 들어옴. 엉덩이 붙여서 계획",
    "설명16"
];

//INTP랑 ISTP 그림 변경해야함

const match_LIST = [
    {best : "ENFP", worst : "ESFJ"},
    {best : "ISFP", worst : "INFP"},
    {best : "ENTP", worst : "ISFP"},
    {best : "ESTP", worst : "ENFP"},
    {best : "ESFP", worst : "ENFJ"},
    {best : "ESTJ", worst : "INFJ"},
    {best : "ENTJ", worst : "ESTJ"},
    {best : "INTP", worst : "ISTJ"},
    {best : "ESFJ", worst : "ESTP"},
    {best : "ENFJ", worst : "ENTJ"},
    {best : "INFP", worst : "INTP"},
    {best : "INTJ", worst : "ISFJ"},
    {best : "INFJ", worst : "ESFP"},
    {best : "ISFJ", worst : "ISTP"},
    {best : "ISTJ", worst : "ENTP"},
    {best : "ISTP", worst : "INTJ"}
];

const USER_MBTI = "currentMBTI";

function handleRestart(){
    const link = '/questions.html';
    location.href = link;
}

function worstMatchGreeting(idx){
    worstMatchImg.src = "/images/" +  match_LIST[idx].worst + ".png";
}

function bestMatchGreeting(idx){
    bestMatchImg.src = "/images/" +  match_LIST[idx].best + ".png";
}

function resultGreeting(){
    let index = 0;
    const userMBTI = localStorage.getItem(USER_MBTI);

    resultImg.src = "/images/" + userMBTI +".png";
    for (var mbti in title_LIST){
        if(mbti == userMBTI){
            resultTitle.innerText = title_LIST[mbti];
            resultExplain.innerText = expain_LIST[index];

            bestMatchGreeting(index);
            worstMatchGreeting(index);

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