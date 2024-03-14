let arrayOfNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const remove = (arr, num) => {
  let newArray = [];
  let change = false;
  for (const el of arr) {
    if (num === el) {
      change = true;
      continue;
    }
    newArray.push(el);
  }
  return [change, newArray];
};

const selection = (arr, number, func) => {
  let [bool, array] = func(arr, number);
  console.log(bool);
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

console.log(selection(arrayOfNumbers, 5, remove));