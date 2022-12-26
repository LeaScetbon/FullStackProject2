function Hi(){
    var key=localStorage.getItem('current user');
    var name=JSON.parse(window.localStorage.getItem(key)).name;
    document.write(`<h1>Hi ${name}</h1>`);
}

function show_personal_info(){
    var key=localStorage.getItem('current user');
    var obj=window.localStorage.getItem(key);
    console.log(obj);

    var newobj=JSON.parse(window.localStorage.getItem(key));
    console.log(newobj);
    console.log(newobj.datetime);
    //document.getElementById("obj").innerHTML=newobj.name;
    document.write(`<p><h3>Email:</h3> ${key}</p>`);
    document.write(`<p><h3>Last connexion:</h3> ${newobj.datetime}</p>`);
    document.write(`<p><h3>Your score 2048:</h3> ${newobj.score_2048}</p>`);
    document.write(`<p><h3>Your score platformer:</h3> ${newobj.score_Platformer}</p>`);
    document.write(`<p><h3>You have played the game 2048 </h3> ${newobj.number_of_times_played_2048} times</p>`);
    document.write(`<p><h3>You have played the game platformer</h3>  ${newobj.number_of_times_played_Platformer} times</p>`);




    


}