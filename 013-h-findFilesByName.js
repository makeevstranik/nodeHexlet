/**
 * Created by hexlet on 11.02.18.
 */
/*
const findFilesByName = (root, substr) => { // получили дерево и строку
  const iter = (n, ancestry, acc) => { // внутренний итератор получил узел, акк для пути - *путь, *акк
    const newAncestry = path.join(ancestry, n.name); //любое текущее имя присоединили к *путь получили newAncestry КЛЮЧЕВАЯ СТРОКА
    console.log('newAncectry(newAcc)+++++++>', newAncestry);
    if (n.type === 'file') { // если файл
      console.log('IN FILE CONCLUSION');
      return n.name.includes(substr) ? // проверяем вхождение строки
        [...acc, newAncestry] : // да = возвращаем массив! где к эементам *акк добавили элемент *путь
        acc; //нет = вернули неизмененный *акк
    } // далее идем только для папок!!!!!!
// для каждого элемента ребенка вызываем iter передавая сам элемент, *путь, *акк - результат складываем в *асс
    return n.children.reduce((cAcc, elem) => iter(elem, newAncestry, cAcc), acc); // КЛЮЧЕВАЯ СТРОКА
  };
  return iter(root, '', []); // ВХОД!!!!!!!!!!!!!
};
export default findFilesByName;
*/
/*
 корень решения в использовании внешнего аккумулятора newAncestry. Несмотря на то, что внутри функции iter он изменяется,
 для всех элементов цикла reduce он остается таким, каким был на момент первого вызова. То есть для всех детей папки
 храним один путь (выше по дереву), несмотря на то, что внутри каждый файл добавляет себя к этому пути. Стандартный
 аккумулятор acc используется как обычно. Для каждой следующей папки (новый reduce по детям) пробрасываем стандартный acc
 и текущий newAncectry (уже с этой папкой внутри пути - записанной в КЛЮЧЕВОЙ СТРОКЕ)
 ВАЖНО все аргументы вызова функций, даже тех которые вызываются через второй вызов от функции callback для reduce (iter)
 сохраняют свои значения на момент первого вызова, для всех элементов цикла (reduce), даже если их значения меняются
 по ходу программы. Естественно это не касается стандартного acc
*/