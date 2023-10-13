const playerName = document.getElementById("username");
// const playerName = usernameInput.value;

playerName.addEventListener("input", function() {
  const userName = playerName.value;
  localStorage.setItem('playerName', userName);
  console.log(localStorage.getItem('playerName'));
});

console.log(localStorage.getItem('playerName'));