const controls = document.querySelector(".control")
const slider = document.querySelector(".top")

controls.addEventListener('click', function(){
    
    if (document.getElementById('input-1').checked){
        console.log("1")
        slider.style.backgroundImage = "url('/img/fondo-leos-1.jpg')";
    }
    if (document.getElementById('input-2').checked){
        console.log("2")
        slider.style.backgroundImage = "url('/img/fondo-leos-2.jpg')";
    }
    if (document.getElementById('input-3').checked){
        console.log("3")
        slider.style.backgroundImage = "url('/img/fondo-leos-3.jpg')";
    }
    if (document.getElementById('input-4').checked){
        console.log("4")
        slider.style.backgroundImage = "url('/img/fondo-leos-4.jpg')";
    }
    if (document.getElementById('input-5').checked){
        console.log("5")
        slider.style.backgroundImage = "url('/img/fondo-leos-5.jpg')";
    }
    if (document.getElementById('input-6').checked){
        console.log("6")
        slider.style.backgroundImage = "url('/img/fondo-leos-6.jpg')";
    }
     

});


