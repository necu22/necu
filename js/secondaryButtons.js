let products = document.getElementsByClassName('product');

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', productDescription);
}

function productDescription(event) {
    let productName = event.target;
    window.location = 'product.html?productName=' + productName.alt;
}

let buttonTop = document.getElementById('buttonTop');

window.onscroll = function() {
    if (document.documentElement.scrollTop > 800) {
        buttonTop.classList.add('show');
    }
    else {
        buttonTop.classList.remove('show');
    }
};

buttonTop.addEventListener("click", scrollToTop);

function scrollToTop(event) {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let goBackButton = document.getElementById('goBackButton');
if(goBackButton) {
    goBackButton.addEventListener('click', goBack)

    function goBack(event) {
        window.history.back();
    }
}
