document.addEventListener("DOMContentLoaded", () => {
    const fromInput = document.getElementById("from");
    const toInput = document.getElementById("to");
    const fromDropdown = document.getElementById("from-dropdown");
    const toDropdown = document.getElementById("to-dropdown");
    const searchForm = document.querySelector(".search-form");

    const showDropdown = (input, dropdown) => {
        const rect = input.getBoundingClientRect();
        dropdown.style.top = `${rect.bottom + window.scrollY}px`;
        dropdown.style.left = `${rect.left + window.scrollX}px`;
        console.log(rect.width);
        dropdown.style.width = `${rect.width}px`;
        dropdown.style.display = "block";
    };
    const hideDropdowns = () => {
        fromDropdown.style.display = "none";
        toDropdown.style.display = "none";
    };

    fromInput.addEventListener("focus", () => showDropdown(searchForm, fromDropdown));
    toInput.addEventListener("focus", () => showDropdown(toInput, toDropdown));

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown") && e.target !== fromInput && e.target !== toInput) {
            hideDropdowns();
        }
    });
});