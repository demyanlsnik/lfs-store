const sortSelect = document.getElementById("sortProducts");

sortSelect.addEventListener("change", () => {

    let sorted = [...products];

    switch(sortSelect.value){

        case "cheap":
            sorted.sort((a,b)=>a.price-b.price);
            break;

        case "expensive":
            sorted.sort((a,b)=>b.price-a.price);
            break;

        case "name":
            sorted.sort((a,b)=>a.name.localeCompare(b.name));
            break;

        default:
            sorted=[...products];

    }

    renderProducts(sorted);

});