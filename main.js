document.getElementsById("container").addEventListener("submit", function(event) {
    // Impedir o envio do formulário
    event.preventDefault();

    // Obter os valores dos campos A e B
    const campoAValue = parseFloat(document.getElementById("campoA").value);
    const campoBValue = parseFloat(document.getElementById("campoB").value);

    // Selecionar a div para exibir a mensagem
    const mensagem = document.getElementsById("mensagem");

    // Validar se campo B é maior que campo A
    if (campoBValue > campoAValue) {
      // Se válido, exibir mensagem positiva
        mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
        mensagem.style.color = "black";
    } else {
      // Se inválido, exibir mensagem negativa
        mensagem.textContent = "Formulário inválido! Campo B deve ser maior que Campo A.";
        mensagem.style.color = "red";
    }
    });