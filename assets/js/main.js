const allproductsBTN = document.querySelector("#allproductsBTN")
const productsopenmenu = document.querySelector(".productsopenmenu")
allproductsBTN.addEventListener('click' , (e) => {
    productsopenmenu.classList.toggle('active')
})




const maincontentcol = document.querySelector('.products .maincontentcol');
const filtersBTN = document.querySelector('#filtersBTN');
const productscols = document.querySelectorAll('.products .maincontentcol .productsdiv .col-md-6');
function Filter () {
    
    if(window.innerWidth > 992){
        if(maincontentcol.classList.contains('active')){
            for(let i = 0 ; i < productscols.length; i++ ){
                productscols[i].classList.remove('col-lg-3')
                productscols[i].classList.add('col-lg-4')
            }
        }
        else{
            for(let i = 0 ; i < productscols.length; i++ ){
                productscols[i].classList.add('col-lg-3')
                productscols[i].classList.remove('col-lg-4')
            }
        }
    }
}
filtersBTN.addEventListener('click' , (e) => {
    if(window.innerWidth > 992){
        maincontentcol.classList.toggle('active')
        Filter();
    }
    else{
        maincontentcol.classList.toggle('active')
    }

})
