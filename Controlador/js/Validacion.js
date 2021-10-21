var pristine;
window.onload = function () {

    var form = document.getElementById("form1");

    var pristine = new Pristine(form,{
        classTo: 'form-group',
        errorClass: 'has-danger',
        successClass: 'has-success',
        errorTextParent: 'form-group',
        errorTextTag: 'div',
        errorTextClass: 'text-help'
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = pristine.validate();
    });


};

function oscuro(){
    nav_drawer.classList.add('oscuro');
    menuNav.classList.add('oscuro');
}

function diurno(){
    nav_drawer.classList.remove('oscuro');
    menuNav.classList.remove('oscuro');
}

let cerrar=document.querySelectorAll(".close")[0];
let abrir=document.querySelectorAll(".abre")[0];
let modal=document.querySelectorAll(".modal")[0];
let modalC=document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");   
    setTimeout(function(){
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    },300)
});

window.addEventListener("click",function(e){
    if(e.target==modalC){
        modal.classList.toggle("modal-close");   
        setTimeout(function(){
            modalC.style.opacity="0";
            modalC.style.visibility="hidden";
        },300)
    }
});