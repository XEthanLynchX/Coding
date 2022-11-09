var likes1 = 0; 
var likes2 = 0; 
var likes3 = 0; 

var likesElement_1 = document.querySelector("#likes_1")
var likesElement_2 = document.querySelector("#likes_2")
var likesElement_3 = document.querySelector("#likes_3")

function add1() {
    likes1++
    likesElement_1.innerText = likes1 + " Like(s)";
}

function add2() {
    likes2++
    likesElement_2.innerText = likes2 + " Like(s)";
}

function add3() {
    likes3++
    likesElement_3.innerText = likes3 + " Like(s)";
}