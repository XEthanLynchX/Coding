var likes = 0; 
var likesElement = document.querySelector("#likes")

function add() {
    likes++
    likesElement.innerText = likes + " Like(s)";
}