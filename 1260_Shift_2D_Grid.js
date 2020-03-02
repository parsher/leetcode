const shiftGrid = function (grid, k) {
  if (!grid) return grid;

  k = k % (grid.length * grid[0].length);

  while (k !== 0) {
    const newGrid = new Array(grid.length).fill(0).map(() => new Array(grid[0].length));

    // move one except the last element
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 1; col++) {
        newGrid[row][col + 1] = grid[row][col];
      }
    }

    // move the last element of the row into the next line
    for (let row = 0; row < grid.length - 1; row++) {
      newGrid[row + 1][0] = grid[row][grid[0].length - 1];
    }

    // move the last element of the grid into the start position
    newGrid[0][0] = grid[grid.length - 1][grid[0].length - 1];

    // swap it with an old one.
    grid = newGrid;
    k--;
  }

  return grid;
};

const shiftGridInPlace = function (grid, k) {
  if (!grid) return grid;

  k = k % (grid.length * grid[0].length);

  while (k !== 0) {
    let previous = grid[grid.length - 1][grid[0].length - 1];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        let temp = grid[row][col];
        grid[row][col] = previous;
        previous = temp;
      }
    }

    k--;
  }

  return grid;
};

const shiftGridWithArray = function (grid, k) {
  const arr = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      arr.push(grid[i][j]);
    }
  }

  k = k % (grid.length * grid[0].length);

  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }

  const result = [];
  while (arr.length != 0) {
    result.push(arr.splice(0, grid[0].length));
  }

  return result;
};

const shiftGridWithPosition = function (grid, k) {
  const newGrid = new Array(grid.length).fill(0).map(() => new Array(grid[0].length));

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      let newColumn = (column + k) % grid[0].length;
      let numberOfIncrement = Math.trunc((column + k) / grid[0].length);
      let newRow = (row + numberOfIncrement) % grid.length;

      newGrid[newRow][newColumn] = grid[row][column];
    }
  }

  return newGrid;
};


// expected: [[9,1,2],[3,4,5],[6,7,8]]
console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(shiftGridInPlace([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(shiftGridWithArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(shiftGridWithPosition([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));