export const countTheCart = (num: number) => {
    const myCartCountLocalStorage = localStorage.getItem("myCartCount");
    if (myCartCountLocalStorage) {
        if (num > 0) {
            const count = JSON.parse(myCartCountLocalStorage) + 1
            localStorage.setItem("myCartCount", JSON.stringify(count));
        }
        else {
            const count = JSON.parse(myCartCountLocalStorage) - 1
            localStorage.setItem("myCartCount", JSON.stringify(count));
        }
    }
    else {
        const count = 1;
        localStorage.setItem("myCartCount", JSON.stringify(count));
    }
}


export const addToCart = (id: string) => {
    const myCartLocalStorage = localStorage.getItem("myCart");
    if (myCartLocalStorage) {
        const myCart = JSON.parse(myCartLocalStorage);
        if (myCart[id]) {
            myCart[id]++;
        } else {
            myCart[id] = 1;
        }
        localStorage.setItem("myCart", JSON.stringify(myCart));
        countTheCart(1)
    } else {
        const cart: { [key: string]: number } = {};
        cart[id] = 1;
        localStorage.setItem("myCart", JSON.stringify(cart));
        countTheCart(1)
    }
};