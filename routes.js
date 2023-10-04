const { Router } = require('express');

const router = Router();
router.route('/notificar')
    .get(function (req, res) {
        // Responde com uma mensagem JSON
        res.json({
            message: "testando> "+req.query.notificao || ''
        });
    });


module.exports = router;
