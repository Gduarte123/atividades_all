function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      resultado.innerHTML = "<p style='color:red'>Por favor, preencha todas as notas corretamente.</p>";
      return;
    }
  
    const media = (nota1 + nota2 + nota3) / 3;
    const status = media >= 7 ? "Aprovado" : "Reprovado";
  
    resultado.innerHTML = `
      <p>Média Final: <strong>${media.toFixed(2)}</strong></p>
      <p>Status: <strong>${status}</strong></p>
    `;
  }
  