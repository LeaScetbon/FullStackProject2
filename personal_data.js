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
    document.write(`<p><h3>Email:</h3> ${key}</p>`);
    document.write(`<p><h3>Last connexion:</h3> ${newobj.datetime}</p>`);
    document.write(`<p><h3>Your score 2048:</h3> ${newobj.score_2048}</p>`);
    document.write(`<p><h3>Your score platformer:</h3> ${newobj.score_Platformer}</p>`);
    document.write(`<p><h3>You have played the game 2048 </h3> ${newobj.number_of_times_played_2048} times</p>`);
    document.write(`<p><h3>You have played the game platformer</h3>  ${newobj.number_of_times_played_Platformer} times</p>`);




    


}