
const $text=document.querySelector('#texto')
const $boton=document.querySelector('#boton');
const $lista=document.querySelector('#lista');

$boton.addEventListener('click',()=>{
  const tex=texto.value;  
  const list= document.createElement('li');
  //list.textContent='elemento';
  list.textContent= tex;
  $lista.appendChild(list);

});