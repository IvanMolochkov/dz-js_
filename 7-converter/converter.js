const money = 1000;
const currency = "usd";
const targetCurrency = "rub";

const Converter = (money, currency, targetCurrency) => {
    const RUB_TO_USD = 90;
    const RUB_TO_EUR = 100;
    const USD_TO_EUR = 1.111;
    if (currency === "rub") {
        if (targetCurrency === "usd") {
            return money / RUB_TO_USD
        }
        if (targetCurrency === "eur") {
            return money / RUB_TO_EUR
        }
    }
    if (currency === "usd") {
        if (targetCurrency === "rub") {
            return money * RUB_TO_USD
        }
        if (targetCurrency === "eur") {
            return money / USD_TO_EUR
        }
    }
    if (currency === "eur") {
        if (targetCurrency === "rub") {
            return money * RUB_TO_EUR
        }
        if (targetCurrency === "usd") {
            return money * USD_TO_EUR
        }
    }
    if (currency === targetCurrency) {
        return money
    }
    return null
}

console.log(`${Converter(money, currency, targetCurrency)}${targetCurrency}`);