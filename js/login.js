function logar(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario == "" && senha == ""){
        alert("Preencha todos os campos");
    }
    else if(usuario == "admin" && senha == "admin"){
        location.href = "pages\pokemon.html";
    }
}