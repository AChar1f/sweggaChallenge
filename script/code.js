function totalCal() {
    let fPrice = document.querySelector('#fPrice').innerHTML
    let mPrice = document.querySelector('#mPrice').innerHTML
    
    let femaleQuantity = document.querySelector('#fquantityInput').value
    let maleQuantity = document.querySelector('#mquantityInput').value
    
    let fTotal = fPrice * femaleQuantity
    let mTotal = mPrice * maleQuantity
    let total = fTotal + mTotal
    
    document.querySelector('#output1').innerHTML = (`R ${fTotal.toFixed(2)}`)
    document.querySelector('#output2').innerHTML = (`R ${mTotal.toFixed(2)}`)
    document.querySelector('#tOutput').innerHTML = (`R ${total.toFixed(2)}`)
}
