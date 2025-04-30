
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
    productImage.title = product.name;

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
let cartItemNumber = 0;

// Load previous cart from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
document.querySelectorAll('.items-number').forEach(item => {
    item.innerText = cartItems.length;
});

// Display stored items in cart on load

cartItems.forEach(item => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('cart-item');
    const cartItemImage = document.createElement('img');
    cartItemImage.src = item.image;
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    const infoCont = document.createElement('div');
    infoCont.classList.add('info-cont');
    const cartItemName = document.createElement('p');
    cartItemName.textContent = item.name;
    const decreaseItem = document.createElement('span');
    decreaseItem.classList.add('decrease-item');
    decreaseItem.textContent = '-';
    itemCount = document.createElement('button');
    itemCount.textContent = '1';
    itemCount.classList.add('item-count');
    const increaseItem = document.createElement('span');
    increaseItem.classList.add('increase-item');
    increaseItem.textContent = '+';
    const itemAmount = document.createElement('p');
    itemAmount.classList.add('item-amount');
    itemAmount.textContent = item.amount;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    //APPENDING ITEMS
    itemContainer.appendChild(cartItemImage);
    itemContainer.appendChild(itemInfo);
    itemInfo.appendChild(infoCont);
    infoCont.appendChild(cartItemName);
    infoCont.appendChild(decreaseItem);
    infoCont.appendChild(itemCount);
    infoCont.appendChild(increaseItem);
    infoCont.appendChild(itemAmount);
    itemInfo.appendChild(removeBtn);
    
    document.querySelector('.cart-items').appendChild(itemContainer);

});

// cartItems.forEach(item => {
//     document.querySelectorAll('.shopping-cart-items').forEach(cartItem => {
//         let itemContainer = document.createElement('p');
//         itemContainer.innerText = `Name: ${item.name}  Amount: ${item.amount}`;
//         cartItem.appendChild(itemContainer);
//     });
// });


document.querySelectorAll('.fa-shopping-cart').forEach(cart => {
    let counter = 0;
    cart.addEventListener('click', function(event) {
        const product = event.target.closest('.each-product');
        if (counter !== 1) {
            const itemPickedName = product.querySelector('.product-name').textContent;
            const itemPickedAmount = product.querySelector('.product-amount').textContent;
            const itemPickedImage = product.querySelector('img').src;

            // Create item object
            let newItem = {
                name: itemPickedName,
                amount: itemPickedAmount,
                image: itemPickedImage
            };

            // Save to local array and localStorage
            cartItems.push(newItem);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            

            // Create and add item to Shopping Cart
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('cart-item');
            const cartItemImage = document.createElement('img');
            cartItemImage.src = itemPickedImage;
            const itemInfo = document.createElement('div');
            itemInfo.classList.add('item-info');
            const infoCont = document.createElement('div');
            infoCont.classList.add('info-cont');
            const cartItemName = document.createElement('p');
            cartItemName.textContent = itemPickedName;
            const decreaseItem = document.createElement('span');
            decreaseItem.classList.add('decrease-item');
            decreaseItem.textContent = '-';
            const itemCount = document.createElement('button');
            itemCount.textContent = '1';
            itemCount.classList.add('item-count');
            const increaseItem = document.createElement('span');
            increaseItem.classList.add('increase-item');
            increaseItem.textContent = '+';
            const itemAmount = document.createElement('p');
            itemAmount.classList.add('item-amount');
            itemAmount.textContent = itemPickedAmount;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            
            //APPENDING ITEMS
            itemContainer.appendChild(cartItemImage);
            itemContainer.appendChild(itemInfo);
            itemInfo.appendChild(infoCont);
            infoCont.appendChild(cartItemName);
            infoCont.appendChild(decreaseItem);
            infoCont.appendChild(itemCount);
            infoCont.appendChild(increaseItem);
            infoCont.appendChild(itemAmount);
            itemInfo.appendChild(removeBtn);
            document.querySelector('.cart-items').appendChild(itemContainer);


            //UPDATE ITEMS NUMBER

            document.querySelectorAll('.items-number').forEach(item => {
                item.innerText = cartItemNumber;
                cartItemNumber = cartItems.length;
            });


            //Update Counter
            counter = 1;

            //Change cart color after click  
            event.target.style.color = "black";
            const cartTooltip = event.target.nextElementSibling;
            cartTooltip.setAttribute("style", "background-color: red; width: 125px; left: 1px")
            cartTooltip.textContent = 'Remove from Cart';
            
        }

        // REMOVE DEFAULT Shopping Cart Message
        // document.querySelectorAll('.cart-empty-message').forEach(cart => {
        //     cart.innerText = 'SHOPPING CART';
        // });
    });
});





//Displaying items on shopping cart

document.querySelectorAll('.shopping-cart').forEach( cart => {
    cart.addEventListener('click', function(){
        const cartEmptyMessage = cart.querySelector('.shopping-cart-items');
        if (cartItems.length === 0){
            cartEmptyMessage.classList.toggle('clicked-shopping-cart');
        }else
            document.querySelector('.side-bar').style.display = 'block';
    });
});

localStorage.removeItem('cart');
console.log(cartItems);

// CLOSE SIDEBAR

document.querySelector('.close-btn').addEventListener('click', function(){
    document.querySelector('.side-bar').style.display = 'none';
})