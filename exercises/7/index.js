/* Add a new `<h2>` element with the text "Favorite Corgis" */

const h2 = document.createElement("h2");
h2.textContent = "Favorite Corgis";
const body =document.querySelector("body");
body.append(h2);