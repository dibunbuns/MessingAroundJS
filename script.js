const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  let userName = prompt("Who's there?", " ");
  if (userName === "Admin") {
    let password = prompt("Enter Password");
    if (password === "password") {
      alert("Welcome Master");
    } else if (password === null) {
      alert("Terminated");
    } else {
      alert("That is incorrect fool. Goodbye.");
    }
  } else if (userName === null) {
    alert("Canceled");
  } else {
    alert("I don't know who you are. Goodbye.");
  }
});
