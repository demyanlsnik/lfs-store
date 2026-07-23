const productGrid = document.getElementById("productGrid");

function createProductCard(product) {

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <div class="product-badge">${product.badge}</div>
        <button class="favorite-btn ${isFavorite(product.id) ? 'active' : ''}">
    <i class="fa-${isFavorite(product.id) ? 'solid' : 'regular'} fa-heart"></i>
</button>


        <img
            src="${product.images[0]}"
    	    alt="${product.name}"
            onerror="this.src='https://placehold.co/400x400?text=LFS';"
        >

        <div class="product-info">

            <span class="category">${product.category}</span>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <div class="price">

                <span class="current">${product.price} грн</span>

                <span class="old">${product.oldPrice} грн</span>

            </div>

            <button class="buy-btn">

                Додати у кошик

            </button>

        </div>
    `;

    const button = card.querySelector(".buy-btn");

    button.addEventListener("click", (e) => {

    e.stopPropagation();

    addToCart(product.id);

});
const favoriteButton = card.querySelector(".favorite-btn");

favoriteButton.addEventListener("click", (e) => {

    e.stopPropagation();

    toggleFavorite(product.id);

});
card.addEventListener("click", () => {

    window.location.href = `product.html?id=${product.id}`;

});
    return card;

}

function renderProducts(list = products) {

    productGrid.innerHTML = "";

    list.forEach(product => {

        productGrid.appendChild(createProductCard(product));

    });

}

renderProducts();