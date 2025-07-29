/**********************************************************
 * Objetivo: Apresentar comandos básicos do node.js
 * Autor: Paulo
 * Data: 29/07/2025
 * Versão: 1.0
 * ********************************************************/



//Comentário em linha
/*
    Comentário em bloco
*/

// Import da classe readline do node.js
var readline = require('readline')

// Cria uma interface de comunicação com o terminal para entrada e sáida de dados interagindo com o usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite o seu nome:', function(nome){

    var nomeUsuario = nome
   //Validação da entrada de dados vazio
    if(nomeUsuario == ''){
        console.log('ERRO: Não foi possivel processar a requisição, campo obrigatório')
    }
    else{
        //String() -> converte uma variavel em String
        //toUpperCase() -> converte o conteudo de uma Variavel em MAIUSCULO
    console.log('O nome digitado foi: ' + String(nomeUsuario ).toLocaleUpperCase())
    console.log(nome)
    }
})




/*
//Permite escrever um conteúdo  uma string ou objeto no terminal
console.log('Aula 01 do node.js')

//Permite criar uma váriavel
var nome = 'Paulo'
var vulgo = '|Matador de Ratos|'


//Exemplo de concatenação de conteúdos (String + variável)
console.log('O nome digitado foi: ' + nome + vulgo)

// Concatena usando a crase no lugar da aspas, para colocar a variavel dentro do bloco
console.log(`O nome digitado foi  ${nome} ${vulgo}`)

//typeof() -> Retorna o tipo de dados de uma variavel ou objeto
console.log(typeof(nome))
*/