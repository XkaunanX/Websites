const contenedor = document.querySelector('header');
const image = document.querySelector('navbar-brand');

let prevY = window.scrollY;

window.addEventListener('scroll', function(){
    
    if( prevY > window.scrollY ){
        contenedor.classList.remove('off');
      }else{
        contenedor.classList.add('off');   
      }
    
      if( window.scrollY > 60 ){
        contenedor.classList.add('solid');
      }else{
        contenedor.classList.remove('solid');
      }
      prevY = window.scrollY;

});