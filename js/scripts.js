document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function moveSlide(step) {
        currentSlide += step;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        showSlide(currentSlide);
    }

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    // Configurar el temporizador para cambiar automáticamente las diapositivas cada 5 segundos
    setInterval(() => {
        moveSlide(1);
    }, 5000);

    // Event listeners para los controles manuales
    document.querySelector('.carousel-control.next').addEventListener('click', function() {
        moveSlide(1);
    });

    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    // Mostrar la diapositiva inicial
    showSlide(currentSlide);
});

function btnProcesar_onClick(e){
    e.preventDefault();
    e.stopPropagation();
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const suma = num1 + num2;
    const respuesta = "La suma de " + num1 + " y " + num2 + " es igual a " + suma + ".";
    document.getElementById("mensaje").innerHTML = respuesta;
}

function onDocumentLoaded(){
    //Establecer el comportamiento del Menu
    const menuHamburguesa = document.querySelector("header .hamburger");
    menuHamburguesa.addEventListener("click", menuToggle );
    // Registrar los Eventos del Formulario
    document.getElementById("btnProcesar").addEventListener("click", btnProcesar_onClick);
}

function menuToggle(){
    const navMenu = document.querySelector("header nav");
    navMenu.classList.toggle('hide');
}

document.addEventListener("DOMContentLoaded", onDocumentLoaded);
