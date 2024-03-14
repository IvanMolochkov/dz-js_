const obj = {
    search: "Вася",
    take: 10,
}

const keys = Object.keys(obj);
const values = Object.values(obj)
let arr = []

for (let i = 0; i < keys.length; i++) {
    arr[i] = `${keys[i]}=${values[i]}`
}

const text = arr.join("&")
console.log(text);