btnlogin = document.getElementById("btn-login")
nome = document.getElementById("usuario")
senha = document.getElementById("senha")
mensagem = document.getElementById('msg')



btnlogin.addEventListener("click", function(event){
    console.log('asdasd')
    event.preventDefault()
    if(nome.value == "admin" && senha.value == "admin"){
        mensagem.classList.remove("incorreta")
        mensagem.innerHTML = "Bem vindo"        
        mensagem.classList.add("correta")

    }  else {
        mensagem.innerHTML = ("Senha incorreta")
        mensagem.classList.remove("correta")
        mensagem.classList.add("incorreta")
    }
})