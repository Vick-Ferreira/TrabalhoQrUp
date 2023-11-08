
const btnCriar = document.getElementById("criar");
const btnBuscar = document.getElementById("buscar");



// Manipulador de evento para o botão "Criar"
btnCriar.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Buscando os dados
    const cpf = document.getElementById("InputCPF").value;
    const senha = document.getElementById("InputSenha").value;

    // Criando função para criar um aluno
    function CriarAluno(cpf, senha) {
        // Enviando os dados (CPF e senha) para o servidor e recebendo a resposta.
        fetch("https://json-seven-gules.vercel.app/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cpf, senha }),
        })
        .then((resp) => resp.json())
        .then((data) => {
            alert("Aluno CRIADO.");
            // Gere o código QR com base no CPF inserido
            var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: cpf, // Use o CPF como texto para o código QR
            width: 128,
            height: 128
        });
            console.log("Aluno criado"); // Exibe no console
        })
        .catch((error) => {
            console.log("Erro na solicitação: " + error);
        });
    }
    
    // Chame a função CriarAluno
    CriarAluno(cpf, senha);
});

// Manipulador de evento para o botão "Buscar"
btnBuscar.addEventListener("click", (e) => {
    e.preventDefault();

    const cpf = document.getElementById("InputCPF").value;
    const senha = document.getElementById("InputSenha").value;

    function VerificarLogin(cpf, senha) {
        fetch(`https://json-seven-gules.vercel.app/alunos?cpf=${cpf}&senha=${senha}`)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.length > 0) {
                    // Aluno encontrado, redirecionar para a página "Alunos.html" com o CPF como parâmetro
                    window.location.href = `./Alunos.html?cpf=${cpf}`;
                
                } else {
                    // Aluno não encontrado, exibir mensagem de erro
                    alert("Aluno não encontrado. Verifique o CPF e a senha.");
                }
            })
            .catch((error) => {
                console.error("Erro na solicitação: " + error);
            });
    }
    
    
    // Chame a função para verificar o login
    VerificarLogin(cpf, senha);
});


