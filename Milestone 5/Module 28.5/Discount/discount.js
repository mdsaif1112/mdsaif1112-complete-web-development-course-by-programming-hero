document.getElementById('submit__btn').addEventListener('click', function(){
    // Step 1: get real price
    const realPrice = getRealPriceNumber('price__output');
    // Step 2: get Discount Price
    const discountPrice = calculateDiscountPrice(realPrice, 30)
    // Step 3: Get Coupon input Field Element by Id
    const couponInput = document.getElementById('coupon__input');
    // step 4: Varify Coupon Code
    if(couponInput.value !== 'DISC30'){
        // Step 5: If coupon code is invalid, set real price to discount price output element
        setOutputValue('discountPrice__output', realPrice)
        return
    }
    // Step 6: Set discount Price to Discount Price Output Element
    setOutputValue('discountPrice__output', discountPrice)
    // Step 7: Clear Input Field
    couponInput.value = ''
})


// returns real price as number
function getRealPriceNumber(outputId) {
    const realPriceElement = document.getElementById(outputId);
    const realPriceString = realPriceElement.innerText;
    const realPriceNumber = parseFloat(realPriceString);
    return realPriceNumber;
}

// returns discount price
function calculateDiscountPrice(realPrice, discountPercentage) {
    const discountPrice = realPrice - (realPrice/100)*discountPercentage;
    return discountPrice;
}

// set a value to an output element
function setOutputValue(outputId, outputValue){
    const OutputElement = document.getElementById(outputId);
    OutputElement.innerText = outputValue;
}
