
    function aff(msg){
         const task=` <div class="flex gap-3 w-full p-1 transition-colors items-center">
 <button onclick="chek(this)" class="bg-slate-100 w-10 h-10 rounded-full"> <i class="fa-solid fa-check text-xl text-slate-100"></i></button>
 <p class="grow">${msg}</p>
 <div class="gap-1">
    <button onclick="updateask(this)" class="  hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-green-600" border bg-white transition-colors " ><i class="fa-solid fa-pen"></i></button>
  <button class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-green-600 border bg-white transition-colors " onclick="deleteask(this)"><i class="fa-solid fa-trash"></i></button>
 </div>
</div>`
return task;
    }

function add(){
    const inp=document.querySelector('input');
  const taskadd=document.querySelector('.taskadd');
      taskadd.innerHTML+=aff(inp.value); 
      inp.value='';

}
function deleteask(target){
    target.parentElement.parentElement.remove()
}
function updateask(target){
  
    const text = target.parentElement.previousElementSibling.textContent;
 target.parentElement.previousElementSibling.innerHTML=`<input type="text" class="update-input" onblur="saveinp(this)" value="${text}"/>`
}
function saveinp(target){
target.parentElement.innerHTML=` <p class="grow">${target.value}</p>`
}
function chek(target){
    if(target.classList.contains('bg-slate-100')){
        target.classList.remove('bg-slate-100')
 target.classList.add('bg-green-600')
 target.children[0].classList.remove('bg-slate-100')
 target.children[0].classList.add('text-white')
    }
    else{
        target.classList.remove('bg-green-600')
 target.classList.add('bg-slate-100')
 target.children[0].classList.remove('text-white')
 target.children[0].classList.add('bg-slate-100')
    }
 
}