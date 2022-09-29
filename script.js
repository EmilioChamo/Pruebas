const texto= document.querySelector(".encripta");
const mensaje=document.querySelector(".encript");
let vocales=["e","i","o","a","u"];
let cambio=["enter","imes","ober","ai","ufat"];
alert("INGRESE EL TEXTO PRESIONE ENCRIPTAR,EL TEXTO ENCRIPTADO SERA DESENCRIPTADO AL PRESIONAR DESENCRIPTAR,SE LIMPIARAN AMBAS CAJAS DE TEXTO EL DAJAR VACIA LA PRIMER CAJA Y PRESIONAR ENCRIPTAR")
function encriptar(palabras){
    palabras=palabras.toLowerCase(); 
    for(let i = 0; i < vocales.length; i++){
        palabras=palabras.replaceAll(vocales[i],cambio[i]);
      }
     return palabras;
}
  
 function btnencriptar(){
    const textoencriptado=encriptar(texto.value);
    mensaje.value=textoencriptado;
    texto.value="";
 }

  function desencriptar(palabra){
    palabra=palabra.toLowerCase();
   for(let i =0 ; i < vocales.length; i ++){
    palabra=palabra.replaceAll(cambio[i],vocales[i])
    }
    return palabra;
  }

  function btndesencriptar(){
   const textodesencriptado=desencriptar(mensaje.value);
   mensaje.value=textodesencriptado;
  }