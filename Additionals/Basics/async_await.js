
const bgcolor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}
const rainbow = async () => {
    await bgcolor('red', 1000);
    await bgcolor('green', 1000);
    await bgcolor('orange', 1000);
    await bgcolor('white', 1000);
}
rainbow();
