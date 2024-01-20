// Array of product objects using ES6 features
const products = [
    { id: 1, name: "Magic Wand", price: 10.00, description: "Unleash your wizardry skills." },
    { id: 2, name: "Invisibility Cloak", price: 20.00, description: "Disappear in style!" },
    { id: 3, name: "Time Turner", price: 30.00, description: "Turn back time with a twist." }
];

let cart = [];

// DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');

    // Function to render products
    const renderProducts = () => {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name} - $${product.price}</h3>
                <p>${product.description}</p>
            `;
            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.addEventListener('click', () => addToCart(product.id));
            productDiv.appendChild(addButton);
            productList.appendChild(productDiv);
        });
    };

    // Function to add a product to the cart
    const addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        renderCart();
    };

    // Function to delete a product from the cart
    const deleteItem = (productId) => {
        const index = cart.indexOf(cart.find(p => p.id === productId));
        cart.splice(index, 1)
        renderCart();
    };

    // Function to render the cart
    const renderCart = () => {
        let total = 0; // initialize total to zero
        cartList.innerHTML = ''; // Clear the cart list
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cartItem';
            cartItem.textContent = `${item.name} - $${item.price}  `;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = ' Remove';
            removeBtn.addEventListener('click', () => deleteItem(item.id));
            cartItem.appendChild(removeBtn);

            cartList.appendChild(cartItem);
            total += item.price // add each item price in total
        });

        if  (total !== 0) {
            // display total in h3 element
            const totalPrice = document.createElement('h3');
            totalPrice.className = 'totalPrice';
            totalPrice.textContent = `Total - $${total}`;
            cartList.appendChild(totalPrice);
        }
    };

    renderProducts();
});
