const $body= document.querySelector('body');
const $selectColor=document.querySelector('#cajacolores');

$selectColor.addEventListener('change', (e) =>{
if(e.target.value === 'black'){
    $body.className='';
    $body.classList.add('black');   
}else if(e.target.value === 'green'){
    $body.className='';
    $body.classList.add('green');  
}else if(e.target.value === 'blue'){
    $body.className='';
    $body.classList.add('blue'); 
}
});