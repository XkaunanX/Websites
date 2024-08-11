const contenedora = document.querySelector('.button-up');

let prevYY = window.scrollY;

window.addEventListener('scroll', function(){
    
    if( prevYY > window.scrollY ){
        contenedora.classList.remove('off-a');
      }else{
        contenedora.classList.add('off-a');   
      }
    
      if( window.scrollY > 60 ){
        contenedora.classList.add('solid-a');
      }else{
        contenedora.classList.remove('solid-a');
      }
      prevYY = window.scrollY;

});