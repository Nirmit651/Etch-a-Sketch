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
    }
}
