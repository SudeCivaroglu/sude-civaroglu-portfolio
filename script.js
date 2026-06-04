const menuBtn = document.querySelector('#menuBtn');
const navLinks = document.querySelector('#navLinks');
const themeBtn = document.querySelector('#themeBtn');
const themeIcon = document.querySelector('#themeIcon');

menuBtn.addEventListener('click', function(){
    navLinks.classList.toggle('active');
});

themeBtn.addEventListener('click', function(){

    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        themeIcon.src = 'assets/svg/moon.svg';
    }else{
        themeIcon.src = 'assets/svg/sun-fill.svg';
    }

});