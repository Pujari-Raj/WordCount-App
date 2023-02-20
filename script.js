//
let userinput = document.querySelector(".user-text");
let result = document.querySelector(".input-result");

userinput.addEventListener("keydown", () => {

    let uservalue = userinput.value 
    // var regex = /[0-9]+$/;

    // if (uservalue.match(regex)) {
    //     console.log('if called');
    //     alert('enter characters');
    // }
    let enteredCharacters = uservalue.replace(/\d/g, '');
    let num = enteredCharacters.length

    result.textContent = "Number of characters entered by the user is :"+num;
})