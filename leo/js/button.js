const btn = document.querySelector('.send');
const nom = document.querySelector('#nombre');
const ape = document.querySelector('#apellido');
const ema = document.querySelector('#email');
const tel = document.querySelector('#tel');
const men = document.querySelector('#mensaje');

btn.addEventListener('click', function () {
    
    if (nom.validity.valid && ape.validity.valid && ema.validity.valid && tel.validity.valid && men.validity.valid){
        
        this.classList.toggle('active');

        setTimeout(()=>{
            this.classList.remove('active');
        },10000)
    }

});


