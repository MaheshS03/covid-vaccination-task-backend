const express = require('express')
const router = express.Router()
const {displayUserData, bookingVaccinationCentre, searchVaccinationCentre, getVaccinationCentreDetails, loginExistingUser, registerNewUser} = require('../controllers/userController')

router.get('/get', getVaccinationCentreDetails)

router.post('/display', displayUserData)

router.post('/bookings', bookingVaccinationCentre)

router.post('/search', searchVaccinationCentre)

router.post('/login', loginExistingUser)

router.post('/signup',registerNewUser)

module.exports = router