function gameInDeveloppement(){
    alert("We are sorry, this game is still in development!")
}

function Hi(){
    var key=localStorage.getItem('current user');
    var name=key.split("@");
    document.write(`<h1>Hi ${name[0]}</h1>`);

    //document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);
}