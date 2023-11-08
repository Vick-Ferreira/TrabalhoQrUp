const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para permitir o uso de JSON no corpo das solicitações
app.use(express.json());

// Array para armazenar os alunos (simulando um banco de dados)
const alunos = [];

// Rota para criar um novo aluno
app.post('/alunos', (req, res) => {
  const { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(400).json({ error: 'CPF e senha são obrigatórios' });
  }

  const aluno = { cpf, senha };
  alunos.push(aluno);

  return res.status(201).json(aluno);
});

// Rota para buscar um aluno com base no CPF e senha
app.get('/alunos', (req, res) => {
  const { cpf, senha } = req.query;

  if (!cpf || !senha) {
    return res.status(400).json({ error: 'CPF e senha são obrigatórios' });
  }

  const aluno = alunos.find((a) => a.cpf === cpf && a.senha === senha);

  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }

  return res.status(200).json(aluno);
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
