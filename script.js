const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};



// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
var team = players; // This will be a reference to players
var team1 = players.slice(); // This will be a copy of players

var cap1 = Object.assign({}, person); // This will be a copy of person



window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
