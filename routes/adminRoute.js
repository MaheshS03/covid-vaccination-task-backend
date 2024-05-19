const express = require('express')
const router = express.Router()
const { getAllVaccinationCentreDetails, addNewVaccinationCentre,deleteVaccinationCentre, getDosageDetailsGroupedByCentres, loginExistingAdmin } = require('../controllers/adminController')

router.get('/get', getAllVaccinationCentreDetails)

router.get('/dosage', getDosageDetailsGroupedByCentres)

router.post('/add', addNewVaccinationCentre)

router.delete('/delete', deleteVaccinationCentre)

router.post('/login', loginExistingAdmin)


module.exports = router