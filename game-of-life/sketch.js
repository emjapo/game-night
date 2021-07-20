function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;
/*
function getInputValue(){
    // Selecting the input element and get its value
    var inputVal = document.getElementById("res").value;
    parseInt(inputVal);
    return inputVal;
}

let resolution = getInputValue();
*/
function setup() {
  createCanvas(600, 600);
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }
}

// need two funtions one for original grid then one that will start the actions after a start button is clicked

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      var x = i * resolution;
      var y = j * resolution;
      // fills in color
      if (grid[i][j] == 0) {
        fill(230);
        stroke(255);
        rect(x, y, resolution, resolution);
      }
      else if (grid[i][j] == 1) {
        //need funtion to get colors from neighbors
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let c;
        c = color(red, green, blue);
        fill(c);
        noStroke();
        rect(x, y, resolution, resolution);
      }
    }
  }
  // making next based on grid
  let next = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];

      //counts neighbors
      let neighbors = countNeighbors(grid, i, j);
      // rules of game
      if(state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  grid = next;
}


//counts neighbors for each cell that is passed in
function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}
