import readAirports from "../module/readAirports.js";
document.addEventListener("DOMContentLoaded", () => {

    const fromInput = document.getElementById("from");
    const toInput = document.getElementById("to");
    const fromDropdown = document.getElementById("from-dropdown");
    const toDropdown = document.getElementById("to-dropdown");
    const searchForm = document.querySelector(".search-form");
    const airportDropDown = document.querySelector(".dropdown");

    const showDropdown = (input, dropdown) => {
        const rect = input.getBoundingClientRect();
        dropdown.style.top = `${rect.bottom + window.scrollY}px`;
        dropdown.style.left = `${rect.left + window.scrollX}px`;
        console.log(rect.width);
        dropdown.style.width = `400px`;
        dropdown.style.display = "block";
    };
    const hideDropdowns = () => {
        fromDropdown.style.display = "none";
        //toDropdown.style.display = "none";
    };

    fromInput.addEventListener("focus", () => showDropdown(fromInput, fromDropdown));
    toInput.addEventListener("focus", () => showDropdown(toInput, fromDropdown));

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown") && e.target !== fromInput && e.target !== toInput) {
            hideDropdowns();
        }
    });

    const airports = readAirports();
    console.log(airports);
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
        document.querySelector('.airports').appendChild(dropdownItem);
    });

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    console.log(dropdownItems);

    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Находим элемент с названием аэропорта внутри текущего dropdown-item
            const airportName = item.querySelector('.city-name').textContent;
            const airportCode = item.querySelector('.item-code').textContent;
            console.log(airportName, airportCode);




            // Предотвращаем выполнение дополнительных действий, если это требуется
            event.stopPropagation();
        });
    });

});