const contents = [
    {
        name: 'iphone x',
        about: 'ios 11 makes iPhone so smart, it learns from you',
        url: './images/slides/slide-1-870x345.jpg'
    },
    {
        name: 'smart tv',
        about: 'ios 11 makes iPhone so smart, it learns from you',
        url: './images/slides/slide-2-870x345.jpg'
    },
    {
        name: 'IPAD',
        about: 'ios 11 makes iPhone so smart, it learns from you',
        url: './images/slides/slide-3-870x345.jpg'
    }
];

// DOM ELEMENTS

const contentName = document.querySelector('.content-name');
const aboutContent = document.querySelector('.about-content');
const slideImage = document.querySelector('.slide-container');
const shopBtn = document.querySelector('.shop-btn');
const contentInfo = document.querySelector('.content-info')
let itemIndex = 0;
function animateName(){
    contentName.animate(
    [
        {transform: "translateY(-30px)", opacity: 0},
        {transform: "translateY(0px)", opacity: 1},
    ],
    {
        duration: 2500,
        easing: 'ease-out',
        fill: 'forwards'
    }
);
}
function animateShopBtn(){
    shopBtn.animate(
    [
        {transform: "translateY(30px)", opacity: 0},
        {transform: "translateY(0px)", opacity: 1},
    ],
    {
        duration: 2500,
        easing: 'ease-out',
        fill: 'forwards'
    }
);
}
function animateContent(){
    contentInfo.animate(
        [
            {opacity: 0 },  
            {opacity: 1, offset: 0.3 }, 
            {opacity: 1, offset: 0.7 },
            { opacity: 1 } 
        ],
        {
            duration: 5000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
}
function updateContent(){
    const item = contents[itemIndex];
    contentName.textContent = item.name;
    aboutContent.textContent = item.about;
    slideImage.style.backgroundImage = `url("${item.url}")`;
    animateName();
    animateShopBtn();
    animateContent();
    itemIndex = (itemIndex + 1) % contents.length;
}

updateContent();
setInterval(updateContent, 5000);