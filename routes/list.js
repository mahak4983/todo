const express = require('express');
const listController = require('../controllers/list');

const router = express.Router();

router.post('/about', listController.addList);

router.get('/details', listController.getLists);

router.get('/detailsN', listController.getListsN);

router.delete('/about/:listId', listController.deleteList)

router.delete('/aboutN/:listId', listController.deleteListN)


module.exports = router;