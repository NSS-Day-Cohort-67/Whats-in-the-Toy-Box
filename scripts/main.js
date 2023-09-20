import { ToysHTML } from "./toys.js"

const WhatsInTheToyBox = async () => {
    const toysHTML = await ToysHTML()
    return `<h1>What's in the Toy Box?</h1>
    <h2>Toy Inventory</h2>
    ${toysHTML}`
}



document.querySelector('#mainContainer').innerHTML = await WhatsInTheToyBox()