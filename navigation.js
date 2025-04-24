// DOM ELEMENTS

const navigation = document.querySelector('.navigation')
document.getElementById('mobile-navigation').addEventListener('click', ()=> {
    navigation.classList.toggle('show-nav');
});