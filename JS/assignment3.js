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








