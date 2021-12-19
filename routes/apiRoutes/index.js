const express = require('express');
const router = express.Router();

//const apiRoutes = require('./routes/apiRoutes');

router.use(require('./candidateRoutes'));

router.use(require('./partyRoutes'));

router.use(require('./voterRoutes'));

router.use(require('./voteRoutes'));
//app.use('/api', apiRoutes);

module.exports = router;