//                              ETCH A SKETCH

//          Creating the interactive Grid

//var divArray = document.querySelectorAll(div);

const grid = document.getElementById('container');
var divsPerSide = 4;
let fillGrid = function (divsPerSide) {
    for(j=0;j<divsPerSide;j++) {
        let fillRowWithPixels = function () {            
            for (i=0;i<divsPerSide;i++) {
                let addDiv = function () {
                    let newDiv = document.createElement('div');
                    newDiv.className="pixel";
                    grid.appendChild(newDiv);
                }
                addDiv();
            }
        }            
        fillRowWithPixels(divsPerSide);
        
        let newRow = function () {
            let newDiv = document.createElement('div');
            newDiv.className="break";
            grid.appendChild(newDiv);
        }
        newRow();
    }
}

fillGrid(divsPerSide);

//          Resize Divs to fit Grid
/*
const gridDimensions = 1000;
var divDimensions = gridDimensions/divsPerSide;

var updateDivSize = function() {
    divDimensions = gridDimensions/divsPerSide;
    for (i=0;i<pixelArray.length;i++) {
        pixelArray[i].style.length=divDimensions+"px";
        pixelArray[i].style.width=divDimensions+"px";
        };
    }
updateDivSize();
*/

//Hover effect

var hoverEffect = function() {
    for (i=0;i<pixelArray.length;i++) {
        pixelArray[i].addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";        
            });
    }
}
var pixelArray = document.querySelectorAll('.pixel');

pixelArray = document.querySelectorAll('.pixel');
hoverEffect();

//Reset and Resize (R and R) Button

var rAndRButton = document.querySelector('button');
rAndRButton.addEventListener('click', () => {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    divsPerSide = prompt("How many squares per side?", 10);
    fillGrid(divsPerSide,divsPerSide);
    pixelArray = document.querySelectorAll('.pixel');
    //updateDivSize();
    hoverEffect();
})