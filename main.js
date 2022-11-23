window.onscroll = () => scrollFunction();
const $goTopBtn = document.querySelector('#gotop');
const $contactBtn = document.querySelector('#home button');

function scrollFunction() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        $goTopBtn.style.display = "block";
    }
    else {
        $goTopBtn.style.display = "none";
    }
}

$goTopBtn.addEventListener('click', (evt) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

$contactBtn.addEventListener('click', (evt) => {
    document.querySelector('#contact').scrollIntoView();
})

