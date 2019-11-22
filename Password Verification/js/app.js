//Create an array of uppercase letters
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Create an array of lowercase letters
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Create variable for specical characters
var special = ['!', '@', '#', '$', '%', '&', '~', '*', '?', ',', '+', '_'];
//Create an array of numbers
var number =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//Create an array for space characters
var space = [' ', '  ', '\b', '\t', '\n', '\v', '\f', '\r', `\"`, `\'`, `\\`]; 

function create() {
    event.preventDefault;
    //Get the username from user 
    let username = document.getElementById('username').value;

    //Get password from user
    let password  = document.getElementById('pass').value;

    //Check the length of password
    let lengthRule = document.getElementById('Length');
    if (password.length >= 8 && password.length <= 20) {
        lengthRule.style.color = 'green'; 
    } else {
        lengthRule.style.color = 'red';
    }
    
    //check for uppercase letters
    let upperRule = document.getElementById('Upper');
    for (let i = 0; i < password.length; i++) {
        if (upper.includes(password[i])) {
             upperRule.style.color = 'green';  
             break;          
         } else {
             upperRule.style.color = 'red'; 
         }           
    }            
    
    //check for lower
    let lowerRule = document.getElementById('Lower');
    for (let i = 0; i < password.length; i++) {
        if (lower.includes(password[i])) {
            lowerRule.style.color = 'green';
            break;            
        } else {
            lowerRule.style.color = 'red'; 
        }                
    }

    //check for numbers
    let numberRule = document.getElementById('Num');
    for (let i = 0; i < password.length; i++) {
        if (number.includes(Number(password[i]))) {
            numberRule.style.color = 'green';
            break;            
        } else {
            numberRule.style.color = 'red'; 
        }
    }       
        
    //check for spaces
    let spaceRule = document.getElementById('Space');
    for (let i = 0; i < password.length; i++) {
        if (space.includes(password[i])) {
            spaceRule.style.color = 'red'; 
            break;            
        } else {
            spaceRule.style.color = 'green';
        }
    }

    //check for special
    let specialRule = document.getElementById('Special');
    for (let i = 0; i < password.length; i++) {
        if (special.includes(password[i])) {
            specialRule.style.color = 'green';
            break;
        } else {
            specialRule.style.color = 'red'; 
        }
    
    }

    //check if password1 and password2 match
    let message = ["Your passwords do not match.", "Please enter in an Username", "Password is not a password. Come correct!", "Username cannot match password", "You're good to go!"] ;
    let password2 = document.getElementById('pass2').value;    
    if (password !== password2) {
        output.innerText = message[0];
    }

    //check if username is filled
    if (username == '') {
        output.innerText = message[1];
    }

    //check if username and password does not match
    if (username == password) {
        output.innerText = message[3];
    }

    //check if user put password variations as a password
    if (password.includes('Password', 'password')) { 
        output.innerText = message[2];
    }
    
    // if (create(password)) {
    //     output.innerText = messsage[4];
    //      window.location.href = "http://stackoverflow.com";
    // }    
}