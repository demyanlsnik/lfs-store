const state = {

    cart: JSON.parse(localStorage.getItem("cart")) || [],

    favorites: JSON.parse(localStorage.getItem("favorites")) || [],

    theme: localStorage.getItem("theme") || "light"

};

function saveCart(){

    localStorage.setItem(

        "cart",

        JSON.stringify(state.cart)

    );

}