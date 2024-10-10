const correctPassword = "POGI MO";

let userPassword;

do {

    userPassword = prompt("Enter your password:");

    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

console.log("Access granted.");