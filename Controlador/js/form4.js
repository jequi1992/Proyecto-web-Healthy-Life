function validar_nombre(string){

	var x=RegExp(/^[a-zA-Z\_\ \ú]{5,30}$/);
	var y=document.getElementById('campoNombre');
	
	if(x.test(y.value)){ 			
		 return true;	
	 }else{
		console.log("Error al validar el campo nombre"); 	
		 return false;
	 }
 }
 
 function validar_contrasenas(string){
	 var x=document.getElementById('campoContrasena');
	 var y=document.getElementById('campoConfirmarContrasena');
	 if(x.value!=y.value){
		 console.log("No coinciden las contraseñas"); 
		 return true;
	 }else{
		 return false;
	 }
 }
 

module.exports.validar_nombre=validar_nombre
module.exports.validar_contrasenas=validar_contrasenas;