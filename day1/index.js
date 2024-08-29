favorite_character = "Sherlock Holmes is the best :)"
console.log(favorite_character);
window.alert("READ MORE BOOKS");

let fave_book;
let howManyRead;
let howManyTBR;

document.getElementById("_submit").onclick = function(){
    fave_book = document.getElementById("_text").value;
    //console.log(fave_book)
    document.getElementById("_p").textContent = `${fave_book} is a great choice!`
    howManyRead = document.getElementById("_read").value;
    howManyRead = Number(howManyRead);
    howManyTBR = document.getElementById("_howMany").value;
    howManyTBR= Number(howManyTBR);
    let numberLeft = howManyTBR - howManyRead;
    //console.log(numberLeft);

    document.getElementById("_h5").textContent = `You have ${numberLeft} more books to go to reach your reading goal!`
}
