const modal = document.getElementById("productModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");

const modalCartButton = document.getElementById("modalCartButton");
const closeModal = document.getElementById("closeModal");

let currentProduct = null;

function openProduct(id){

    currentProduct = products.find(p => p.id === id);

    modalImage.src = currentProduct.image;
    modalTitle.textContent = currentProduct.name;
    modalDescription.textContent = currentProduct.description;
    modalPrice.textContent = currentProduct.price + " грн";

    modal.classList.add("active");

}

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

});

modalCartButton.addEventListener("click",()=>{

    addToCart(currentProduct.id);

});