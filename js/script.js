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
    let isValidEmail = true; // variavel pra verificar se foi digitado alguma coisa no input e se ele é válido
    let hasDot = false; //variavel pra ver se tem um "." no email pra validar
    let haSymbol = false;  //variavel pra ver se tem um @ no email pra validar

    if (email === '' ) {
        isValidEmail = false; // se estiver vazio é false 
        
    }else{
        for (let cont = 0; cont < email.length; cont++) { //cria um loop
            let StrChar = email[cont]; //cria variavel e atribui o valor do input na posição do contador verificando cada caractere da string
            if (StrChar === '@' ) {  // se a var for igual a @
              haSymbol = true;  //a variavel do simbolo @ vai ser verdadeira contando q possui @
            }else if(StrChar === '.'){ // se não, se a var for igual a "."
              hasDot = true;  // a var de "." vai ser verdadeira mostrando q tem um ponto
              break; //pra sair do looping  
             }
         }
    }

    //se não houver @ ou ". " o email é invalido  
    if (!hasDot || !haSymbol) {
        isValidEmail = false;
    }
    
    if (!isValidEmail) { // se a var q checa se é valido for falso
        event.preventDefault(); //para o evento d submit do formulario
        //validationEmail.parentElement  document.querySelector('.error-message').textContent = 'ERRO! Digite um email válido'; //aqui criava o erro da mensagem de erro ficar do lado do input antes da alteração do <p> no HTML
        validationEmail.style.border = "1px solid red";
        document.getElementById('errorEmail').textContent = 'ERRO! Digite um email válido';
        document.getElementById('spanEmail').style.border = "1px solid red";
    }else{
        //validationEmail.parentElement.querySelector('.error-message').textContent = '';
        document.getElementById('errorEmail').textContent = '';
        validationEmail.style.border = "";
        document.getElementById('spanEmail').style.border = "";
    }


    // Validando Website

    let validationWebsite = document.querySelector('#validationWebsite'); //pegando o elemento input HTML
    let website = validationWebsite.value; //criando uma nova variavel atribuindo o VALOR do elemento html

    let isWebsite = true;   //defino uma nova variavel pra verificar se o website é valido e defino como true

    if (!(website.startsWith('https://') || website.startsWith('http://'))) { // se o valor do input website NÃO começar com os dados passados na string IsWebsite vai ser falso
        isWebsite = false;      //startsWith() é um método que retorna boolean se começa com a string () e funciona melhor nesse caso doq indexOf       
        
    }else if  (website === ''){
        isWebsite = false;
    }

    if (!isWebsite) {
        event.preventDefault();
        validationWebsite.style.border = "1px solid red";
        validationWebsite.parentElement.querySelector('.error-message').textContent = 'ERRO! O campo está vazio ou foi digitado um website fora da formatação https:// ou http://';
        
    }else{
        validationWebsite.style.border = "";
        validationWebsite.parentElement.querySelector('.error-message').textContent = '';
    }

    //validando datas


    let DataAtual = new Date();

    let dataInitStr = document.querySelector('#dataInicial').value;
    let dataInit = new Date(dataInitStr);

    let dataFimStr = document.querySelector('#dataFinal').value;
    let dataFim = new Date(dataFimStr);

    if (dataFim <= dataInit || dataInit < DataAtual) {
        document.querySelector('#dataInicial').style.border = "1px solid red";
        document.querySelector('#dataFinal').style.border = "1px solid red";
        document.getElementById('error-dateInit').textContent = 'ERRO! Data inválida';
        document.getElementById('error-dateFinal').textContent = 'ERRO! Data inválida';
        event.preventDefault();
    } else {
        document.querySelector('#dataInicial').style.border = ""; 
        document.querySelector('#dataFinal').style.border = "";
        document.getElementById('error-dateInit').textContent = '';
        document.getElementById('error-dateFinal').textContent = '';
    }
    


    //validando atividades selecionadas

    let contChecked = 0;
    let checkActive = document.querySelectorAll('input[name="inlineCHECK"]');

    for (i = 0; i < checkActive.length; i++) { //percorrer todos os options
        if (checkActive[i].checked) { 
            contChecked++; //somar a quantidade seleiconada em um contador p/ validar
        }
    }

    if (contChecked >= 1 && contChecked <= 3 ) { //verificar se a não quantidade selecionada está dentro de 1 e 3
        document.getElementById('error-active').textContent = '';
      }else{
        document.getElementById('error-active').textContent = 'ERRO! Quantidade inválida.'
      }






}

// validando q se a opção centro oeste for escolhida, as atvd programador e dba serão desativadas


  const radioCentro = document.querySelector('#RadioCentro');
  const checkProgrammer = document.querySelector('#RadioProgramador');
  const checkDBA = document.querySelector('#RadioDBA');
  
  // Função para verificar e desabilitar o elemento RadioProgramador
  function verificarERDesabilitar() {
      if (radioCentro.checked) {
          // Se estiver marcado, desabilite o radioProgramdor e DBA
          if (checkProgrammer) {
              checkProgrammer.disabled = true;
              checkDBA.disabled = true;
          }
      }else {
          // Se o RadioCentro não estiver marcado, habilite o RadioProgramador e DBA
          if (checkProgrammer) {
              checkProgrammer.disabled = false;
              checkDBA.disabled = false;
          }
      }
  }
  
  // Adicione um ouvinte de evento para verificar quando o estado do RadioCentro muda
  radioCentro.addEventListener('change', verificarERDesabilitar);
  
  // Verifique o estado inicial do RadioCentro quando a página é carregada
  verificarERDesabilitar();