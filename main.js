const input =  document.getElementById('in-txt');
const main = document.querySelector('.main');
const btn = document.querySelector('#btn-main');
const close = document.querySelector('.closed');
const listsec = document.querySelector('.list');
btn.addEventListener('click' , () =>{
   if(input.value == ""){
    alert("Field Required...");
   }else{
    var listadd = document.createElement("li");
    
    listadd.innerHTML = input.value;
    listsec.appendChild(listadd)
   var delted = document.createElement("button")
   delted.classList.add("del")
   delted.innerHTML = "Delete"
   listadd.appendChild(delted);
   delted.addEventListener('click' , () => {
    listadd.style.display = "none"
   })
}
   input.value = ""
   
})
function closeme(){
    main.style.display = "none"
}
close.addEventListener('click' , closeme);