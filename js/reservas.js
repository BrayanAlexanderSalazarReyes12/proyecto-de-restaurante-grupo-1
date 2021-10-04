let cerrar=document.querySelectorAll(".close")[0];
let abrir=document.querySelectorAll(".reserv")[0];
let modal1=document.querySelectorAll(".modal1")[0];
let modalC=document.querySelectorAll(".modal-reservas")[0];
let botonc=document.querySelectorAll(".boton-confirmar")[0];
let botoncumple=document.querySelectorAll(".btn-cumple")[0];
let btnaniversario=document.querySelectorAll(".btn-aniversario")[0];
let btnfiestainfantil=document.querySelectorAll(".btn-infantiles")[0];
let btnDeclaraciones=document.querySelectorAll(".btn-declaraciones")[0];
let btndespedidas=document.querySelectorAll(".btn-despedidas")[0];
let btncena=document.querySelectorAll(".btn-cena")[0];


var respuesta="";


abrir.addEventListener("click",function(e){
    
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal1.classList.toggle("modal-close");
    
})

cerrar.addEventListener("click",function(){
    modal1.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    },1000)
})

window.addEventListener("click",function(e){
    if(e.target == modalC){
        modal1.classList.toggle("modal-close");
        
        setTimeout(function(){
            modalC.style.opacity="0";
            modalC.style.visibility="hidden";
        },1000)
    }
})

botonc.addEventListener("click",function(){
    console.log(respuesta);
    if(respuesta==""){
        respuesta="Reserva Normal";
    }
})

botoncumple.addEventListener("click",function(){
    respuesta="Evento Fiesta Cumpleaños";
    document.getElementById("respuesta").innerHTML=respuesta;
})

btnaniversario.addEventListener("click",function(){
    respuesta = "Evento Aniversario";
    document.getElementById("respuesta").innerHTML=respuesta;
})

btnfiestainfantil.addEventListener("click",function(){
    respuesta = "Evento Fiesta Infantil";
    document.getElementById("respuesta").innerHTML=respuesta;
})

btnDeclaraciones.addEventListener("click",function(){
    respuesta = "Evento Declaración";
    document.getElementById("respuesta").innerHTML=respuesta;
})

btndespedidas.addEventListener("click",function(){
    respuesta="Evento Despedida";
    document.getElementById("respuesta").innerHTML=respuesta;
})


btncena.addEventListener("click",function(){
    respuesta="Evento Cena Con Amigos";
    document.getElementById("respuesta").innerHTML=respuesta;
})


