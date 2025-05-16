function adicionarNome() {

    const input = document.getElementById('nome');


    const nome = input.value.trim();


    if (nome !== '') {

        const paragrafo = document.createElement('p');

        paragrafo.textContent = nome;


        document.getElementById('lista').appendChild(paragrafo);

        input.value = '';
    }
}
