// Função para recuperar o CPF da URL
function getCPFFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('cpf');
}

// Função para gerar o código QR com base no CPF
function gerarQRCode() {
  const cpf = getCPFFromURL();

  if (cpf) {
      console.log("CPF Capturado:", cpf);

      // Limpe o conteúdo anterior do elemento #qrcode
      document.getElementById("qrcode").innerHTML = "";

      // Gere o código QR com base no CPF
      var qrcode = new QRCode(document.getElementById("qrcode"), {
          text: cpf,
          width: 128,
          height: 128
      });
  } else {
      alert("CPF não encontrado na URL.");
  }
}

// Associe a função ao evento de clique do botão "IMPRIMA SEU QRCOD"
document.getElementById("generateQRCode").addEventListener("click", gerarQRCode);

// Execute a função para gerar o código QR assim que a página for carregada
gerarQRCode();
