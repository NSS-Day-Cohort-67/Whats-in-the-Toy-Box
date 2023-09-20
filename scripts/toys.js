//responsible for handling a list of toys 
//define a function that returns html
//declare a variable set equal to an empty string
//fetch data from our API
//iterate through the array to display a list of toy names
//return html 

// const toysData = await fetch("http://localhost:8088/toys")
// const toys = await toysData.json()
// console.log(toys)


export const ToysHTML = async () => {

    let toysHTML = `<section class="toys">`

const toysData = await fetch("http://localhost:8088/toys?_expand=manufacturer&_expand=category")
const toys = await toysData.json()

    toys.map((toy) => {
        toysHTML += `<article class="toy">
        <h3>${toy.name}</h3>
        <div>${toy.manufacturer.name}</div>
        <div>${toy.category.name}</div>
        <div>${toy.purchaseDate}</div>
        <div>${toy.note}</div>
        </article>
        `
    })
    toysHTML += `</section>`
    return toysHTML
}
