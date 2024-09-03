const calcShipsCount = (battleField) => {
  let shipsCount = 0;
  const fieldSize = battleField.length;
  for (let row = 0; row < fieldSize; row += 1) {
    for (let col = 0; col < fieldSize; col += 1) {
      if (battleField[row][col] && !battleField[row][col - 1]) {
        if (!battleField[row - 1] || !battleField[row - 1][col]) {
          shipsCount += 1;
        }
      }
    }
  }

  return shipsCount;
};

const isValidField = (battleField) => {
  for (let col = 0; col < battleField.length; col += 1) {
    for (let row = 1; row < battleField.length; row += 1) {
      if (battleField[row][col]) {
        if (battleField[row - 1][col + 1] || battleField[row - 1][col - 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

// const calcShipsCount = (field) => {
//   if (field.length === 0) return 0;

//   let count = 0;
//   const rows = field.length;
//   const cols = field[0].length;

//   for (let i = 0; i < rows; i += 1) {
//     for (let j = 0; j < cols; j += 1) {
//       if (field[i][j] === 1) {
//         if ((i === 0 || field[i - 1][j] === 0) && (j === 0 || field[i][j - 1] === 0)) {
//           count += 1;
//         }
//       }
//     }
//   }

//   return count;
// };

// const isValidField = (field) => {
//   if (field.length === 0) return true;

//   const rows = field.length;
//   const cols = field[0].length;

//   for (let i = 0; i < rows; i += 1) {
//     for (let j = 0; j < cols; j += 1) {
//       if (field[i][j] === 1) {
//         if (i > 0 && j > 0 && field[i - 1][j - 1] === 1) return false;
//         if (i > 0 && j < cols - 1 && field[i - 1][j + 1] === 1) return false;
//         if (i < rows - 1 && j > 0 && field[i + 1][j - 1] === 1) return false;
//         if (i < rows - 1 && j < cols - 1 && field[i + 1][j + 1] === 1) return false;
//       }
//     }
//   }

//   return true;
// };

export { calcShipsCount, isValidField };
