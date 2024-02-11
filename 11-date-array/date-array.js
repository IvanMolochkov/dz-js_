const arr = ["10-2-2022", "тест", "11/12/2023", "00/13/2023", "41/12/2023"];

const data = (arr) => {
  const newArr = new Array();
  const parts = arr.filter((el) => el[2] == "-" || el[2] == "/");
  for (const part of parts) {
    let element;
    if (part.split("-").length == 3) {
      element = part.split("-");
    }
    if (part.split("/").length == 3) {
      element = part.split("/");
      element[0], element[1] = element[1], element[0];
    }
    if (Number(element[0]) > 31) {
      continue;
    }
    if (Number(element[0]) < 1) {
      continue;
    }
    if (Number(element[1]) > 12) {
      continue;
    }
    if (Number(element[1]) < 1) {
      continue;
    }
    newArr.push(part);
  }
  return newArr;
};

console.log(data(arr));
