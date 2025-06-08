const botonesAnadir = document.querySelectorAll('.item-producto button');


botonesAnadir.forEach(boton => {

    boton.addEventListener('click', () => {
        alert('¡Tu producto se ha añadido correctamente al carrito!');

    });
});

const carrito = document.querySelector('.carrito');

let numproductos = 0;


botonesAnadir.forEach(boton => {
    boton.addEventListener('click', () => {
        numproductos += 1;
        carrito.innerHTML = `<h2 id="cart-count">${numproductos}</h2> <img src="../img/carrito-compra.png" alt="Carrito compra">`;
        console.log(numproductos);
    });
});

