let productsObject = {}
if (localStorage.products) {
    productsObject = JSON.parse(localStorage.products)
}


const addProduct = () => {
    const productName = document.getElementById('productName').value
    const productQuantity = document.getElementById('productQuantity').value

    document.getElementById('productName').value = ''
    document.getElementById('productQuantity').value = ''

    showProducts(productName, productQuantity);
}


const showProducts = (productName, productQuantity) => {


    if(productName !== '' && productQuantity !== ''){
        
        const productKey = productName
        const productValue = parseInt(productQuantity)
        productsObject[productKey] = productValue
        const productsStringified = JSON.stringify(productsObject)
        localStorage.setItem('products', productsStringified)
        setProductInitialDetails()

    } else{
        alert('Please input Product Details')
    }
}

function setProductInitialDetails(){
    const container = document.getElementById('product-container')
    container.innerHTML = ''
    if (localStorage.products) {
        const products = JSON.parse(localStorage.products)
        for (const key in products) {
            if (Object.hasOwnProperty.call(products, key)) {
                const quantity = products[key];

                const li = document.createElement('li')
                li.innerText = `${key}: ${quantity}`
                container.appendChild(li)
            }
        }
    }
}

setProductInitialDetails()