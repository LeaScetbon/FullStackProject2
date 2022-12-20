// const heading = document.getElementById('myH1');

// // ✅ Change (replace) the text of the element
// heading.textContent ='Replacement heading text';



function addRow(){
    document.write(`<h1>Hi ${localStorage.getItem('current user')}</h1>`);
    //document.write(markup);
    //var obj=Object.entries(localStorage).filter(([key])=>key.startsWith('score'));
    //console.log(obj);
    for(let i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        if(key.startsWith('score')){
            document.write(key+": "+ localStorage.getItem(key));
            document.write('<br>');
        }
    }
    
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
