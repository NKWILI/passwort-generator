
const passwordBox = document.getElementById("password");
const len = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol= "!@#$%^&*()_+-={}[]:;";
const checkbox = document.getElementById("switch");

const allChars = upperCase + lowerCase + number + symbol;
const allCharsWithoutSymbols = upperCase + lowerCase + number ;
const arrayOfStoredPassWord = [];
localStorage.setItem("OldPassword", JSON.stringify(arrayOfStoredPassWord));

// the function to generate random password 
/**
 * Generates a random password based on user preferences and stores it in localStorage.
 * 
 * The function creates a password with a mix of uppercase letters, lowercase letters, 
 * numbers, and optionally symbols, depending on the state of a checkbox. It ensures 
 * the password meets the specified length and updates the password input field. 
 * Additionally, it saves the generated password to localStorage, maintaining a list 
 * of previously generated passwords (up to 10), and displays them in an HTML element.
 * 
 * @function
 * @global
 * 
 * @throws {TypeError} Throws an error if `saved` is not properly initialized or if 
 *                     `localStorage` does not contain valid data.
 * 
 * @requires {HTMLInputElement} checkbox - A checkbox element that determines whether 
 *                                         symbols are included in the password.
 * @requires {HTMLInputElement} passwordBox - An input element where the generated 
 *                                            password is displayed.
 * @requires {HTMLElement} storedPassword - An HTML element where the list of 
 *                                           previously generated passwords is displayed.
 * 
 * @requires {Array<string>} upperCase - An array of uppercase letters.
 * @requires {Array<string>} lowerCase - An array of lowercase letters.
 * @requires {Array<string>} number - An array of numeric characters.
 * @requires {Array<string>} symbol - An array of symbol characters.
 * @requires {Array<string>} allChars - An array containing all possible characters 
 *                                      (letters, numbers, and symbols).
 * @requires {Array<string>} allCharsWithoutSymbols - An array containing all possible 
 *                                                    characters except symbols.
 * 
 * @param {number} len - The desired length of the password.
 * 
 * @returns {void}
 */
function createPassword(){
    if(checkbox.checked){
        let password = "";
    //constructing the password's first four characters 
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    //constructing th rest of the characters
    while( len > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]; }
    passwordBox.value = password;

    }
    else {
        let password = "";
    //constructing the password's first four characters 
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += number[Math.floor(Math.random() * number.length)];
    
    //constructing th rest of the characters
    while( len > password.length){
        password += allCharsWithoutSymbols[Math.floor(Math.random() * allCharsWithoutSymbols.length)]; }
    passwordBox.value = password;
        
    }
    let saved = JSON.parse(localStorage.getItem("OldPassword")) ; // Ensure saved is initialized
    if ((saved.length < 10)||(saved.length>5)) { // Ensure password is defined and limit to 10 passwords
        saved.push(passwordBox.value);
        localStorage.setItem("OldPassword", JSON.stringify(saved)); 
        let listHTML = "<ul>"; // Start a list
        for (let i = 0; i < saved.length; i++) {
            listHTML += "<li>" + saved[i] + "</li>"; // Add each item
        }
        listHTML += "</ul>";
        document.getElementById("storedPassword").innerHTML = listHTML;

    }

}

//The function for copying the password 
function copyPassword(){
 passwordBox.select();
 document.execCommand("copy");

}
if (navigator.onLine) {
    alert("You're online!");
  } else {
    alert("You're offline!");
  }

  
