function validar(){
//Natalia
var sexo = document.getElementsByName("Sexo");
if(sexo[0].checked == false && sexo[1].checked == false)
 {
  alert("No se ha seleccionado ningun sexo");
   return false;
 }
 else{
   return true;
  }
};