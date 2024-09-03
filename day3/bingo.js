const table = document.querySelector("#tblBingo")
const letter = document.querySelectorAll(".letters-bingo")
let randAnswer;

document.getElementById("new_round").onclick = function(){
    randAnswer = Math.floor(Math.random() * 100 + 1);
    document.getElementById("btn").innerHTML = randAnswer;
}
