let products = [];
function addProduct() {
    let name = document.getElementById("product-name").value;
    let price = document.getElementById("product-price").value;
    if (name && price) {
        products.push({ name, price });
        localStorage.setItem("products", JSON.stringify(products));
        alert("Товар добавлен!");
    }
}

window.onload = function() {
    let storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        products = JSON.parse(storedProducts);
        let productContainer = document.getElementById("products");
        if (productContainer) {
            products.forEach(p => {
                let item = document.createElement("div");
                item.innerHTML = `<p>${p.name} - ${p.price} руб.</p>`;
                productContainer.appendChild(item);
            });
        }
    }
};
