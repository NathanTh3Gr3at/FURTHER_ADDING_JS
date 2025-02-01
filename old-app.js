//document.body.children[1].children[0].href="https://www.google.com";
/* let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.google.com";
anchorElement = document.querySelector("#external-id");
anchorElement.href = "https://www.google.com"; */

// ADD NEW ELEMENT
// create new element
let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = "I am a new link";
newAnchorElement.href = "https://www.google.com";
// Get access to parent element that should hold the new element
let firstparagraph = document.querySelector("p");
// Inset the new element into the parent element
firstparagraph.appendChild(newAnchorElement);

// REMOVE ELEMENT
// Select element to remove
let firstH1Element = document.querySelector("h1");
//remove element
firstH1Element.remove();

// MOVE AN ELEMENT
firstparagraph.parentElement.appendChild(firstparagraph);

// innerHTML
firstparagraph.innerHTML = "Hi! this is <strong>important</strong>!";
