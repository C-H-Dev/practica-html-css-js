//Seleccionar las columnas
let columnas = document.querySelectorAll('.marca');


//Guardar valor inicial de columna activa
let columnaActiva = [1] ;



//Escuchar los clic en cada columna
columnas.forEach((columna,indice)=>{
    columna.addEventListener('click', function(){
        ampliarColumna(indice);
    })
})

//Agregar clase activa
function ampliarColumna(indice) {
    columnas[columnaActiva].classList.remove('activa');
    columnas[indice].classList.add('activa');
    columnaActiva = indice;
}