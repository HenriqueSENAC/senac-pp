// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();


// Authentication
async function login(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM cadastro WHERE `email` = ?";
    
    // Recuperar credenciais informadas
    const params = Array(
        request.body.email
    );
        // console.log("to aqui")
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {            
                if (request.body.senha != results[0].senha) {     
                    console.log("Senha incorreta", results)              
                } if (request.body.senha === results[0].senha) {
                        console.log("Senha correta", results)
                        // fiz um monte de coisa aqui que tem q arrumar e rever
                        // * JS não alerta caso a senha esteja incorreta mas aparece no Console
                        // Código antigo ta no github do andrei qualquer coisa
                        
                    }

                const id = results[0].id_cadastro;                       
                    
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário conectado.`,
                        data: results
                    });                    
            } else {
                console.log("Senha Incorreta", response)
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err,
                    sqlMessage: err
                });
        }
    });
}

module.exports = {
    login
}