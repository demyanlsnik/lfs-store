const telegramButton = document.getElementById("telegramOrder");

telegramButton.addEventListener("click", () => {

    if (state.cart.length === 0) {

        alert("Кошик порожній!");
        return;

    }

    // Просто відкриваємо твій Telegram-профіль
    window.open("https://t.me/unc0nsci0usnesss", "_blank");

});