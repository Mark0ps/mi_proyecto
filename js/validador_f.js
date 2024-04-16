document.addEventListener("DOMContentLoaded", ()=>{
    formValidatorInit();
});


function formValidatorInit(){
    const txtNombre = document.getElementById("nombre");
    const txtCorreo = document.getElementById("email");
    const txtTelefono = document.getElementById("telefono");
    const txtBio = document.getElementById("Bio");
    const txtInterest = document.getElementById("area_interes");

    const btnProcesar = document.getElementById("btnProcesar");
    const contactForm = document.getElementById("contactForm");

    const isEmpty = /^\s*$/gm;
    const isValidEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    const isValidHonduranCelPhone = /^\+?\(?(504)?\)?\s?[389]\d{3}[\-\s]?\d{4}$/gm;

    btnProcesar.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        let hasErrors = false;

        if( isEmpty.test(txtNombre.value)) {
            alert("Error: El nombre es requerido");
            hasErrors = true;
        }
        if (!isValidEmail.test(txtCorreo.value)) {
            alert("Error: Correo electronico no es válido");
            hasErrors = true;
        }
        if (!isValidHonduranCelPhone.test(txtTelefono.value)) {
            alert("Error: Telefono ingresado no es un celular hondureño válido");
            hasErrors = true;
        }
        // if (!isEmpty.test(txtInterest.value)) {
        //     alert(txtInterest.value);
        //     hasErrors = true;
        // }

        if(!hasErrors){
            contactForm.submit();
        }
    });
}