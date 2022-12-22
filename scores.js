// const heading = document.getElementById('myH1');

// // ✅ Change (replace) the text of the element
// heading.textContent ='Replacement heading text';

function Hi(){
    var key=localStorage.getItem('current user');
    var name=key.split("@");
    document.write(`<h1>Hi ${name[0]}</h1>`);

    //document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);
}
function score_platformer(){
    score_platformer=[];
    for(let i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        if(key.includes('@')){
            //var name=key.split("@");
            //var obj=window.localStorage.getItem(key); 
            var newobj=JSON.parse(window.localStorage.getItem(key));   
        
            score_platformer.push(`${newobj.name}: ${newobj.score_Platformer}`);
            
        }
    }
    console.log(score_platformer[0]);
    console.log(score_platformer[1]);

    document.write('<center>');
    document.write('<h2>scores platformer</h2>');
    for(let i=0;i<score_platformer.length;i++){
         document.write(score_platformer[i]+'<br>');
    }
    document.write('</center>');
}

function score_2048(){
    score_2048=[];
    for(let i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        if(key.includes('@')){
            var newobj=JSON.parse(window.localStorage.getItem(key));   
            console.log(newobj);
            score_2048.push(`${newobj.name}: ${newobj.score_2048}`);
            

            
            
        }
    }
    document.write('<center>');
    
    document.write('<h2>scores 2048</h2>');
    for(let i=0;i<score_2048.length;i++){
        document.write(score_2048[i]+'<br>');
        
    }
    document.write('</center>');

 }
// function show_scores(){
//    // document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);
//     //document.write(markup);
//     //var obj=Object.entries(localStorage).filter(([key])=>key.startsWith('score'));
//     //console.log(obj);
//     score_platformer=[];
//     score_2048=[];
//     for(let i=0;i<localStorage.length;i++){
//         var key=localStorage.key(i);
//         var name=key.split(" ");
//         if(key.startsWith('score platformer')){
//             score_platformer.push(`${name[name.length-1]}: ${localStorage.getItem(key)}`);
            
//             // document.write(key+": "+ localStorage.getItem(key));
//             // document.write('<br>');
//         }
//         if(key.startsWith('score 2048')){
//             score_2048.push(`${name[name.length-1]}: ${localStorage.getItem(key)}`);
            
//             // document.write(key+": "+ localStorage.getItem(key));
//             // document.write('<br>');
//         }
        
        
//     }

//     document.write('<center>');
//     document.write('<h2>scores platformer</h2>');
//     for(let i=0;i<score_platformer.length;i++){
//          document.write(score_platformer[i]+'<br>');
//     }
//     document.write('<h2>scores 2048</h2>');
//     for(let i=0;i<score_2048.length;i++){
//         document.write(score_2048[i]+'<br>');
        
//     }
//     document.write('</center>');
    
//     // let table = document.getElementById("TableScore");
//     // let row = document.createElement("tr");
//     // var cell1 = document.createElement("td");
//     // var cell2 = document.createElement("td");
//     // var cell3 = document.createElement("td");
//     // cell1.innerHTML = "Cell of New Row";
//     // cell2.innerHTML = "Cell of New Row";
//     // cell3.innerHTML = "Cell of New Row";
//     // row.appendChild(cell1);
//     // row.appendChild(cell2);
//     // row.appendChild(cell3);
//     // table.appendChild(row);
// }

// function myCreateFunction() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
//   }
  
//   function myDeleteFunction() {
//     document.getElementById("myTable").deleteRow(0);
//   }
