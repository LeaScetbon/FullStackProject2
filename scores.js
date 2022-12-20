// const heading = document.getElementById('myH1');

// // ✅ Change (replace) the text of the element
// heading.textContent ='Replacement heading text';

function Hi(){
    document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);

}

function show_scores(){
   // document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);
    //document.write(markup);
    //var obj=Object.entries(localStorage).filter(([key])=>key.startsWith('score'));
    //console.log(obj);
    score_platformer=[];
    score_2048=[];
    for(let i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        var name=key.split(" ");
        if(key.startsWith('score platformer')){
            score_platformer+=`${name[name.length-1]}: ${localStorage.getItem(key)}`;
            
            // document.write(key+": "+ localStorage.getItem(key));
            // document.write('<br>');
        }
        if(key.startsWith('score 2048')){
            score_2048+=`${name[name.length-1]}: ${localStorage.getItem(key)}`;
            
            // document.write(key+": "+ localStorage.getItem(key));
            // document.write('<br>');
        }
        
    }
    document.write('<center>');
    document.write('<h2>scores platformer</h2>');
    for(let i=0;i<score_platformer.length;i++){
         document.write(score_platformer[i]);
    }

    document.write('<h2>scores 2048</h2>');
    for(let i=0;i<score_2048.length;i++){
        document.write(score_2048[i]);
    }
    document.write('</center>');
    
    // let table = document.getElementById("TableScore");
    // let row = document.createElement("tr");
    // var cell1 = document.createElement("td");
    // var cell2 = document.createElement("td");
    // var cell3 = document.createElement("td");
    // cell1.innerHTML = "Cell of New Row";
    // cell2.innerHTML = "Cell of New Row";
    // cell3.innerHTML = "Cell of New Row";
    // row.appendChild(cell1);
    // row.appendChild(cell2);
    // row.appendChild(cell3);
    // table.appendChild(row);
}

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
