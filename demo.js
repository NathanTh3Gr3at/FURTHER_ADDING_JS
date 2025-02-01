const productNameInputElement=document.getElementById('product-name');
const remainingCharsElement=document.getElementById('remaining-chars')

const maxAllowedChars=productNameInputElement.maxLength;

function updateRemainingCharaters(){
const enteredText=event.target.vlaue;
const enteredTextLength= enteredText.length;

const remainingCharacters=maxAllowedChars-enteredTextLength;

remainingCharsElement.textContent=remainingCharacters;
}

productNameInputElement.addEventListener('input',updateRemainingCharaters)