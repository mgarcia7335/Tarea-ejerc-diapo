const boton = document.querySelector('.boton')
boton.style.backgroundColor = 'blue'
boton.style.color = 'white'
boton.style.padding = '10px 20px'
boton.style.borderRadius = '10px'

boton.addEventListener('click', () =>{
    console.log('cambiar color')
    boton.style.backgroundColor = 'red'
})