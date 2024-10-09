// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { login } = require('../controllers/loginController');

router.post('/login', login);

/**
   * @swagger
   * /tasks/:id:
   *    put:
   *      summary: Atualiza uma tarefa id
   *      responses:
   *        200:
   *          description:  Uma lista de tarefas
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  type: object
   */


module.exports = router;