const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

const product = products.find(item => item.id === productId);

if (!product) {

    document.body.innerHTML = "<h1>Товар не знайдено</h1>";

} else {

    const mainImage = document.getElementById("productImage");

mainImage.src = product.images[0];
const gallery = document.getElementById("gallery");

gallery.innerHTML = "";

product.images.forEach(image => {

    const img = document.createElement("img");

    img.src = image;

    img.onclick = () => {

        mainImage.src = image;

    };

    gallery.appendChild(img);

});

    document.getElementById("productImage").alt = product.name;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productCategory").textContent = product.category;

    document.getElementById("productDescription").textContent = product.description;

    document.getElementById("productPrice").textContent = product.price + " грн";

    document.getElementById("productOldPrice").textContent = product.oldPrice + " грн";

    const details = document.getElementById("productDetails");

    details.innerHTML = "";

    if(product.details){

        product.details.forEach(detail=>{

            details.innerHTML += `<li>${detail}</li>`;

        });

    }

    document.getElementById("addCartPage").onclick = ()=>{

       addToCart(product.id);

alert("Товар додано у кошик ✅");

    };
document.getElementById("favoritePage").onclick = () => {

    toggleFavorite(product.id);

};

}
document.getElementById("buyTelegram").onclick = () => {

    const text =
`Привіт! Хочу замовити:

${product.name}

Ціна: ${product.price} грн`;

    window.open(
`https://t.me/unc0nsci0usnesss?text=${encodeURIComponent(text)}`,
"_blank"
);

};