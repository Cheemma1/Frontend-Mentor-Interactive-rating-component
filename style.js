

let intro = document.querySelector('.intro');
let  lastSec = document.querySelector('.thankyou');
let opt = document.querySelectorAll('.opt');
let select =document.querySelector('#select');
let submit = document.querySelector('#submitbtn');
let selected;

opt.forEach(function(el){
el.addEventListener('click', function(){
selected=this.textContent;
});
});
submit.addEventListener('click',()=>{
 intro.style.display="none";
lastSec.style.display="flex";
select.textContent=`you selected ${selected || '0'} out 0f 5`

});