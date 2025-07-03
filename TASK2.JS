const products = [
  {
    name: "Ballpoint Pen Pack",
    price: 100,
    image: "images/pen.jpg"
  },
  {
    name: "Notebook Set",
    price: 200,
    image: "images/notebooks.jpg"
  },
  {
    name: "Stapler Combo",
    price: 50,
    image: "images/staplers.jpg"
  },
  {
    name: "Highlighter Set",
    price: 129,
    image: "images/highlighters.jpg"
  }
];

const productList = document.getElementById("products");
const cartItems = document.getElementById("cart-items");

function renderProducts() {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

function addToCart(name, price) {
  const item = document.createElement("li");
  item.textContent = `${name} - ₹${price}`;
  cartItems.appendChild(item);
}

renderProducts();
