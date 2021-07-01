const express = require('express')
const router = express.Router()
const controller = require('../controlers/controller.js')

router.post('/articles', controller.saveArticles)
router.get('/keywords/:words', controller.saveKeywords)

module.exports = router