const card = "4561-2612-1234-5464";

const confirming = (card) => {
    const parts = card.split("-");
    let sum = 0;
    for (const part of parts) {
        part.split("").map((el, i) => {
            num = Number(el)
            if(i == 0 || i == 2) {
                num *= 2;
                if (num > 9) {
                    num -= 9
                }
            }
            sum += num;
        })
    }
    return sum % 10 == 0
}

console.log(confirming(card));