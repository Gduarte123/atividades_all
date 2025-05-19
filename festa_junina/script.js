function verificaPalavra() {
    const input = document.getElementById("palavra");
    const palavra = input.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const palavraCorreta = "lampiao";

    if (palavra === "") {
        alert("Por favor, digite uma palavra!");
        input.focus();
        return;
    }

    if (palavra === palavraCorreta) {
        window.location.href = "correto.html";
    } else {
        window.location.href = "erro.html";
    }
}
