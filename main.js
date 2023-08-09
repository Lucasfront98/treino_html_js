document.getElementsById("container").addEventListener("submit", function(event) {
    
    event.preventDefault();

    
    const campoAValue = parseFloat(document.getElementById("campoA").value);
    const campoBValue = parseFloat(document.getElementById("campoB").value);

    
    const mensagem = document.getElementsById("mensagem");

    
    if (campoBValue > campoAValue) {
      // Se válido, exibir mensagem positiva
        mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
        mensagem.style.color = "black";
    } else {
      
        mensagem.textContent = "Formulário inválido! Campo B deve ser maior que Campo A.";
        mensagem.style.color = "red";
    }
    });