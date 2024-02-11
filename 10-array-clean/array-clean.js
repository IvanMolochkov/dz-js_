const arrayOfNumbers = [9,8,7,6,5,4,3,2,1];

const remove = (arr, number) => {
    let newArr = [];
    for (const el of arr) {
        if (el === number) {
            continue;
        }
        newArr.push(el);
    };
    return newArr
};

const selection = (arr, number, func) => {
    const array = func(arr, number);
    array.length < arr.length ? console.log(true) : console.log(false);
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