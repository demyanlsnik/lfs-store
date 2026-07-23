const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cart");
const closeCartBtn = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");

// ------------------------------

if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
}

if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCart);
}

if (overlay) {
    overlay.addEventListener("click", closeCart);
}

// ------------------------------

function openCart() {

    cartPanel.classList.add("active");
    overlay.classList.add("active");

    renderCart();

}

function closeCart() {

    cartPanel.classList.remove("active");
    overlay.classList.remove("active");

}

// ------------------------------

function addToCart(productId) {

    const existing = state.cart.find(item => item.id === productId);

    if (existing) {

        existing.quantity++;

    } else {

        const product = products.find(item => item.id === productId);

        state.cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    updateCartCounter();

    renderCart();
    showToast();

}

// ------------------------------

function updateCartCounter() {

    const count = state.cart.reduce((sum, item) => {

        return sum + item.quantity;

    }, 0);

    if (cartCount) {
    	cartCount.textContent = count;
    }
    
}

// ------------------------------

function renderCart() {
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";

    if (state.cart.length === 0) {

        cartItems.innerHTML = "<p>Кошик порожній.</p>";

        cartTotal.textContent = "0 грн";

        return;

    }

    let total = 0;

    state.cart.forEach(item => {

        total += item.price * item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <img src="${item.image}"
            onerror="this.src='https://placehold.co/90x90?text=LFS'">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p>${item.price} грн</p>

                <div class="cart-actions">

                    <button class="minus">−</button>

                    <span>${item.quantity}</span>

                    <button class="plus">+</button>

                </div>

            </div>

            <button class="delete">

                ✕

            </button>

        `;

        div.querySelector(".plus").addEventListener("click", () => {

            item.quantity++;

            saveCart();

            updateCartCounter();

            renderCart();

        });

        div.querySelector(".minus").addEventListener("click", () => {

            item.quantity--;

            if (item.quantity <= 0) {

                state.cart = state.cart.filter(p => p.id !== item.id);

            }

            saveCart();

            updateCartCounter();

            renderCart();

        });

        div.querySelector(".delete").addEventListener("click", () => {

            state.cart = state.cart.filter(p => p.id !== item.id);

            saveCart();

            updateCartCounter();

            renderCart();

        });

        cartItems.appendChild(div);

    });

    cartTotal.textContent = total + " грн";

}

updateCartCounter();
renderCart();
function showToast(){

    if(!toast) return;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2000);

}