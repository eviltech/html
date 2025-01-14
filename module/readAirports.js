const data = {
    "airports": [
        { "city": "Варшава", "code": "WAW" },
        { "city": "Вильнюс", "code": "VNO" },
        { "city": "Саудовская Аравия", "code": "ABT" },
        { "city": "Австралия", "code": "ABX" },
        { "city": "Мексика", "code": "ACA" }
    ]
};

// Создаем новый Map
const airportMap = new Map();

export default function getAirports() {
    data.airports.forEach(airport => {
        airportMap.set(airport.city, airport.code);
    });
    return airportMap;
}


// Выводим содержимое Map
console.log(airportMap);