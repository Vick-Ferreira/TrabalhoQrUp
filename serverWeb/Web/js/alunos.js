 
 
 //como o cpf e senha estão sendo passados como paramêtro na url temos que recuperar eles na mesma.
 // Função para recuperar o CPF da URL
 function getCPFFromURL() {//nova pesquisa e recuperação de parâmetro
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('cpf');
}

// Função para gerar o código QR com base no CPF
function gerarQRCode() {
  // Recupere o CPF da URL
  const cpf = getCPFFromURL();

  if (cpf) {
     // Exibe  o CPF capturado no console   ENTÃO... ELE VAI CRIAR O QRCOD
     console.log("CPF Capturado:", cpf);

    //  código QR com base no CPF
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: cpf,
      width: 128,
      height: 128
    });
  } else {
    alert("CPF não encontrado na URL.");
  }
}

 // Associe a função ao evento de clique do botão, gera apos o click
 document.getElementById("generateQRCode").addEventListener("click", gerarQRCode);