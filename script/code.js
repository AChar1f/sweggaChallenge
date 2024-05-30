
function totalCal() {
    let fPrice = document.querySelector('#fPrice').innerHTML
    let mPrice = document.querySelector('#mPrice').innerHTML
    
    let femaleQuantity = document.querySelector('#fquantityInput').value
    let maleQuantity = document.querySelector('#mqantityInput').value
    
    let fTotal = fPrice * femaleQuantity
    let  mTotal = mPrice * maleQuantity
    let total = fTotal + mTotal
    document.querySelector('#output1').innerHTML = fTotal
    document.querySelector('#output2').innerHTML = mTotal
    document.querySelector('#tOutput').innerHTML = total
}
