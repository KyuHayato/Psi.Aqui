
function validaEmail(){
    if(document.getElementsByName('email') == ''){
        alert("email obrigatorio")
    }
}
function validaSenha(){
    if(document.querySelector("#teste").value == ''){
        alert("senha obrigatoria")
    }
} 

function validaLogin() {

    if(document.querySelector('[name="pass"]').value ==""){
        document.querySelector("#mensagemErro3").style.display = "block"
    } else{
        document.querySelector("#mensagemErro3").style.display = "none"
    }
    if (document.querySelector('[name="email"]').value == '') {
        document.querySelector("#mensagemErro2").style.display = "block"       
    } else{
        document.querySelector("#mensagemErro2").style.display = "none"       
    }
}
function validaCadastro() {
    if (document.querySelector('[data-nome]').value == "") {
        alert("insira nome")
    }
    if (document.querySelector('[data-email]').value == "") {
        alert("insira email")
    }
    if (document.querySelector("#genero").value == "valor0") {
        alert("insira genero")
    }
    if(document.querySelector('[data-nasc]').value == ""){
        alert("insira data de nasc")
    
    }
    if(document.querySelector('[data-senha]').value == ""){
        alert("insira senha valida")
    
    }
    if(document.querySelector('[data-senha-conf]').value == ""){
        alert("insira senha valida igual a primeira")
    
    }
}
function validaEmail(email){
    let exp = /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/
    if (!exp.test(email.value)) {
       alert("email invalido")
        return false;
    } 
    if (email.value == '') {
        alert("esse campo é obrigatorio")
        email.focus();
        return false;
    }  
}
function validaEmailLogin(email){
    let exp = /^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/
    if (!exp.test(email.value)) {
       document.querySelector("#mensagemErro").style.display = "block"
       return false;
    } else{
        document.querySelector("#mensagemErro").style.display = "none"


    }
    if (email.value == '') {
        document.querySelector("#mensagemErro2").style.display = "block"
        email.focus();
        return false;
    }  else{
        document.querySelector("#mensagemErro2").style.display = "none"
    }
}
function validaSenhaLogin(senha){
    if(senha.value ==""){
        document.querySelector("#mensagemErro3").style.display = "block"
    } else{
        document.querySelector("#mensagemErro3").style.display = "none"
    }
}

    
    




