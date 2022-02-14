const { userController, userSearchController } = require('../controllers/users')

const router = require('express').Router()

// Get All users from database
router.get('/users', userController)
router.get('/users/:query', userSearchController)

module.exports = router
