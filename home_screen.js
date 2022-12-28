function gameInDeveloppement(){
  alert("We are sorry, this game is still in development!")
}

// <<<<<<< HEAD
function Hi(){
  var key=localStorage.getItem('current user');
  var name=JSON.parse(window.localStorage.getItem(key)).name;
  document.write(`<h1>Hi ${name}</h1>`);

}
