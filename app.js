let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked";
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  //let enteredText = inputElement.value;
  let enteredText=event.target.value;

  //let enteredText=event.data;    THIS IS DIFFERENT
  //console.log(enteredText);
}

inputElement.addEventListener("input", retrieveUserInput);
