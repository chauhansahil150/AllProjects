// ceil for round off number 
// random to pick random number
const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`; // use backquotes

const correctAns = num1 * num2;

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");


// JSON.parse to convert into integer
let score = JSON.parse(localStorage.getItem("score"));

if (!score)
    score = 0;

const scoreEl = document.getElementById("score");

scoreEl.innerText = `score : ${score}`;

formEl.addEventListener("submit", () =>
{
    const userAns = +inputEl.value;  // value is in string without +

    if (userAns === correctAns) {
        score++;
        updateLacalStorage();
    }
    else {
        score--;
        updateLacalStorage();
    }
    
})
// for storing score value in local storage sititem
function updateLacalStorage()
{
    // can't store number(not supported => security) have to store string
    localStorage.setItem("score", JSON.stringify(score));
   
}


