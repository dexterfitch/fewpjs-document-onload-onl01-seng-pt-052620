document.addEventListener("DOMContentLoaded", function() {
  let text = document.getElementById("text");
  text.textContent = "This is really cool!"
});

console.log("This fires before DOMContentLoaded, as soon as index.js loads.")
