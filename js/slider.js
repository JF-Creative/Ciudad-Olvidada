let indice =  1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides(indice+=n);
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('sliderFade');
    let bar= document.getElementsByClassName('barr');

    if (n > slides.length){
        indice = 1;
    }
    if (n < 1){
        indice=slides.length();
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < bar.length; i++){
        bar[i].className = bar[i].className.replace 
        (" active","");
    }

    slides[indice-1].style.display = 'block';
    bar[indice-1].className += ' active';
}