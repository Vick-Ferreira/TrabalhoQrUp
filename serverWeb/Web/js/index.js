const btnCriar = document.getElementById("criar");
const btnBuscar = document.getElementById("buscar");

btnCriar.addEventListener("click", (e) => {
    e.preventDefault();
    const cpf = document.getElementById("InputCPF").value;
    const senha = document.getElementById("InputSenha").value;

    function criarAluno(cpf, senha) {
        fetch("https://json-qrcod.vercel.app/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cpf, senha }),
        })
        .then((resp) => resp.json())
        .then((data) => {
            alert("Aluno CRIADO.");
            gerarQRCode(cpf);
            console.log("Aluno criado");
        })
        .catch((error) => {
            console.log("Erro na solicitação: " + error);
        });
    }

    criarAluno(cpf, senha);
});

btnBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    const cpf = document.getElementById("InputCPF").value;
    const senha = document.getElementById("InputSenha").value;

    function verificarLogin(cpf, senha) {
        fetch(`https://json-qrcod.vercel.app/alunos?cpf=${cpf}&senha=${senha}`)
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

    verificarLogin(cpf, senha);
});
