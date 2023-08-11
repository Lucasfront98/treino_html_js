document.getElementById("container").addEventListener("submit", function(event) {
    
    event.preventDefault();

    
    const campoAValue = parseFloat(document.getElementById("campoA").value);
    const campoBValue = parseFloat(document.getElementById("campoB").value);

    
    const mensagem = document.getElementById("mensagem");

    
    if (campoBValue > campoAValue) {
      
        mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
        mensagem.style.color = "black";
    } else {
      
        mensagem.textContent = "Formulário inválido! Campo B deve ser maior que Campo A.";
        mensagem.style.color = "red";
    }
    });