function enter() {
    const login = document.getElementById("login").value
    const senha = document.getElementById("senha").value

    if (login === "eduardocanova@gmail.com" || senha === "123456") {
        alert('Login realizado com sucesso!');
    } else {
        alert('Login ou senha incorretos');
    }
}

function validarEmail() {
    let email = document.getElementById("login").value;
    let msg = email.includes("@");
    document.getElementById("validacaoEmail").textContent = msg ?
        "Email válido" : "Email inválido (@)";
}


