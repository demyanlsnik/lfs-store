const productGrid = document.getElementById("product-grid");

function renderProducts() {

    productGrid.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="badge">${product.badge}</div>

            <div class="image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='https://placehold.co/500x500/F2F2F2/777777?text=LFS+STORE';"
                >

            </div>

            <div class="product-info">

                <span class="category">${product.category}</span>

                <h3>${product.name}</h3>

                <p class="description">
                    ${product.description}
                </p>

                <div class="bottom">

                    <span class="price">
                        ${product.price} грн
                    </span>

                    <button class="add-cart">
                        🛒
                    </button>

                </div>

            </div>

        `;

        productGrid.append(card);

    });

}

renderProducts();