const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL' 
    })

    return newValue
}

function showAll(productArray) {
    let myLi = ''
    productArray.forEach((product) => {
        myLi += ` 
            <li>
                <img src=${product.src}>
                <p class="item-name">${product.name}</p>
                <p>R$ ${formatCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)


    list.innerHTML = ` 
         <li>
            <p>O valor total da sua compra é de R$ ${formatCurrency(totalValue)}</p>
         </li>
     `

}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterAll.addEventListener('click', filterAllItems)