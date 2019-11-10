//array of numbers 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//array of lowe case letters
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// array of symbols
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "+", "-", "_", "?", "/"]
//empty array
var upperCaseLettgersString = "";
upperCaseLettersString = ""
//performing a for loop on lower case letters to make empty array to have capital letters in its array
for (i = 0; i < lowerCaseLetters.length; i++) {
    upperCaseLettersString += lowerCaseLetters[i].toUpperCase() + " ";
}
// slitting the string of capital letters to an array
var upperCaseLetters = upperCaseLettersString.split(" ");

var howManyCharacters = ""
// removed an quotation mark of the final index
upperCaseLetters.pop();
// ask how many characters in the password
function getTitleQuestion() {
    var isHere = true;
    while (isHere) {
        howManyCharacters = prompt("How many characters do yo want");
        var confirmingAmount = confirm("Are you sure you want " + howManyCharacters + " characters")
        if (Number.parseInt(howManyCharacters) < 8 || Number.parseInt(howManyCharacters) > 128) {
            alert("you need to type a password between 8 and 128 characters")
            isHere = true
        } else if (confirmingAmount) {
            isHere = false
        }
    }
}
  
//created function that would give me the random characters for each array
function getRandomCharacters(characters, amount) {
    var random = Math.floor(Math.random() * amount)
    return characters[random]
}
// creating a empty question variable that i will need to hold my prompted questions
var questions = ""

// ask the main 4 questions and forces the user to choose yes or no
function getQuestion() {
    var lowerCaseQuestion;
while(true){
    lowerCaseQuestion=prompt("Do you want lower case letters in your password. yes or no");
    if(lowerCaseQuestion ==="no" || lowerCaseQuestion ==="yes"){
    break
    }
    var upperCaseQuestion;
}while(true){
    upperCaseQuestion = prompt("Do you want upperase case letters in your password.yes or no");
    if(upperCaseQuestion ==="no" || upperCaseQuestion ==="yes"){
    break
    }
}
var symbolsQuestion;
while(true){
    symbolsQuestion = prompt("Do you want symbols in your password. yes or no");
    if(symbolsQuestion ==="no" || symbolsQuestion ==="yes"){
    break
    }
}
var numbersQuestion;
while(true){
    numbersQuestion = prompt("Do you want  numbers in your password.yes or no");
    if(numbersQuestion ==="no" || numbersQuestion ==="yes"){
    break
    }
}
    var questions = [lowerCaseQuestion, upperCaseQuestion, symbolsQuestion, numbersQuestion]
    return questions
}
// groups the random characters from each envoke call to an array.
// i also moved the users yes options to a seperate array and returned that array
function getSingleCharacter() {
    var groupCharacters = [getRandomCharacters(lowerCaseLetters, 26), getRandomCharacters(upperCaseLetters, 26), getRandomCharacters(numbers, 9), getRandomCharacters(symbols, 17)]
    var yes = []
    var no = []
    var random = ''
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].toLowerCase() == "yes") {
            yes.push(groupCharacters[i])
        }
        else if (questions[i].toLowerCase() == "no") {
            no.push(groupCharacters[i])
        }
    }
    for (var i = 0; i < yes.length; i++) {
        random = Math.floor(Math.random() * (i + 1))
    }
    return yes[random]
}
// i grabbed the single random output from the getSingleCharact function and push between 8 to 128 more of them to a new array and then return that array
function getMultipleCharacters(amount) {
    var listOfCharacters = []
    for (var i = 0; i < amount; i++) {

        listOfCharacters.push(getSingleCharacter())
    }
    return listOfCharacters
}
//created the button that would launch my main application
var textArea = document.querySelector("#text")
var generatePassword = document.querySelector("#generatePassword")
generatePassword.addEventListener("click", function () {
    textArea.value = " "
    getTitleQuestion()
    questions = getQuestion()
    console.log(getMultipleCharacters(Number.parseInt(howManyCharacters)))
    var stringOfRandomCharacters = getMultipleCharacters(Number.parseInt(howManyCharacters)).join(" ")
    textArea.value = stringOfRandomCharacters
})
// created  the clipboard
var clipboard = document.querySelector("#clipboard")
clipboard.addEventListener("click", function () {
    textArea.select()
    textArea.setSelectionRange(0, 99999);
    document.execCommand("copy")
})



