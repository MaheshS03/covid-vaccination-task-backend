const vaccinationCentreModel = require('../models/vaccinationCentreModel')
const initialCentreData = require('../data/initialCentreData')
const adminModel = require('../models/adminModel')

const getAllVaccinationCentreDetails = async (request, response) => {
    try {
        const centres = await vaccinationCentreModel.find();
        if (centres.length === 0) {
            const initialCentres = await vaccinationCentreModel.insertMany(initialCentreData);
            return response.status(200).json(initialCentres);
        }
        response.status(200).json(centres);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const addNewVaccinationCentre = async (request, response) => {
    const { name, location, slots } = request.body;

    try {
        const existingCentre = await vaccinationCentreModel.findOne({ name: name, location: location, slots: slots });
        if (existingCentre) {
            return response.status(409).send({ message: `A vaccination centre with the name ${name} already exists` });
        }
        const insertedCentre = await vaccinationCentreModel.create({ name, location, slots });
        response.status(201).json(insertedCentre);

    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const deleteVaccinationCentre = async (request, response) => {
    const { name } = request.body;

    try {
        const deletedCentre = await vaccinationCentreModel.deleteOne({ name: name });
        response.status(200).json(deletedCentre);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const getDosageDetailsGroupedByCentres = async (request, response) => {
    try {
        const dosageDetails = await vaccinationCentreModel.aggregate([
            {
                $unwind: '$dosages'
            },
            {
                $group: {
                    _id: '$_id',
                    centreId: { $first: '$_id' },
                    centreName: { $first: '$name' },
                    location: { $first: '$location' },
                    totalDosages: { $sum: 1 },
                    dosageTypes: { $addToSet: '$dosages.dosageType' }
                }
            },
            {
                $project: {
                    _id: 0,
                    centreId: 1,
                    centreName: 1,
                    location: 1,
                    totalDosages: 1,
                    dosageTypes: 1
                }
            }
        ]);

        response.status(200).json(dosageDetails);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const loginExistingAdmin = async (request, response) => {
    const { email, password } = request.body;

    try {
        const validAdmin = await adminModel.findOne({ email: email });
        if (!validAdmin) {
            return response.status(401).send({ message: 'Invalid email' });
        }
        if (await bcrypt.compare(password, validAdmin.password)) {
            const AUTH_TOKEN = jwt.sign({ email: validAdmin.email }, JWT_TOKEN);
            return response.status(201).json({ token: AUTH_TOKEN, firstName: validAdmin.firstName, lastName: validAdmin.lastName });
        }
        response.status(401).send({ message: 'Invalid Password!!' });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

module.exports = { addNewVaccinationCentre, getAllVaccinationCentreDetails, deleteVaccinationCentre, getDosageDetailsGroupedByCentres, loginExistingAdmin };
