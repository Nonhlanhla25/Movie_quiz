const quizData = [
    {
        question: "How many Thor movies  are released so far?",
        a: "3",
        b: "4",
        c: "2",
        correct: "b",
    },
    {
        question: "What year Matrix movies was released?",
        a: "1997",
        b: "1998",
        c: "1999",
        correct: "c",
    },
    {
        question: "What the name of Tony Stark assistance in Iron man movies?",
        a: "Pepper Hogan",
        b: "Pepper Potts",
        c: "Pepper Everhart",
        correct: "b",
    },
    {
        question: "Who play the lead actor in the first Spider-Man movie ",
        a: "Tobey Maguire",
        b: "Tom Holland",
        c: "Andrew Garfield",
        correct: "a",
    },
    {
        question: "What the female avatar that Jake Sully falls in love with?",
        a: "Tsireya",
        b: "Tuktirey",
        c: "Netiri",
        correct: "c",
    },
    {
        question: "What is Vin Diesel character name in The Fast & Furious?",
        a: "Brian O'Conner",
        b: "Dominic Toretto",
        c: "Roman Pearce",
        correct: "b",
    },
    {
        question: "What's the name of the place in avatar where human's what to take over",
        a: "Pandori",
        b: "Pandore",
        c: "Pandora",
        correct: "c",
    },
    {
        question: "What is the material of Blank Panther's suit made of?",
        a: "Vibranium",
        b: "Adamantium",
        c: "Aluminum",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <a href= "index.html"><button>HOME</button></a>
           `
       }
    }
})
