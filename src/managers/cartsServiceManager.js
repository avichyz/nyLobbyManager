
//const apiKey = '98dc9cb7';
const baseAddress = "https://infinite-springs-68482.herokuapp.com/carts";
//const baseAddress = "http://localhost:8081/carts";

export async function getCarts() {
    let carts = await fetch(`${baseAddress}`);
    carts = await carts.json();
    return carts.map(cart => ({
            id: cart._id,
            cartId: cart.cartId,
            buyerId: cart.buyerId,
            batteryPercentage: cart.batteryPercentage,
            longitude: cart.longitude,
            latitude: cart.latitude,
            info: cart.info
    }))
}

export async function getCartById(id) {
    let cartData = await fetch(`${baseAddress}/${id}`);
    cartData = await cartData.json();
    return ({
        id: cartData._id,
        cartId: cartData.cartId,
        buyerId: cartData.buyerId,
        batteryPercentage: cartData.batteryPercentage,
        longitude: cartData.longitude,
        latitude: cartData.latitude,
        info: cartData.info
    })
}

export async function updateCart(cart, _id) {
    const rawResponse = await fetch(`${baseAddress}/${_id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    });

    const updatedData =  await rawResponse.json();
    return updatedData;
}

export async function saveNewCart(cart) {
    const rawResponse = await fetch(`${baseAddress}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    });

    const newCart = await rawResponse.json();
    return newCart;
}

