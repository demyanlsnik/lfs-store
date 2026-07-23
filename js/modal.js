const modal = document.getElementById("productModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalDetails = document.getElementById("modalDetails");
const modalCartButton = document.getElementById("modalCartButton");
const closeModal = document.getElementById("closeModal");

function openModal(product){

    modalImage.src = product.image;
    modalImage.alt = product.name;

    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price + " грн";

    modalDetails.innerHTML = "";

    if(product.details){

        product.details.forEach(detail => {

            modalDetails.innerHTML += `<li>${detail}</li>`;

        });

    }

    modalCartButton.onclick = () => {

        addToCart(product.id);

    };

    modal.classList.add("active");

}

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});