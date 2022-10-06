import * as express from 'express'

const app = express();
const port=200;


app.get('/',(request,response) =>{
    response.send('Hello Word!');
});

    app.get('/Gege',(request,response)=>{
       response.send('Mentalidades<br><br>Persistêcia<br>Responsabilidade Pessoal<br>Orientação ao Futuro<br>Mentalidade de Crescimento');
    });

    app.get('/Gen',(request,response)=>{
        response.send('Habilidades<br><br>Trabalho em Equipe<br> Atenção aos Detalhes<br>Protividade<br>Comunição');
    });

    app.get('/Lista',(resquest,response)=>{
        response.send('Bancos de Dados<br><br>MySQLWorkBench<br>ComandoJoin');
    });



// Code here
// Codifique os exercicio da primeira lista 

app.listen(port,() => {
    console.log(`Server is runnig at port ${port}`);


});

