const products = [
  { id: 1, name: "Gold Necklace", price: 15000 },
  { id: 2, name: "Diamond Ring", price: 25000 },
  { id: 3, name: "Silver Bracelet", price: 5000 },
  { id: 4, name: "Pearl Earrings", price: 8000 }
];

let cart = [];

function renderProducts() {
  const productContainer = document.getElementById("products");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = total;
}

renderProducts();