const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  let userName = prompt("Who's there?");
  if (userName === "Admin") {
    prompt("Enter Password");
  } else if (userName === "cancel") {
    prompt("Canceled");
  } else prompt("I don't know who you are. Goodbye.");
});
