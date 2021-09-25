const $b=document.querySelector('#b');

$b.addEventListener('mouseover', () =>{
console.log('me presionaste');
});

const $inpText=document.querySelector('#text');
$inpText.addEventListener('keyup',(e)=>{
  console.log(e.target.value);
});