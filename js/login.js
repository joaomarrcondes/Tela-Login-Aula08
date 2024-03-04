function logar(){

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario == "" && senha == ""){
        alert("Preencha Todos os Campos!");
    }
    else if(usuario != "admin" && senha != "admin"){
        alert("Usuário ou Senha Incorretos!");
    }
    else if(usuario == "admin" && senha == "admin"){
        location.href = "pokemon.html";
    }
}