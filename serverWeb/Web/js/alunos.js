  // Variável para rastrear se o código QR já foi gerado
  var qrCodeGerado = false;

  // Função que será chamada quando o botão for clicado
  function gerarQRCode() {
    // Verifique se o código QR já foi gerado
    if (qrCodeGerado) {
      // Se já foi gerado, não faça nada
      return;
    }

    // Pega o texto que você deseja codificar no QR Code
    var textoParaQRCode = "SeuTextoAqui";

    // Cria um novo objeto QRCode
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: textoParaQRCode,
      width: 128,
      height: 128
    });

    // Atualize a variável para indicar que o código QR foi gerado
    qrCodeGerado = true;
  }

  // Associe a função ao evento de clique do botão
  document.getElementById("generateQRCode").addEventListener("click", gerarQRCode);
