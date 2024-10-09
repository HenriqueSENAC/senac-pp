const { Router } = require('express');
const router = Router();

const { storeCatalog, getCatalog } = require('../controllers/CatalogController');

router.post('/store/catalog', storeCatalog);

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
router.get('/get/catalog', getCatalog);

  /**
   * @swagger
   * /tasks/register:
   *    post:
   *      summary: Cadastra uma nova tarefa
   *      responses:
   *        201:
   *          description: Sucesso!
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  type: object
   */

module.exports = router;