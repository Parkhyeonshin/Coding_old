const headerMenu = document.querySelector(".header_nav");


const quizInfo = [
    {   
        answerType : "웹디자인기능사 2013년 02회",
        answerNum: "1",
        answerAsk: "굿 디자인(good design)을 위한 디자인의 조건에 포함되지 않는 것은?",
        answerChoice: {
            1: "합목적성",
            2: "독창성",
            3: "심미성",
            4: "모방성",
        },
        answerResult: "4",
        answerEx : "디자인의 조건은 합목적성, 경제성, 심미성, 독창성, 질서성이 있습니다."
    },
    {   
        answerType : "웹디자인기능사 2013년 02회",
        answerNum: "2",
        answerAsk: "다음이 설명하는 것은? - 주어진 길이를 가장 이상적으로 나누는 비를 말하며 근사값이 약 1.619인 무리수",
        answerChoice: {
            1: "비례",
            2: "황금비율",
            3: "삼각분할",
            4: "프로포션",
        },
        answerResult: "2",
        answerEx : "황금비율(길이를 둘로 나누었을때 같은 비율)"
    },
];

let count = 0;

const quizWrap = document.querySelector(".quiz__wrap");

const updateQuiz = () => { 
    const exam = [];

    quizInfo.forEach((question, number)=>{
        exam.push(`
        
        `);
    });
    exam.push(`
        <div class="quiz__confirm">
            <button class="check">정답 확인하기</button>
            <div class="ex"></div>
        </div>
    `)
    quizWrap.innerHTML = exam.join('');             //쉼표제거
}
updateQuiz();