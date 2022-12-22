function Hi(){
    var key=localStorage.getItem('current user');
    var name=key.split("@");
    document.write(`<h1>Hi ${name[0]}</h1>`);

    //document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);
}

function show_personal_info(){
    var key=localStorage.getItem('current user');
    var newobj=JSON.parse(window.localStorage.getItem(key));
    console.log(newobj);
    //document.getElementById("obj").innerHTML=newobj.name;
    document.write(`<p>Email: ${key}</p>`);
    document.write(`<p>password: ${newobj.pw}</p>`);
    document.write(`<p>Last connexion: ${newobj.datetime}</p>`);
    document.write(`<p>Your score 2048: ${newobj.score_2048}</p>`);
    document.write(`<p>Your score platformer: ${newobj.score_Platformer}</p>`);
    document.write(`<p>You have played the game 2048  ${newobj.number_of_times_played_2048} times</p>`);
    document.write(`<p>You have played the game platformer  ${newobj.number_of_times_played_Platformer} times</p>`);




    


}