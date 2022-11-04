export default function orderByProps(obj, sortingOrder) {
  const arr1 = []; // массив для сортировки по принятому порядку
  const arr2 = []; // массив для сортировки по алфавиту
  for (const prop in obj) {
    if (sortingOrder.includes(prop)) {
      arr1.push({ key: prop, value: obj[prop] });
    } else {
      arr2.push({ key: prop, value: obj[prop] });
    }
  }
  arr1.sort((a, b) => sortingOrder.indexOf(a.key) - sortingOrder.indexOf(b.key));
  arr2.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    } return -1;
  });
  return [...arr1, ...arr2];
}
