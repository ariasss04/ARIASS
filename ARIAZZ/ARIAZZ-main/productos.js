const PRODUCTS = [
    { id: 1, title: "Camisa NSQK Midleez", price: 350.00, image: "img/camisa1.png" },
    { id: 2, title: "Hoodie AQUIHAYAQUIHAY", price: 700.00, image: "img/camisa2.png" },
    { id: 3, title: "Camisa ZIZZY AQUIHAYAQUIHAY", price: 400.00, image: "img/camisa3.png" },
    { id: 4, title: "Camisa SAYONARA", price: 250.00, image: "img/camisa4.png" },
    { id: 5, title: "Camisa NMBDN", price: 250.00, image: "img/camisa5.png" },
    { id: 6, title: "Camisa NSQK Collage", price: 150.00, image: "img/camisa6.png" },
    { id: 7, title: "Camisa RODRIGO Nsqk", price: 130.00, image: "img/camisa7.png" },
    { id: 8, title: "Jersey Real Madrida Nsqk", price: 500.00, image: "img/camisa8.png" },
    { id: 9, title: "Gorra Dickies", price: 160.00, image: "img/gorrass.png" },
    { id: 10, title: "Playera DICKIES", price: 350.00, image: "img/camisa9.png" }
];

const PRODUCT_GRID = document.querySelector("#product-grid");

// Mostrar productos en la página
PRODUCTS.map((product) => {
    PRODUCT_GRID.innerHTML += `
        <div class="product-item">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <a href="#" class="addCartBtn" data-id="${product.id}">Agregar al carrito</a>
        </div>
    `;
});

let cart = [];

const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
};

loadCartFromLocalStorage();

const ButtonsAddCart = Array.from(document.querySelectorAll(".addCartBtn"));

ButtonsAddCart.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        
        const productId = parseInt(e.target.getAttribute("data-id"));
        const productToAdd = PRODUCTS.find(product => product.id === productId);

        const productInCart = cart.find(item => item.id === productId);
        if (productInCart) {
            productInCart.quantity += 1;
        } else {
            cart.push({...productToAdd, quantity: 1});
        }

        saveCartToLocalStorage();
        alert(`${productToAdd.title} ha sido agregado al carrito!`);
    });
});
