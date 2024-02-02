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

const check = (checkPassword, password, key) => {
    const cryptoCheckPassword = crypto(checkPassword, key);
    const cryptoPassword = crypto(password, key);
    return cryptoCheckPassword === cryptoPassword ? true : false;
};

console.log(crypto(password, key));
console.log(check(checkPassword, password, key));