const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-lig')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
       aparecerImagen(imagen.getAttribute('src'))
    
     
    })

})

const aparecerImagen = (imagen)=>{
    imageneslight.scr = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
}