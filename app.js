document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Old Money T-shirt", price: 400, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Luxury Pants", price: 600, image: "https://via.placeholder.com/150" },
  ];

  const container = document.getElementById("products");
  if (container) {
    products.forEach(product => {
      const el = document.createElement("div");
      el.className = "product";
      el.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price} EGP</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      container.appendChild(el);
    });
  }
});

function addToCart(productId) {
  alert("Product " + productId + " added to cart!");
}