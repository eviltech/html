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

export function readAirports() {
    data.airports.forEach(airport => {
        airportMap.set(airport.city, airport.code);
    });
    return airportMap;
}

export function createAirportList(airports, dropdown) {
    airports.forEach((value, key) => {
        const dropdownItem = document.createElement('div');
        dropdownItem.classList.add('dropdown-item');

// Создание и добавление иконки
        const locationIcon = document.createElement('span');
        locationIcon.classList.add('location-icon');

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', '#6c757d');
        path.setAttribute('d', 'M12 2C8.13 2 5 5.13 5 9c0 5.25 6.25 11.84 6.51 12.1.31.32.83.32 1.14 0C12.75 20.84 19 14.25 19 9c0-3.87-3.13-7-7-7zm0 10.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 5.5 12 5.5 15.5 7.07 15.5 9 13.93 12.5 12 12.5z');

        svg.appendChild(path);
        locationIcon.appendChild(svg);

// Создание и добавление названия
        const cityName = document.createElement('div');
        cityName.classList.add('city-name');

        const name = document.createElement('span');
        name.textContent = key;

        cityName.appendChild(name);

// Создание и добавление кода элемента
        const itemCode = document.createElement('div');
        itemCode.classList.add('item-code');

        const code = document.createElement('span');
        code.textContent = value;

        itemCode.appendChild(code);

// Добавление всех частей в контейнер
        dropdownItem.appendChild(locationIcon);
        dropdownItem.appendChild(cityName);
        dropdownItem.appendChild(itemCode);

// Пример добавления в DOM (внутрь уже существующего элемента)
        dropdown.querySelector('.airports').appendChild(dropdownItem);
    });
}