let answer = document.getElementById("result");
let  problem=document.getElementById("problem");
let btn1 = document.getElementById("btn1");
function button1(){
    problem.textContent+="1";
}
btn1.addEventListener("click", button1);
let btn2 =document.getElementById("btn2");
function button2(){
    problem.textContent +="2";
}
btn2.addEventListener("click", button2);

let btn3=document.getElementById("btn3");
function button3 (){
    problem.textContent+="3";
}
btn3.addEventListener("click", button3);


let btn4=document.getElementById("btn4");
function button4(){
    problem.textContent+="4";
}
btn4.addEventListener("click", button4);


let btn5=document.getElementById("btn5");
function button5(){
    problem.textContent+="5";
}
btn5.addEventListener("click", button5);

let btn6 = document.getElementById("btn6");
function button6(){
    problem.textContent+="6";
}
btn6.addEventListener("click", button6);

let btn7 = document.getElementById("btn7");
function button7(){
    problem.textContent+="7";
}
btn7.addEventListener("click", button7);

let btn8 = document.getElementById("btn8");
function button8(){
    problem.textContent+="8";
}
btn8.addEventListener("click", button8);

let btn9= document.getElementById("btn9");
function button9(){
    problem.textContent+="9"
}
btn9.addEventListener("click", button9);

let btn0 = document.getElementById("btn0");
function zero(){
    problem.textContent+="0";
}
btn0.addEventListener("click", zero);


//Operators section:__________
let Ac = document.getElementById("btnAc");
function Clear (){
    problem.textContent="";
}
Ac.addEventListener("click", Clear);


let del = document.getElementById("btnDel");
function Delete (){
    problem.textContent= problem.textContent.slice(0, -1);
}
del.addEventListener("click", Delete);

// last section_________ I hope:___________________
