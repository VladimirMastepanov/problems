Перед вами популярная игра "Морской бой".

Реализуйте и экспортируйте функцию calcShipsCount(), которая принимает на вход поле боя в виде квадратного двумерного массива из нулей и единиц. Ноль — пустая ячейка, единица — часть корабля. Функция должна вернуть количество кораблей на поле боя.

Так как корабли не должны соприкасаться друг с другом, реализуйте и экспортируйте функцию isValidField(), которая проверяет расстановку кораблей на корректность.
```
calcShipsCount([]); // 0
calcShipsCount([
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
]); // 6
isValidField([
  [0, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
]); // false
```
