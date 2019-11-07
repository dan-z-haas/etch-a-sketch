//                              ETCH A SKETCH
//Creating the Grid
const grid = document.getElementById('container');
const addDiv = function () {
    let newDiv = document.createElement('div');
    newDiv.className="pixel";
    grid.appendChild(newDiv);
}
const newRow = function () {
    let newDiv = document.createElement('div');
    newDiv.className="break";
    grid.appendChild(newDiv);
}
let createGrid = function (columns,rows) {
    let addRow = function() {
        let j=0;
        do {
            addColumns(columns);
            newRow();
            j++;
        } while (j<rows);
    }
    let addColumns = function () {
        let i=0;
        do {
            addDiv();
            i++;
        } while (i<columns);
    }
    addRow();
}

createGrid(4,4);

//Hover effect

var testPixel=document.querySelector(".pixel");
testPixel.addEventListener("mouseover", (e) => {
	e.target.style.backgroundColor = "red";
    });

var pixelArray = document.querySelectorAll('.pixel');

for (i=0;i<pixelArray.length;i++) {
    pixelArray[i].addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
        });
}