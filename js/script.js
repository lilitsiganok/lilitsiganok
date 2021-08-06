const tabsArr = document.querySelectorAll(".tabs-title");
const contentElementArr = document.querySelectorAll(".tabs-content-item");
document.querySelector(".tabs").addEventListener("click", makeActive);

function makeActive(event) {
   
    for(let i=0; i<tabsArr.length; i++) {
        if (tabsArr[i]===event.target){
            event.target.classList.add("active");
            contentElementArr[i].classList.add("tabs-content-active");
        }else{
            tabsArr[i].classList.remove("active");
            contentElementArr[i].classList.remove("tabs-content-active");
        }
    }
}

let counter = 12;
let tabsItem = document.querySelectorAll(".section-work li");
let btn = document.querySelector('.btn-load');

console.log(tabsItem);


function showItemsByCategory(item){
    console.log(tabsItem);

    for(let i = 0; i < counter; i++){
        if(tabsItem[i].dataset.tab){
            if (tabsItem[i].dataset.tab === item || item==='all'){
                tabsItem[i].classList.remove('hide')
            }else{
                tabsItem[i].classList.add('hide')
            }
        }
        console.log(tabsItem[i].dataset.tab);
        
    }
}
const tabsBtn = document.querySelector('.amazing-tabs');
let filterCategory = 'all';
tabsBtn.addEventListener('click', function(event){
if(event.target){
    filterCategory = event.target.dataset.tab;
    showItemsByCategory(filterCategory);
}
});

btn.addEventListener('click', function() {
    counter += 12;
    setTimeout(()=>{
        if (counter ===24){
        btn.classList.add('hide'); 
    }
showItemsByCategory('all');
}, 2000)
})

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:(4),
        slidesToScroll: 1,
        focusOnSelect: true,
        speed:1000,
        infinite: true,
        asNavFor:'.sliderbig',
    });
    $('.sliderbig').slick({
        arrows:false,
        fade:true,
        asNavFor:'.slider',
    })
});



