const express = require('express');
const checkJwt = require('../middleware/checkJwt');

const router = express.Router();

router.get('/', async (req: any, res: any, next: any) => {
    res.send({message: 'success'});
});

router.get('/auth', checkJwt, async (req: any, res: any, next: any) => {
    res.send({message: 'success'});
});

module.exports = router;
