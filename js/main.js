//Variables
const capturarTexto = document.querySelector('#textArea');
const encriptarTexto = document.querySelector('#encriptar');
const desencriptarTexto = document.querySelector('#desencriptar');

let mostrarMensaje = document.querySelector('#mostrarMensaje');
const copiar = document.querySelector('#copiar');

//cuadros de texto
const cuadroImagen = document.querySelector('.imagen-texto');
const cuadroResultado = document.querySelector('.contenido');

//Funciones

//Cuando se haga click, manda el texto encriptado al textarea que muestra el texto encriptado
encriptarTexto.addEventListener('click', function(){
    const encriptar = encrypt(capturarTexto.value.toLowerCase())//Toma el valor del textarea
    mostrarMensaje.value = encriptar
    if(encriptar.length === 0){
        cuadroResultado.style.display = 'none';
    }else{
        cuadroResultado.style.display = 'block';
        cuadroImagen.style.display = 'none';
    }
    
})

//Encriptar el texto
function encrypt (encryptText){
    let char =[
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],   
    ]

  for(let i = 0; i < char.length; i++){
    if (encryptText.includes (char[i][0]) ){
        encryptText = encryptText.replaceAll(char[i][0], char[i][1]);
    }
  }
  return encryptText;
}

//desencriptar
desencriptarTexto.addEventListener('click', function(){
    const desencriptar = decrypt(capturarTexto.value)//Toma el valor del textarea
    mostrarMensaje.value = desencriptar
    console.log(desencriptar);
    if(desencriptar.length === 0){
      cuadroResultado.style.display = 'none';
  }else{
      cuadroResultado.style.display = 'block';
      cuadroImagen.style.display = 'none';
  }
})

function decrypt(decryptText){
    let char =[
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],   
    ]

  for(let i = 0; i < char.length; i++){
    if (decryptText.includes (char[i][1]) ){
        decryptText = decryptText.replaceAll(char[i][1], char[i][0]);
    }
  }
  return decryptText;
}



 copiar.addEventListener('click', function(){
     mostrarMensaje.select();
    mostrarMensaje.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mostrarMensaje.value);

    const tooltip = document.querySelector('#textoFlotante');
    tooltip.innerHTML = "Texto copiado!" 
    setTimeout(() => {
      const reset = document.getElementById('resetForm')
      const resetResult = document.getElementById('resetResult');
      reset.reset()
      resetResult.reset()
    }, 2000);
  
 })

 