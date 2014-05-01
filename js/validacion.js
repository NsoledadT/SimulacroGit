function valida()
               {
                var telefono=document.getElementById("tel").value;
                if( !(/^\d{4}-\d{4}$/.test(telefono)) ){
				   alert('No escribio un numero de telefono');
				   return false;
				   }
 				 return true;
				}
				
