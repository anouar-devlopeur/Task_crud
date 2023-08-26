
    function aff(msg){
         const task=` <div class="flex gap-3 w-full p-1 transition-colors items-center">
 <button class="bg-blue-100 w-10 h-10 rounded-full"> <i class="fa-solid fa-check text-xl"></i></button>
 <p class="grow">${msg}</p>
 <div class="gap-1">
    <button class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-green-600" border bg-white transition-colors "><i class="fa-solid fa-pen"></i></button>
  <button class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-green-600 border bg-white transition-colors "><i class="fa-solid fa-trash"></i></button>
 </div>
</div>`
return task;
    }

function add(){
    const inp=document.querySelector('input').value;
  const taskadd=document.querySelector('.taskadd');
      taskadd.innerHTML+=aff(inp); 

}