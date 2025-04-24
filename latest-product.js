
// LATEST PRODUCTS

const latestProducts = [
    
    {
        product: './images/products/product-58-200x200.webp',
        amount: '$120.00 ',
        name: 'Sound Bar with Wireless Subwoofer',
        description: 'Comfort is a very important thing nowadays because it is a c..' 
    },
    {
        product: './images/products/product-55-200x200.webp',
        amount: '$40.00 ',
        name: 'Master Iron with Anti-Drip System',
        description: 'Comfort is a very important thing nowadays because it is a c..' 
    },
    {
        product: './images/products/product-52-200x200.webp',
        amount: '$555.00 ',
        name: '48-inch 1080p 60Hz Smart LED TV',
        description: 'Comfort is a very important thing nowadays because it is a c..' 
    },
    {
        product: './images/products/product-49-200x200.webp',
        amount: '$3000.00 ',
        name: '5-inch 4K Ultra HD Smart LED TV',
        description: 'Comfort is a very important thing nowadays because it is a c..' 
    },
    
];

const productIcons = document.querySelector('.product-icons');

latestProducts.forEach(product => {

    //each product container
    let eachProduct = document.createElement('div');
    eachProduct.classList.add('each-product');

    //Product Image
    let productImage = document.createElement('img');
    productImage.src = product.product;

    //Product Amount
    let productAmount = document.createElement('p');
    productAmount.classList.add('product-amount');
    productAmount.innerText = product.amount;

    //Product Name
    let productName = document.createElement('p');
    productName.classList.add('product-name');
    productName.innerText = product.name;

    //Product Description
    let productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.innerText = product.description;

    //icons   
    const cloneIcons = productIcons.cloneNode(true); 
   


    //APPEND ALL ELEMENTS
    eachProduct.appendChild(productImage);
    eachProduct.appendChild(productAmount);
    eachProduct.appendChild(productName);
    eachProduct.appendChild(productDescription);
    eachProduct.appendChild(cloneIcons);

    //APPEND TO MAIN CONTAINER
    productContainer.appendChild(eachProduct);
});


// Adding Items to SHOPPING CART
// let cartItemNumber = 0;


// document.querySelectorAll('.fa-shopping-cart').forEach(cart  => {
//     let counter = 0;
//     cart.addEventListener('click', function(e){
//     const target = e.target;
//     if(counter != 1){
//         const itemPickedName = target.parentNode.parentNode.previousElementSibling.previousElementSibling.innerText;
//         const itemPickedAmount = target.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
//         let itemContainer  = document.createElement('p');
//         itemContainer.classList.add('shopping-cart-list');
//         itemContainer.innerText = `${itemPickedName}  (${itemPickedAmount})`;
//         document.querySelectorAll('.shopping-cart-items').forEach(cartItem => {
//             cartItem.appendChild(itemContainer);
//         });
//         cartItemNumber +=1;
//         document.querySelectorAll('.items-number').forEach(item => {item.innerText = cartItemNumber;
//     });
//     counter = 1;
//     }
//     console.log(cartItemNumber);
// });   
// });




// Adding Items to SHOPPING CART
let cartItemNumber = 0;

// Load previous cart from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
document.querySelectorAll('.items-number').forEach(item => {
    item.innerText = cartItems.length;
});

// Display stored items in cart on load
cartItems.forEach(item => {
    let itemContainer = document.createElement('p');
    itemContainer.innerText = `Name: ${item.name}  Amount: ${item.amount}`;
    document.querySelectorAll('.shopping-cart-items').forEach(cartItem => {
        cartItem.appendChild(itemContainer);
    });
});

document.querySelectorAll('.fa-shopping-cart').forEach(cart => {
    let counter = 0;

    cart.addEventListener('click', function(e) {
        const target = e.target;

        if (counter !== 1) {
            const itemPickedName = target.parentNode.parentNode.previousElementSibling.previousElementSibling.innerText;
            const itemPickedAmount = target.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText;

            // Create item object
            let newItem = {
                name: itemPickedName,
                amount: itemPickedAmount
            };

            // Save to local array and localStorage
            cartItems.push(newItem);
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Create and add new item element
            let itemContainer = document.createElement('p');
            itemContainer.innerText = `Name: ${itemPickedName}  Amount: ${itemPickedAmount}`;
            document.querySelectorAll('.shopping-cart-items').forEach(cartItem => {
                cartItem.appendChild(itemContainer);
            });

            cartItemNumber = cartItems.length;

            document.querySelectorAll('.items-number').forEach(item => {
                item.innerText = cartItemNumber;
            });

            counter = 1;
        }

        console.log(cartItems);
    });
});



//Displaying items on shopping cart

document.querySelectorAll('.shopping-cart').forEach( cart => {
    cart.addEventListener('click', function(){
        const cartItems = cart.querySelector('.shopping-cart-items');
        cartItems.classList.toggle('clicked-shopping-cart');
    });
});
