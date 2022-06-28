function logar(){
    var username = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    console.log(username.value+senha.value);

    if (username.value = "admin" && senha.value == "123"){
        localStorage.setItem("acesso", true);

        window.location.href = ("www.google.com.br")
    }else{
        alert('usuario ou senha incorreto!')
    }
    
}