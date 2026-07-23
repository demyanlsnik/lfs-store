const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryButtons = document.querySelectorAll(".category-btn");

let selectedCategory = "all";

function filterProducts() {

    const value = searchInput.value.toLowerCase().trim();
if(value===""){

    renderProducts(

        selectedCategory==="all"

        ? products

        : products.filter(product=>product.category===selectedCategory)

    );

    return;

}

    const filtered = products.filter(product => {

        const searchMatch =

            product.name.toLowerCase().includes(value) ||

            product.category.toLowerCase().includes(value) ||

            product.description.toLowerCase().includes(value);

        const categoryMatch =

            selectedCategory === "all" ||

           product.category.toLowerCase() === selectedCategory.toLowerCase();

        return searchMatch && categoryMatch;

    });
if (filtered.length === 0) {

    productGrid.innerHTML = `
        <h2 style="grid-column:1/-1;text-align:center;color:#777;padding:40px;">
            😕 Товарів не знайдено
        </h2>
    `;

    return;

}
    renderProducts(filtered);

}

searchInput.addEventListener("input", filterProducts);

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>

            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterProducts();

    });

});
searchBtn.addEventListener("click", () => {

    if (searchInput.value.trim() === "") {

        searchInput.focus();

        renderProducts();

        return;

    }

    filterProducts();

});

searchInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        filterProducts();

    }

});