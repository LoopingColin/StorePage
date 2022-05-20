const express = require('express')
const router = express.Router()

const dao = require('../../../daos/api/pcsDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'pcs')
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'pcs', req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

// SINGLE PCS
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const url=`http://localhost:3000/api/pcs/${id}`
})



module.exports = router