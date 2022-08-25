const colours =['f1f5f8', 'blue','red', 'green', 'aqua','yellow', 'navy','maroon', 'black', 'white', 'lime', 'pink', 'purple'];
const color =document.querySelector('.color');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () =>{
  const random = getRandomNumber();
  document.body.style.backgroundColor = colours[random]
  color.textContent = colours[random]
  console.log(random)
})

function getRandomNumber(){
  return Math.floor(Math.random() * colours.length);
}

 

