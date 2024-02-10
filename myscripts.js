const grid = document.getElementById('grid');
const defaultSize = 16;
console.log("test");
console.log(grid);
makeGrid(defaultSize);

function makeGrid(x){
    console.log("function ran");
    let boxWidth=800/x;
    console.log(grid)
    for(let b = 0; b<x*x; b++){
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.style.width=boxWidth + 'px';
        gridBox.style.height=boxWidth + 'px';
        console.log(grid)
        grid.appendChild(gridBox);
        gridBox.addEventListener('mouseenter', () => {
            gridBox.classList.add('active');
        });
        gridBox.addEventListener('click', () => {
            gridBox.classList.remove('active');
        });
    }
}

function clearGrid(){
    const gridBoxes = document.querySelectorAll(".grid-box");

    for(i = 0; i <x*x;i++){
        gridBoxes[i].classList.remove('active');
    }

    console.log("clear grid ran");
}

function removeGrid(){
    const gridBoxes = document.querySelectorAll(".grid-box")

    for(i = 0; i <b*b;i++){
        gridBoxes[i].remove();
    }
    
}

const btnNewGrid = document.querySelector('.btn-new-grid');
btnNewGrid.addEventListener('click', () => {
    let checker = false;
    b=x;
    do{
        x = prompt("What should be the size of the new grid be? (No values greater than 100)")
        if(x<=100){
            checker=true;
            removeGrid();
            makeGrid(x);
        }
    }while(!checker);

    console.log("new grid button clicked");
});

const btnClearGrid = document.querySelector('.btn-clear-grid');
btnClearGrid.addEventListener('click', () => {
    clearGrid();
    console.log("clear grid button clicked");
});

let x = 16;
let b;


