import _ from 'lodash';

const cons = (list, el) => _.union(list, [el]);

export default (...dictionaries) => _.mergeWith({}, ...dictionaries, cons);

// Документация по функции union https://lodash.com/docs/#union
// Документация по функции mergeWith: https://lodash.com/docs/#mergeWith
/*
Функция merge в lodash объединяет объекты:
_.merge({ a: 'b', c: 'b' }, { b: 'c', c: 'd' }) // { a: "b", c: "d", b: "c" }
Последний объект считается источником (source) актуальных значений,
поэтому в результате ключ "c" перезаписан значением из объекта справа

mergeWith делает то же самое, но принимает третьим аргументом функцию-обработчик (customizer)
customizer должен вернуть значение для текущего ключа (ключи берутся из правого объекта)
customizer принимает до 6 аргументов, но нас интересуют только два:
* objValue - значение по текущему ключу из левого объекта
* srcValue - значение по текущем ключу из правого объекта
_.mergeWith({ a: 'b', c: 'b' }, { b: 'c', c: 'd' }, (objValue, srcValue) => {
  return srcValue || objValue;
}) // { a: "b", c: "d", b: "c" }

Возвращая из customizer массив, в objValue в следующий раз будет возвращаться массив,
что и делается в решении учителя:
_.mergeWith({ a: 'b', c: 'b' }, { b: 'c', c: 'd' }, (objValue, srcValue) => {
  return _.union(objValue, [srcValue]); // objValue будет массивом для значений из source
}) // { a: "b", c: ["d"], b: ["c"] }

cons выступает функцией-обёрткой для union и как customizer для mergeWith
*/
