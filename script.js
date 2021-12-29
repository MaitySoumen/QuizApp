const quizData = [
    {
        question: "What is not the use of “this” keyword in Java ?",
        a: "Referring to the instance variable when a local variable has the same name",
        b: "Passing itself to the method of the same class",
        c: "Passing itself to another method",
        d: "Calling another constructor in constructor chaining",
        correct: "b"
    },
    {
        question: "Which of the following package is used for text formatting in Java programming language?",
        a: "java.io",
        b: "java.awt.text",
        c: "java.awt",
        d: "java.text",
        correct: "d"
    },
    {
        question: "Which exception is thrown when java is out of memory?",
        a: "MemoryError",
        b: "OutOfMemoryError",
        c: "MemoryOutOfBoundsException",
        d: "MemoryFullException",
        correct: "b"
    },
    {
        question: "Number of primitive data types in Java are?",
        a:"6",
        b:"7",
        c:"8",
        d:"9",
        correct:"c"
    },
    {
        question: "An abstract class in Java can be created using the keyword______",
        a: "final",
        b: "interface",
        c: "abstract",
        d: "static",
        correct:"c"
    },
    {
        question: "Which of the following option leads to the portability and security of Java?",
        a:"Dynamic binding between objects",
        b:"The applet makes the Java code secure and portable",
        c:"Use of exception handling",
        d:"Bytecode is executed by JVM",
        correct:"d"
    },
    {
        question:"When an array is passed to a method, what does the method receive?",
        a:"The reference of the array",
        b:"Length of the array",
        c:"Copy of the array",
        d:"Copy of the first element",
        correct:"a"

    },
    {
        question:"Which of the following are correct advantage of java?",
        a:"Java is Simple",
        b:" Java is Secure",
        c:"Java is Portable",
        d:"All of the above",
        correct:"d"
    },
    {
        question:"Which of these method waits for the thread to treminate?",
        a:"sleep()",
        b:"isAlive()",
        c:"join()",
        d:"stop()",
        correct:"c"
    },
    {
        question:"How many threads can be executed at a time?",
        a:"Only one thread",
        b:"Multiple threads",
        c:"Only main (main() method) thread",
        d:"Two threads",
        correct:"b"
    }
];


const answerEls = document.querySelectorAll('.answer');
const quizScore = document.getElementById('quiz');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();     
    
    

    const currentQuizData = quizData[currentQuestionIndex];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    
    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}
 
submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if(answer){
    if(answer == quizData[currentQuestionIndex].correct){
        score++;
    }
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length){
        loadQuiz();
    }else{
        
        quizScore.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} Question</h2>
        <button onclick="location.reload()">Try again </button>`
    }
}
/*else{
    document.getElementById("demo").innerHTML = "Please Select an Answer";
}*/

});


