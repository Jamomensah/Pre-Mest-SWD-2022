const h2 = document.querySelector('h2');

const increase = document.querySelector('.increase');
let value = 0;


increase.addEventListener('click', ()=> {
    value += 1;
    h2.textContent = value;
    h2.style.color = 'green'
}
)

const decrease= document.querySelector('.decrease')
decrease.addEventListener('click', ()=> {
    value -= 1;
    h2.textContent = value;
    h2.style.color = 'red'
}
)

const reset= document.querySelector('.reset')
reset.addEventListener('click', ()=> {
    value = 0;
    h2.textContent = 0;
    h2.style.color = 'black'
}
)


// const increase=document.querySelector('increase')
// const decrease= document.querySelector('decrease')
// const reset= document.querySelector('reset')
// let value=i 
// let i=0

// for(i=0; i+=1; i++){
//    alert(i);
// } elseif(i-=1; i--){
//     alert(i);
// }else{
//     alert(i=0);
// }






