const express = require('express');
const { getAll, postAll, getSingle, updateRequest, deletePost } = require('../controller/taskController');

const router = express.Router();

// router.get('/', getAll);
// router.post('/', postAll);
// router.get('/:id', getSingle);
// router.patch('/:id', updateRequest);
// router.delete('/:id', deletePost);

router.route('/').get(getAll).post(postAll);
router.route('/:id').get(getSingle).patch(updateRequest).delete(deletePost);



module.exports = {router};