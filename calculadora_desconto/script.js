function calcularDesconto() {
    const preco = parseFloat(document.getElementById("preco").value);
    const porcentagem = parseFloat(document.getElementById("desconto").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(preco) || isNaN(porcentagem)) {
      resultado.innerHTML = "<p style='color:red'>Por favor, preencha ambos os campos corretamente.</p>";
      return;
    }
  
    const valorDesconto = (preco * porcentagem) / 100;
    const precoFinal = preco - valorDesconto;
  
    resultado.innerHTML = `
      <p>Valor do Desconto: <strong>R$ ${valorDesconto.toFixed(2)}</strong></p>
      <p>Preço com Desconto: <strong>R$ ${precoFinal.toFixed(2)}</strong></p>
    `;
  }
  