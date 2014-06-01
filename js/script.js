function validar(){
	//Marcos
	var nombre = document.getElementById('nom').value; 
 	var expRegNom = /[a-zA-Z]/;

if(nombre == ""){
	alert("El campo nombre no puede estar vacio");
	return false;
}else if(!(expRegNom.test(nombre))){
 	alert("El nombre solo puede contener letras");
 	return false;
 }
 
 //Paula
 var telefono=document.getElementById("tel").value;
                if( !(/^\d{4}-\d{4}$/.test(telefono)) ){
				   alert('No escribio un numero de telefono');
				   return false;
				   }
				   
 //Andrés
var mail = document.getElementById("mail").value;
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(mail) ){
        alert("Error: La direccion de correo " + mail + " es incorrecta.");
		return false;
}

				   
				   
//Natalia
var sexo = document.getElementsByName("Sexo");
if(sexo[0].checked == false && sexo[1].checked == false)
 {
  alert("No se ha seleccionado ningun sexo");
   return false;
 }
 
 return true;
 }