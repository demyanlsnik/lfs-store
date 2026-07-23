const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        if(category==="all"){

            renderProducts(products);

            return;

        }

        const filtered = products.filter(product=>product.category===category);

        renderProducts(filtered);

    });

});