const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let year;

mySubmit.onclick = function(){
    year = myText.value;
    year = Number(year);
    if (year >= 2010)
        resultElement.textContent = `You are a part of Generation Alpha`;
    else if (year <= 2009 && year >= 1997)
        resultElement.textContent = `You are a part of Generation Z.`;
    else if (year <= 1996 && year >= 1981)
        resultElement.textContent = `You are a Millennial`;
    else if (year <= 1980 && year >= 1965)
        resultElement.textContent = `You are a part of Generation X.`;
    else if (year <= 1964 && year >= 1946)
        resultElement.textContent = `You are a part of the Baby Boomer Generation.`;
    else if (year <= 1945 && year >= 1928)
        resultElement.textContent = `You are a part of the Silent Generation.`;
    else if(year <=1927 && year >= 1901)
        resultElement.textContent = `You are a part of the Greatest Generation.`;
    else if (year < 1900 )
        resultElement.textContent = `Whoa, you're old!`;
    else{
        resultElement.textContent = `Invalid Input.`;
    }
}