const key = "3a8f879f9171d9be0e7e8e7867670af7";
const town = "Charlottetown";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${key}&units=metric`

const weather = new weather(town);
