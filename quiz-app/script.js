const quizRecord = [
    {
        question: "Who is the presidant of India?",
        a: "Dropadi Murmu",
        b: "A.P.J Abdul Kalam",
        c: "Narendra Modi",
        d: "Nitish Kumar",
        correctAnswer: 'a'
    },
    {
        question: "Who is the PM of India?",
        a: "Rahul Gandhi",
        b: "A.P.J Abdul Kalam",
        c: "Narendra Modi",
        d: "Nitish Kumar",
        correctAnswer: 'c'
    },
    {
        question: "Who is the Chief Minister of Jharkhand?",
        a: "Shibu Soren",
        b: "Hemant Soren",
        c: "Kalpana Soren",
        d: "Raghuwar Das",
        correctAnswer: 'b'
    },{
        question: "Who is current captain of cricket team India?",
        a: "Rohit Sharma",
        b: "Virat Kohli",
        c: "M.S. Dhoni",
        d: "Dinesh Kartik",
        correctAnswer: 'a'
    },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerA = document.getElementById('text_a');
const answerB = document.getElementById('text_b');
const answerC = document.getElementById('text_c');
const answerD = document.getElementById('text_d');
const submitBtn = document.getElementById("btn_submit");

let currentQuiz = 0;
let score = 0;
function loadQuiz(){
    deselectAnswers();
    const currentQuizRecord = quizRecord[currentQuiz];

    questionEl.innerText = currentQuizRecord.question;
    answerA.innerText = currentQuizRecord.a;
    answerB.innerText = currentQuizRecord.b;
    answerC.innerText = currentQuizRecord.c;
    answerD.innerText = currentQuizRecord.d;
    
}
//initial call
loadQuiz();

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    console.log("HII");
    answerEls.forEach((answerEl)=>{
        console.log(answerEl.checked);
        if(answerEl.checked){
            console.log(answerEl.checked);
            answerEl.checked = false;
            console.log(answerEl.checked);
        }
    });
    console.log(answerEls);
}

submitBtn.addEventListener("click", () =>{
    
    // check to see the answer
    const answer = getSelected();
    if(answer){
        if(answer === quizRecord[currentQuiz].correctAnswer){
            score++;
        }
    }
    currentQuiz++;
    if(currentQuiz<quizRecord.length){
        loadQuiz();
    }else{
        // TODO: Show results]
        quiz.innerHTML = "<h2>You Answered Correctly at "+score+"/"+quizRecord.length+" questions.</h2>"+
        "<button onclick='location.reload()'>RELOAD</button>";
    }
});  

// disabling inspect
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});