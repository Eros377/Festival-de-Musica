document.addEventListener('DOMContentLoaded', function(){

    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija(){
    let header = document.querySelector('.header');
    let sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');
        }
    })
}
function crearGaleria(){
    let cantidad_imagenes = 16;
    let galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= cantidad_imagenes;i++){
        let imagen = document.createElement('IMG');
        imagen.src = 'src/img/gallery/full/'+i+'.jpg';
        imagen.alt = 'Imagen Galeria'
    
        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}
function mostrarImagen(i){
        let imagen = document.createElement('IMG');
        imagen.src = 'src/img/gallery/full/'+i+'.jpg';
        imagen.alt = 'Imagen Galeria'
        //generaModal
        let modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.onclick = cerrarModal;
        //boton cerrar modal

        let cerrarModalBtn = document.createElement('BUTTON');
        cerrarModalBtn.textContent = 'X';
        cerrarModalBtn.classList.add('btn-cerrar');
        cerrarModalBtn.onclick = cerrarModal;

        modal.appendChild(imagen);
        modal.appendChild(cerrarModalBtn);
        //agregar a HTML
        let body = document.querySelector('body');
        body.classList.add('overflow-hidden');
        body.appendChild(modal);
}
function cerrarModal(){
    let modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();

        let body = document.querySelector('body');
        body.classList.remove('overflow-hidden');

    }, 500)
}
function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.navegacion-principal a');

        let actual = '';
        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            
            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        })
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active');
            }
        })
    })   
}
function scrollNav(){
    let navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link =>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            let sectionScroll = e.target.getAttribute('href');
            let section = document.querySelector(sectionScroll);
            
            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}