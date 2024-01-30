const password = "password";
const checkPassword = "password";

const abc = "abcdefghijklmnopqrstuvwyz".split("");
const key = 3;

const crypto = (password, key) => {
    const parts = password.split("");
    const res = [];
    for (let i = 0; i < parts.length; i++) {
        for (let j = 0; j < abc.length; j++) {
            if (parts[i] == abc[j]) {
                k = Math.floor((j + key) / abc.length);
                res.push(abc[j + key - k * abc.length]);
            };
        };
    };
    return res.join("");
};

const check = (checkPassword, key) => {
    const cryptoParts = crypto(password, key).split("");
    const res = [];
    for (let i = 0; i < cryptoParts.length; i++) {
        for (let j = 0; j < abc.length; j++) {
            if (cryptoParts[i] == abc[j]) {
                k = Math.floor((abc.length + key - j - 1) / abc.length);
                res.push(abc[j - key + k * abc.length]);
            };
        };
    };
    return res.join("") === checkPassword ? true : false;
};

console.log(crypto(password, key));
console.log(check(checkPassword, key));