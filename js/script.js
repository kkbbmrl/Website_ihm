document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', () => {
            alert(`You clicked on ${product.querySelector('p').textContent}`);
        });
    });
});