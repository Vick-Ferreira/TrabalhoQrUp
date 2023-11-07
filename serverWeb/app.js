const express = require('express');//chamando  server express
const app = express();//app que ira executar o server express
const PORT = 4000;//porta que sera rodado o servior estatico
//função principal é servidor o conteudo estatico  que está nesse caminho.
app.use(express.static('Web')); //onde estará o conteudo estático


//Recurso de upload.

const multer = require('multer'); //trazendo o multer
const storage = multer.diskStorage({
    destination: function(req, arquivo, callback) {
        callback(null, 'Web/img'); //caminho onde os uploads serão armazenados
    }, //gravar, onde sera feito o armazenamento no disco
    filename: function(req, arquivo, callback) {
        callback(null, arquivo.originalname);
    }
})

const upload = multer({storage: storage});
app.post("/upload", upload.single('arquivo'), (req, res) => {
    res.status(200).send();

})
const msg = `Servidor rodando na porta : ${PORT}`;
app.listen(PORT, () => console.log(msg));

/*exemplo de um servidor web simples criado com Node.js e Express.
Ele serve conteúdo estático a partir da pasta "Web" e também oferece um recurso de upload de arquivos.  */