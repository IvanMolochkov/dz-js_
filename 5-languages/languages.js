const language = prompt("Выберите свой язык \n en  ru  de");
switch (language) {
    case "en":
        console.log("Good morning");
        break;
    case "ru":
        console.log("Доброе утро");
        break;
    case "de":
        console.log("Guten Morgen");
        break;
    default:
        console.log("Нет такого языка");
}