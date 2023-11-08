// Variável de controle para verificar se o código QR já foi gerado
let qrCodeGerado = false;

// Função para recuperar o CPF da URL
function getCPFFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('cpf');
}

// Função para gerar o código QR com base no CPF
function gerarQRCode() {
  // Verifique se o código QR já foi gerado
  if (qrCodeGerado) {
    return; // Se já foi gerado, saia da função
  }

  // Recupere o CPF da URL
  const cpf = getCPFFromURL();

  if (cpf) {
    // Exibe o CPF capturado no console
    console.log("CPF Capturado:", cpf);

    // Gere o código QR com base no CPF
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: cpf,
      width: 128,
      height: 128
    });

    // Defina a variável de controle para true para indicar que o código QR foi gerado
    qrCodeGerado = true;
  } else {
    alert("CPF não encontrado na URL.");
  }
}

// Associe a função ao evento de clique do botão
document.getElementById("generateQRCode").addEventListener("click", gerarQRCode);
