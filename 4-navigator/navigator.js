const addressLat = 6;
const addressLong = 8;
const positionLat = 6;
const positionLong = 4;

console.log(`Ваш путь составляет ${Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2)}`);
