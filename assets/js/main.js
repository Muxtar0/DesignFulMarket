const allproductsBTN = document.querySelector("#allproductsBTN")
const productsopenmenu = document.querySelector(".productsopenmenu")
allproductsBTN.addEventListener('click' , (e) => {
    productsopenmenu.classList.toggle('active')
})