В библиотеке [async](https://caolan.github.io/async/v3/docs.html#waterfall) есть функция waterfall(), которая позволяет строить цепочки асинхронных функций без необходимости вкладывать их друг в друга. Подробнее о том как она работает, посмотрите в документации. Попробуйте решить данное упражнение с применением этой функции.


Реализуйте и экспортируйте асинхронную функцию unionFiles(), которую мы рассматривали в предыдущих уроках. Вот её обычное решение на колбеках:

Примеры
```
import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
};
```
Подсказки
* Попробуйте написать её, используя указанную выше функцию waterfall.
* Статья с разбором [Waterfall](https://ru.hexlet.io/blog/posts/waterfall-ot-kolbekov-k-promisam)
