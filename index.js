//Requirements:
//Build it from scratch
//Generate two random passwords when the user clicks the button
//Each password should be 15 characters long


//Stretch goals
//Ability to set password lentgh
//Add "copy-on-click"
//Toggle "symbols" and "numbers" on/off
//Choose between light or dark mode, or create a switch :))

//help section url: https://projects.scrimba.com/password-generator

//dark mode source: https://lukelowrey.com/css-variable-theme-switcher/



//first i need to get a random number string
//then I can use that string to extract the symbols. 

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
let buttonEl = document.getElementById("button-el")
passwordEl1.textContent=("****************")
passwordEl2.textContent=("****************")
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword() {
    let randomPassword = []
    for (let i = 0; i < 16; i++)
    randomPassword += getRandomCharacter()
    return randomPassword
}

function generateRandomPasswords() {
    const password1 = generatePassword()
    passwordEl1.textContent=(password1)
    const password2 = generatePassword()
    passwordEl2.textContent=(password2)
    buttonEl.textContent=("Generate Again")

}

function copyText() {
    // Get the text field
    var copyText = document.getElementById("password-el1");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};