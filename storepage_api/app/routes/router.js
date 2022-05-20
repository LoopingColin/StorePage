const express = require('express')

const router = express.Router()
const PORT = process.env.PORT || 3001


// API
// All ROUTES
router.get('/api', (req, res)=> {
    res.json({
        'All PCs': `http://localhost:${PORT}/api/pcs`,
        'All Checkout': `http://localhost:${PORT}/api/checkout`

    })
})


router.use('/api/pcs', require('./api/pcsRoutes'))
router.use('/api/checkout', require('./api/checkout'))



router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 Error This page does not exist!</h1>')
    }
})

module.exports = router