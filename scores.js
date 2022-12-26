
let currentUser=window.localStorage.getItem("current user").split('@')[0];  

function Hi(){
    var key=localStorage.getItem('current user');
    var name=JSON.parse(window.localStorage.getItem(key)).name;
    document.write(`<h1>Hi ${name}</h1>`);
}
function score_platformer(){
    score_platformerList=[];
    for(let i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        if(key.includes('@')){

            var newobj=JSON.parse(window.localStorage.getItem(key));   
        
            let userScore = 
                {
                  "name": newobj.name,
                  "scorePlatformer": newobj.score_Platformer
                }
            
                score_platformerList.push(userScore);

            
        }
    }

    // let sortedscores = score_platformerList.sort(
    //     (p1, p2) => (p1.scorePlatformer< p2.scorePlatformer) ? 1 : (p1.scorePlatformer > p2.scorePlatformer) ? -1 : 0);
    document.write('<center>');

    document.write('<h2>scores platformer</h2>');

    score_platformerList.forEach((e) => {        
        const obj=JSON.stringify(e)
        const temp = JSON.parse(obj);
        if(temp.name==currentUser){

            document.write("<font color=\"red\">"+`${temp.name}: ${temp.scorePlatformer} `+"<br>"+"</font>");
        }else{
        document.write(`${temp.name}: ${temp.scorePlatformer} `+"<br>");}
    });

    document.write('</center>');
}

function score_2048(){
    score_2048List=[];
    
    for(let i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        if(key.includes('@')){
            var newobj=JSON.parse(window.localStorage.getItem(key));   
            
            let userScore = 
                {
                  "name": newobj.name,
                  "score2048": newobj.score_2048
                }
            
            score_2048List.push(userScore);

            
            
        }
    }
 
    let sortedscores = score_2048List.sort(
        (p1, p2) => (p1.score2048< p2.score2048) ? 1 : (p1.score2048 > p2.score2048) ? -1 : 0);
   

    document.write('<center>');
    
    document.write('<h2>scores 2048</h2>');

    sortedscores.forEach((e) => {
        const obj=JSON.stringify(e)
        const temp = JSON.parse(obj);
        if(temp.name==currentUser){

            document.write("<font color=\"red\">"+`${temp.name}: ${temp.score2048} `+"<br>"+"</font>");
        }else{
        document.write(`${temp.name}: ${temp.score2048} `+"<br>");}
    });
    document.write('</center>');

 }