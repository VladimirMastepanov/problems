import _ from 'lodash';

// Поворачиваем матрицу против часовой стрелки
const rotate = (matrix) => _.reverse(_.zip(...matrix));

const buildSnailPath = (source) => {
  const result = [];
  let matrix = _.cloneDeep(source);
  while (matrix.length > 0) {
    const [head, ...tail] = matrix;
    result.push(head);
    matrix = rotate(tail);
  }
  return result.flat();
};

// Решение с рекурсией
// const buildSnailPath = (matrix) => {
//   if (matrix.length === 0) {
//     return [];
//   }
//   const [head, ...tail] = matrix;
//   return [head, buildSnailPath(rotate(tail))].flat();
// };

export default buildSnailPath;


// export default function buildSnailPath(matrix) {
//   if (matrix.length === 0 || matrix[0].length === 0) {
//     return [];
//   }

//   const result = [];
//   let top = 0;
//   let bottom = matrix.length - 1;
//   let left = 0;
//   let right = matrix[0].length - 1;

//   while
//     (top <= bottom && left <= right) {
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i]);
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//       result.push(matrix[i][right]);
//     }
//     right--;

//     if
//       (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[bottom][i]);
//       }
//       bottom--;
//     }

//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         result.push(matrix[i][left]);
//       }
//       left++;
//     }
//   }

//   return result;

// }
