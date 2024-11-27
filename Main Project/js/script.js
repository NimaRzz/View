let btn1 = document.getElementById(`btnradio1`);
let btn2 = document.getElementById(`btnradio2`);
let btn3 = document.getElementById(`btnradio3`);
let btn4 = document.getElementById(`btnradio4`);

let items1 = document.getElementById(`items1`);
let items2 = document.getElementById(`items2`);
let items3 = document.getElementById(`items3`);
let items4 = document.getElementById(`items4`);

btn1.addEventListener(`click`, btn1Items); //seda nazani tabe ro chi mishe?
function btn1Items(){
    
    items1.style.display=`flex`;
    items2.style.display=`none`;
    items3.style.display=`none`;
    items4.style.display=`none`;

    
}

btn2.addEventListener(`click`, btn2Items); //seda nazani tabe ro chi mishe?
function btn2Items(){
    items1.style.display=`none`;
    items2.style.display=`flex`;
    items3.style.display=`none`;
    items4.style.display=`none`;
}

btn3.addEventListener(`click`, btn3Items); //seda nazani tabe ro chi mishe?
function btn3Items(){
    items1.style.display=`none`;
    items2.style.display=`none`;
    items3.style.display=`flex`;
    items4.style.display=`none`;
}

btn4.addEventListener(`click`, btn4Items); //seda nazani tabe ro chi mishe?
function btn4Items(){
    items1.style.display=`none`;
    items2.style.display=`none`;
    items3.style.display=`none`;
    items4.style.display=`flex`;
}





