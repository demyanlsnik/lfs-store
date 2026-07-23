let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function isFavorite(id) {
    return favorites.includes(id);
}

function toggleFavorite(id) {

    if (isFavorite(id)) {

        favorites = favorites.filter(item => item !== id);

    } else {

        favorites.push(id);

    }

    saveFavorites();

    renderProducts();

}
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesPanel = document.getElementById("favoritesPanel");
const closeFavorites = document.getElementById("closeFavorites");

favoriteBtn.addEventListener("click", () => {

    favoritesPanel.classList.add("active");
    overlay.classList.add("active");

    renderFavorites();

});

closeFavorites.addEventListener("click", () => {

    favoritesPanel.classList.remove("active");
    overlay.classList.remove("active");

});

overlay.addEventListener("click", () => {

    favoritesPanel.classList.remove("active");

});
function renderFavorites() {

    const favoritesItems = document.getElementById("favoritesItems");

    favoritesItems.innerHTML = "";

    if (favorites.length === 0) {

        favoritesItems.innerHTML = `
            <p style="text-align:center;margin-top:30px;color:#777;">
                У вибраному поки що нічого немає ❤️
            </p>
        `;

        return;

    }

    favorites.forEach(id => {

        const product = products.find(item => item.id === id);

        if (!product) return;

        favoritesItems.innerHTML += `
            <div class="favorite-item">

                <img src="${product.image}" alt="${product.name}">

                <div class="favorite-info">

                    <h4>${product.name}</h4>

                    <span>${product.price} грн</span>

                </div>

                <div class="favorite-actions">

    <button class="favorite-cart" data-id="${product.id}">
        🛒 У кошик
    </button>

    <button class="favorite-remove" data-id="${product.id}">
        ✕
    </button>

</div>
            </div>
        `;

    });

    document.querySelectorAll(".favorite-remove").forEach(button => {

        button.addEventListener("click", () => {

            toggleFavorite(Number(button.dataset.id));

            renderFavorites();

        });

    });
document.querySelectorAll(".favorite-cart").forEach(button => {

    button.addEventListener("click", () => {

        addToCart(Number(button.dataset.id));

    });

});

}