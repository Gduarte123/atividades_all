function mostrarCor() {
    const corSelecionada = document.getElementById("seletor-cor").value;
    const quadrado = document.getElementById("quadrado");

    if (corSelecionada) {
        quadrado.style.display = "block";
        switch(corSelecionada) {
            case "vermelho":
                quadrado.style.backgroundColor = "red";
                break;
            case "azul":
                quadrado.style.backgroundColor = "blue";
                break;
            case "verde":
                quadrado.style.backgroundColor = "green";
                break;
        }
    } else {
        quadrado.style.display = "none";
    }
}
