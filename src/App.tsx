import React from 'react';
import './App.css';

function App() {

  const gridWidth = 8
  const gridHeight = 3
  // let grid = new Array(gridWidth * gridHeight).map(() => { console.log('x'); return 1 })
  let grid = Array.from(Array(gridWidth * gridHeight).keys())


  console.log('grid', grid, getCellNeighbours(grid, 23, gridWidth)) 

  return (
    <div className="App">
      Test2
    </div>
  )
}

const getCellNeighbours = (grid: Array<number>, cellIndex: number, width: number): Array<number> => {
  let neighbours: Array<number> = []

  for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
    const rowIndex = cellIndex + (rowOffset * width);

    if (rowIndex >= 0 && rowIndex < grid.length) {
      const rowNum = Math.floor(rowIndex / width);
      const rowMin = width * rowNum;
      const rowMax = rowMin + (width - 1);
 
      for(let colOffset = -1; colOffset < 2; colOffset++) {
        const neighbourIndex = rowIndex + colOffset;
        
        if (
          neighbourIndex >= rowMin // Must be equal or greater than row min
          && neighbourIndex <= rowMax // Must be equal or less than row max
          && neighbourIndex !== cellIndex // Can't be current cell index
        ) {
          neighbours.push(neighbourIndex)
        }
      }
    }

  }


  return neighbours
}

export default App;
