Реализуйте и экспортируйте функции rotateLeft() и rotateRight(), которые поворачивают матрицу влево (против часовой стрелки) и соответственно вправо (по часовой стрелке).

Матрица реализована на массивах.
Функции должны возвращать новую матрицу не изменяя исходную.
##### Примеры:
```
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

rotateLeft(matrix);
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

rotateRight(matrix);
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]
```
