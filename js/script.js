let form = document.querySelector("#myForm").addEventListener("submit", envioFormulario); // atribuindo o evento de submit no formulario

function envioFormulario(event){
    //Validando Input nome


    //event.preventDefault(); //anula o evento previo de submit(enviar )
    let inputName = document.querySelector("#validationName");
    let nome = inputName.value
    if (nome.length <= 3 ) {
        inputName.style.border = "1px solid red";
        inputName.parentElement.querySelector('.error-message').textContent = 'ERRO! Digite um nome válido';
        //inputName.classList.add("error-message"); //poderia colocar uma classe erro na div Pai e adicionar e remover mas n seria mt util com erros diferentes
        event.preventDefault();
    }else{
        inputName.parentElement.querySelector('.error-message').textContent = '';
        inputName.style.border = "";
        //inputName.classList.remove("error-message");
    }

    //Validando Input Sobrenome

    let inputSurname = document.querySelector("#validationSurname");
    let Surname = inputSurname.value
    if (Surname.length == 0 ) {
        inputSurname.style.border = "1px solid red";
        inputSurname.parentElement.querySelector('.error-message').textContent = 'ERRO! Digite um sobrenome ';
        
        event.preventDefault();
    }else{
        inputSurname.parentElement.querySelector('.error-message').textContent = '';
        inputSurname.style.border = "";
    }

    //Validando email

    let validationEmail = document.querySelector("#validationEmail");
    let email = validationEmail.value;
    let isValidEmail = true;
    
    for (let cont = 0; cont < email.length; cont++) {
          let StrChar = email[cont];
       if (StrChar !== "@" && StrChar !== '.' ) {
            
            isValidEmail = false; // variavel que vai mostrar q o email nao é valido
            
            break; //pra sair do loop
    }
         }

    if (!isValidEmail) {
        validationEmail.parentElement.querySelector('.error-message').textContent = 'ERRO! Digite um email válido';
        validationEmail.style.border = "1px solid red";
    }else{
        validationEmail.parentElement.querySelector('.error-message').textContent = '';
    }
}
