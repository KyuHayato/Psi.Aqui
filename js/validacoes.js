
function validaEmail(){
    if(document.getElementsByName('email') == ''){
        alert("email obrigatorio")
    }
}
function validaSenha(){
    if(document.getElementsByName('pass') == ''){
        alert("senha obrigatoria")
    }
}

function valida(){
    alert(document.querySelector("#teste").value)
    if(document.querySelector("#teste").value == ''){
        alert("email obrigatorio")
        
    }
    alert(document.querySelector("#teste2").value)
    if(document.querySelector("#teste2").value == ''){
        alert("senha obrigatoria")
    }
}
