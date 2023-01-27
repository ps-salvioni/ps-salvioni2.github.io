
const nombre = document.getElementById("myname")
const apellidos = document.getElementById("surname")
const email = document.getElementById("email")
const celular = document.getElementById("mobile")
const contraseña = document.getElementById("password")
const contraseña2 = document.getElementById("repeatpassword")
const terminosYcondiciones = document.getElementById("termsandconditions")
const form = document.getElementById("form")
const listinput = document.querySelectorAll(".form-input")


form.addEventListener('submit', (e) => {
    e.preventDefault()
 
        if(nombre.value.length < 1 || nombre.value.trim() == "") {
            mostrarmensajeerror("myname", "nombre no valido");
        } 
        if(apellidos.value.length < 1 || apellidos.value.trim() == "") {
            mostrarmensajeerror("surname", "apellidos no valido");
        } 
        if(email.value.length < 1 || email.value.trim() == "") {
            mostrarmensajeerror("email", "email no valido");
        } 
        if(celular.value.length < 1 || celular.value.trim() == "") {
            mostrarmensajeerror("mobile", "mobile no valido");
        } 
        if(contraseña.value.length < 1 || contraseña.value.trim() == "") {
            mostrarmensajeerror("password", "password no valido");
        } 
        if(contraseña2.value.length < 1 || contraseña2.value.trim() == "") {
            mostrarmensajeerror("repeatpassword", "repeatpassword no valido");
        }
        if(terminosYcondiciones.value.length < 1 || terminosYcondiciones.value.trim() == "") {
            mostrarmensajeerror("termsandconditions", "acepte");
        }  


});    

function mostrarmensajeerror(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
        elemento.lastElementChild.innerHTML = mensaje;
    }




    












    





