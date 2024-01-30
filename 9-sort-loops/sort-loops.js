const arr = [1, 40, -5, 10, 0]

countB = 0;
countS = 0;

//----------------------------------------------------------------
// 1 вариант
// Пузырьковая сортировка

const Bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      countB++;
    }
  }
  return arr;
};

console.log("----------------------------------------------------------------");
console.log("Пузырьковая сортировка =>\n");
console.log(`Результат: [${Bubble(arr)}]\n`);
console.log(`Время выполнения ${countB}ms`);
console.log("----------------------------------------------------------------");

//----------------------------------------------------------------
// 2 вариант
// Селективная сортировка

const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      countS++;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
};

console.log("----------------------------------------------------------------");
console.log("Селективная сортировка =>\n");
console.log(`Результат: [${selection(arr)}]\n`);
console.log(`Время выполнения ${countS}ms`);
console.log("----------------------------------------------------------------");