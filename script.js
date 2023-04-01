const teclas=[...document.querySelectorAll('.num')]

const teclaop=[...document.querySelectorAll(".op")]

const teclaRes=document.querySelector(".res")
const ton=document.getElementById("ton")
const tlimpar=document.getElementById("tlimpar")
const tigual=document.getElementById("tigual")

const aba=document.getElementById("aba")
const calc=document.getElementById("calc")

let sinal=false
let decimal=false


teclas.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        
   sinal=false

   if(evt.target.innerHTML==","){
     if(!decimal){
     
      decimal=true  
      if(display.innerHTML=="0"){
         display.innerHTML="0,"
      }else{
       display.innerHTML+=evt.target.innerHTML   
     }
   }
   
   }else{
     if(display.innerHTML =="0"){
         display.innerHTML=""
     }
    display.innerHTML+=evt.target.innerHTML 
    }
    
    })
})



teclaop.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
   if(!sinal){
     sinal=true
     
     if(display.innerHTML=="0"){
       display.innerHTML=""
     }
   
   if(evt.target.innerHTML=="X"){
    display.innerHTML+="*"
     }else{
        display.innerHTML+=evt.target.innerHTML
        
     } 
   }
     
  })
})


tlimpar.addEventListener("click",(evt)=>{
     sinal=false
     decimal=false
    display.innerHTML="0"
})

tigual.addEventListener("click",(evt)=>{
   sinal=false
   decimal=false
   const res=eval(display.innerHTML)
   
   display.innerHTML=res
})

aba.addEventListener("click",(evt)=>{
  calc.classList.toggle("calc_exibi")
})

