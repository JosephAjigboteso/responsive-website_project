// DOM ELEMENTS

const productContainer = document.querySelector('.product-container');

function scrollAmount(){
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200){
        return 400;
    }else if(screenWidth >= 600){
        return (0.465 * screenWidth);
    }else{
        return 382;
    }
}

document.getElementById('left-arrow').addEventListener('click', function(){
    productContainer.scrollBy({left: -scrollAmount(), behavior: 'smooth'});
});

document.getElementById('right-arrow').addEventListener('click', function(){
    productContainer.scrollBy({left: scrollAmount(), behavior: 'smooth'});
});