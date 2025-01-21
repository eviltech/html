import {readAirports, createAirportList} from "../module/readAirports.js";
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
        toDropdown.style.display = "none";
    };

    fromInput.addEventListener("focus", () => {
        hideDropdowns(); // Скрываем другие dropdown
        showDropdown(fromInput, fromDropdown);
    });

    toInput.addEventListener("focus", () => {
        hideDropdowns(); // Скрываем другие dropdown
        showDropdown(toInput, toDropdown);
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown") && e.target !== fromInput && e.target !== toInput) {
            hideDropdowns();
        }
    });

    const airports = readAirports();
    createAirportList(airports, fromDropdown);
    createAirportList(airports, toDropdown);

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    console.log(dropdownItems);

    function clickDD() {
        fromDropdown.addEventListener("click", (e) => {
            console.log("fromDropdown");
        });
    }

    clickDD();

    toDropdown.addEventListener("click", (e) => {
        console.log("toDropdown");
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Находим элемент с названием аэропорта внутри текущего dropdown-item
            const airportName = item.querySelector('.city-name').textContent;
            const airportCode = item.querySelector('.item-code').textContent;

            const selectedCity = document.querySelector('.selected_сity');
            const cityNameElement = selectedCity.querySelector('.city-name span');
            const itemCodeElement = selectedCity.querySelector('.item-code span');

            cityNameElement.textContent = airportName;
            itemCodeElement.textContent = airportCode;
            selectedCity.style.display = "block";


            // Предотвращаем выполнение дополнительных действий, если это требуется
            event.stopPropagation();
        });
    });

});