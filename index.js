console.log(`hello`);
console.log("I like books");
favorite_character = "Sherlock Holmes is the best :)"
console.log(favorite_character);

window.alert("READ BOOKS");
let fave_book;

document.getElementById("_submit").onclick = function(){
    fave_book = document.getElementById("_text").value;
    //console.log(fave_book)
    document.getElementById("_p").textContent = `${fave_book} is a great choice!`

}