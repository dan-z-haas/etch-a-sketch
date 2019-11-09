//                              ETCH A SKETCH


//          Creating the interactive Grid

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


//          Select all pixels

var updatePixelArray = function() {
    pixelArray = document.querySelectorAll('.pixel');    
}

//          Resize Divs to fit Grid

const gridDimensions = 512;
var divDimensions = gridDimensions/divsPerSide;
updatePixelArray();
var updateDivSize = function() {
    divDimensions = gridDimensions/divsPerSide;
    for (i=0;i<pixelArray.length;i++) {
        pixelArray[i].style.height=divDimensions+"px";
        pixelArray[i].style.width=divDimensions+"px";
        };
    }
updateDivSize();


//          Reset and Resize (R and R) Button

var rAndRButton = document.querySelector('button');
rAndRButton.addEventListener('click', () => {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    divsPerSide = prompt("How many squares per side?", 10);
    fillGrid(divsPerSide,divsPerSide);
    updatePixelArray();
    updateDivSize();
    updateHoverEffect();
})


//          Hover effect

var updateHoverEffect = function() {
    updatePixelArray();
    for (i=0;i<pixelArray.length;i++) {
        pixelArray[i].addEventListener("mouseover", (e) => {
            
            if (colorButtonState=="random") {
                randomColor="rgb("+Math.floor(Math.random()*256)+", "
                    +Math.floor(Math.random()*256)+", "
                    +Math.floor(Math.random()*256)+")";
                trailColor=randomColor;
            } else {
                trailColor="rgb(0,0,0)";
            }
            e.target.style.backgroundColor = trailColor;
            
            if (opacityButtonState==true) {
                if (e.target.style.opacity=="") {
                    e.target.style.opacity=0.1
                } else {
                e.target.style.opacity=(parseFloat(e.target.style.opacity)+0.1)
                }
             } else {
                e.target.style.opacity=""
             }
        })        
    }
}
updateHoverEffect();


//          Trail Color Button

let trailColor="rgb(0,0,0)";
var randomColor;
    randomColor="rgb("+Math.floor(Math.random()*256)+", "
        +Math.floor(Math.random()*256)+", "
        +Math.floor(Math.random()*256)+")";

var colorButton = document.querySelector('#color');
let colorButtonState="black";
colorButton.addEventListener('click', () => {
    if (colorButtonState=="black") {
        trailColor="rgb(0,0,0)";
        colorButtonState="random";
        colorButton.innerText = "Black Trail Color"
    } else {
        trailColor=randomColor;
        colorButtonState="black";
        colorButton.innerText = "Randomize Trail Colors"
    }
    updateHoverEffect();
})

//          Trail Opacity Mode Button

var opacityButton = document.querySelector('#opacity');
let opacityButtonState=false;
opacityButton.addEventListener('click', () => {
    if (opacityButtonState==false) {
        opacityButtonState=true;
        opacityButton.innerText = "Trail Opacity Mode On"
    } else {
        opacityButtonState=false;
        opacityButton.innerText = "Trail Opacity Mode Off"
    }
    updateHoverEffect();
})