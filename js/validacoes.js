
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

    if (document.querySelector("#teste2").value == '') {
        alert('Insira um email valido, campo vazio')
    }
    if (document.querySelector("#teste").value == '') {
        alert("senha obrigatoria")
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



