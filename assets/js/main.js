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
let open = true;
filtersBTN.addEventListener('click' , (e) => {
    if(open == true){
        filtersBTN.innerHTML = '<i class="fas fa-times"></i> Close';
        open = false;
    }
    else if(open == false){
        filtersBTN.innerHTML = '<i class="fas fa-sliders-h"></i> Filters';
        open =true;
    }
    if(window.innerWidth > 992){
        maincontentcol.classList.toggle('active')
        Filter();
    }
    else{
        maincontentcol.classList.toggle('active')
    }

})


const allproductsBTNmob = document.querySelector('#allproductsBTNmob');
const productsopenmenumobile = document.querySelector('.productsopenmenumobile');

allproductsBTNmob.addEventListener('click' , (e) => {
    productsopenmenumobile.classList.toggle('active');
})

const hamburgerbuttonopen = document.querySelector('.hamburgericondiv button');
const hamburgerbuttonclose = document.querySelector('.hamburgericonclosediv button');
const mobileopenmenu = document.querySelector('.mobileopenmenu');

hamburgerbuttonopen.addEventListener('click' , (e) => {
    mobileopenmenu.classList.add('active');
})
hamburgerbuttonclose.addEventListener('click' , (e) => {
    mobileopenmenu.classList.remove('active');
})


const populardivmob = document.querySelector('.mobileheader .popularsmob');
const populardiv = document.querySelector('.headertop .populars');
document.addEventListener('click' , (e) => {
    if(e.target.classList.contains('searchinputdiv') || e.target.classList.contains('searchbutton') || e.target.classList.contains('searchinput') || e.target.classList.contains('searchBTN')){
        populardiv.classList.add('active')
        populardivmob.classList.add('active')
    }
    else{
        populardiv.classList.remove('active')
        populardivmob.classList.remove('active')
    }
})

const fliterdivopendownmenubtns = document.querySelectorAll('.filterdiv .opendownmenu');

for(let i = 0 ; i < fliterdivopendownmenubtns.length;i++){
    fliterdivopendownmenubtns[i].addEventListener('click' , (e) => {
        fliterdivopendownmenubtns[i].classList.toggle('deactive');
        fliterdivopendownmenubtns[i].parentElement.querySelector('ul').classList.toggle('deactive');

    })
}