const { userController } = require('../controllers/users')

const router = require('express').Router()

// Get All users from database
router.get('/users', userController)

module.exports = router
