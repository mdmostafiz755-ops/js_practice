const productHandle = () => {
    const productE = document.querySelector('#product');
    const proV = productE.value;
    const quantityE = document.querySelector('#quantity');
    const quanV = parseInt(quantityE.value);
    //console.log('product add',proV,quanV);
    showProduct(proV, quanV);
    addToCart(proV, quanV);
    productE.value = "";
    quantityE.value = "";
}

const getCart = () => {
    let cart = {};
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }
    return cart;
}

const addToCart = (product, quantity) => {
    const cart = getCart();
    if (cart[product])
        cart[product] = cart[product] + quantity;
    else
        cart[product] = quantity;
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
}

const showProduct = (product, quantity) => {

    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    const container = document.querySelector('#product-container');
    container.appendChild(li);
}


const Clear = () => {
    localStorage.clear();
}


const displayFromLocal=()=>{
    const cart=getCart();

    for(const pro in cart){
        const quan=cart[pro];
        console.log(pro);
        showProduct(pro,quan);
    }
}
displayFromLocal();