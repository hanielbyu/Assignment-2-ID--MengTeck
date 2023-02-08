const start_btn = document.querySelector(".start button");
const info_box = document.querySelector(".ibox");
const exit_btn = info_box.querySelector(".button_rule .quit");
const continue_btn = info_box.querySelector(".button_rule .restart");
const quiz_box = document.querySelector(".qbox");
const option_list = document.querySelector(".optionli");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .timeli");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);
}


let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 10;
let widthValue = 0;
let userScore = 0;


const next_btn =  quiz_box.querySelector(".next_button");
const result_box = document.querySelector(".rbox");
const restart_quiz = result_box.querySelector(".rebtn .restart")
const quit_quiz = result_box.querySelector(".rebtn .quit")

// restart_quiz.onclick = ()=>{
//     quiz_box.classList.add("activeQuiz");
//     result_box.classList.remove("activeResult");
//     let que_count = 0;
//     let que_numb = 1;
//     let timeValue = 10;
//     let widthValue = 0;
//     let userScore = 0;
//     showQuestions(que_count);
//     queCounter(que_numb)
//     clearInterval(counter);
//     startTimer(timeValue);
//     clearInterval(counterLine);
//     startTimerLine(widthValue);
//     next_btn.style.display = "none";  
// }

quit_quiz.onclick = ()=>{
    // window.location.href("browse.html");
}

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb)
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
    }else{
        console.log("Questions.completed");
        showResultBox();
    }
}

function showQuestions(index){
    const que_text = document.querySelector(".qtext");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '<span>';
    let option_tag = '<div class = "option">'+ questions[index].options[0] + '<span></span></div>'
                    + '<div class = "option">'+ questions[index].options[1] + '<span></span></div>'
                    + '<div class = "option">'+ questions[index].options[2] + '<span></span></div>'
                    + '<div class = "option">'+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickicon = '<div class="opt_icon tick"><i class="fas fa-check"></i></div>';
let crossicon = '<div class="opt_icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct")
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickicon);
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossicon);

            for (let i = 0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                }
            }
    }

    for(let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}



function showResultBox(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score");
    let scoreTag = '<span>You scored <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;

}





function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZ = timeCount.textContent;
            timeCount.textContent = "0" + addZ;
        }
        if(time < 0 ){
            clearInterval(counter)
            timeCount.textContent = "00"

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                }
            }
            for(let i = 0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 20);
    function timer(){
        time += 1;
        timeLine.style.width = time +"px";     
        if(time > 549 ){
            clearInterval(counterLine);
        }
    }
}




function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".totalqn");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}
