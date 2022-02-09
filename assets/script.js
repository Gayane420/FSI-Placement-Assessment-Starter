// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Gayane Papikyan" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})


function updateQuantity(displayQuantity) {
    let quantity = document.querySelector("#qty-gb")
    quantity.textContent = displayQuantity 
}

const quantUp = document.querySelector("#add-gb");

gbPlusBtn.addEventListener("click", function (e) {
      //if (gb >= 0) 
      console.log(gb)
        gb++;
        console.log(gb)
        updateQuantity(gb)
    
})

const gbMinusBtn = document.querySelector("#minus-gb")
gbMinusBtn.addEventListener("click", function (e) {
    if (gb <=0) 
    console.log(gb)
    gb--;
    console.log(gb)
    updateQuantity(gb)
})

const ccPlusBtn = document.querySelector("#add-cc")
ccPlusBtn.addEventListener("click", function (e) {
    if (cc >= 0)
    console.log(cc)
    cc++;
    updateQuantity(cc)
})

const ccMinusBtn = document.querySelector("#minus-cc")
ccMinusBtn.addEventListener("click", function (e) {
    if (cc <= 0)
    console.log(cc)
    cc--;
    updateQuantity(cc)
})

let total = 0
function updatetotal(displaytotal) {
    let total = document.querySelector("#qty-total")
    total.textContent = displaytotal
}

// TODO: Hook up event listeners for the rest of the buttons