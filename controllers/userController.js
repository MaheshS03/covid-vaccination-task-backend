const vaccinationCentreModel = require('../models/vaccinationCentreModel')
const userModel = require('../models/userModel')
const initialUserData = require('../data/initialUserData')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const JWT_TOKEN = 'ashbkjcxhuiaklworuybsskhuie'

const displayUserData = async (request, response) => {
    const { email } = request.body
    try {
       
        const authenticatedUser = await userModel.findOne({ email: email });
        if (authenticatedUser) {
            return response.status(200).json(authenticatedUser);
        }
        response.status(404).json({ message: 'User not found' });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};


const bookingVaccinationCentre = async (request, response) => {
    const { centreName, userId } = request.body

    try {
        const centre = await vaccinationCentreModel.findOne({ name: centreName });

        if (!centre) {
            return response.status(404).json({ message: 'Vaccination center not found' });
        }

        if (centre.slots <= 0) {
            return response.status(400).json({ message: 'No slots available' });
        }

        const user = await userModel.findById(userId);

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        if (user.bookedCentre === centreName) {
            return response.status(400).json({ message: 'User has already booked a slot at this center' });
        }

        centre.slots -= 1;
        await centre.save();

        user.bookedCentre = centreName;
        await user.save();

        response.json({ message: 'Booking successful', centre });
    } 
    catch (error) {
        response.status(500).send({ message: error.message });
    }
}


const searchVaccinationCentre = async(request, response) => {
    const { location, name } = request.body

    try {
        let query = {}
        if (location) {
            query.location = { $regex: location, $options: 'i' } 
        }
        if (name) {
            query.name = { $regex: name, $options: 'i' }
        }

        const centres = await vaccinationCentreModel.find(query);
        response.json(centres);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
}

const getVaccinationCentreDetails = async(request, response) =>
{
    try {
        const centres = await vaccinationCentreModel.find()
        response.status(200).json(centres)
    }
    catch (error) {
        response.status(500).send({ message: error.message })
    }
}
const loginExistingUser = async (request, response) => {
    const { email, password } = request.body;

    try {
        const validUser = await userModel.findOne({ email: email });
        if (!validUser) {
            return response.status(401).send({ message: 'Invalid email' });
        }
        if (await bcrypt.compare(password, validUser.password)) {
            return response.status(201).json({ firstName: validUser.firstName, lastName: validUser.lastName });
        }
        response.status(401).send({ message: 'Invalid Password!!' });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const registerNewUser = async(request, response) => {
    const encryptedPassword = await bcrypt.hash(request.body.password, 10)

    const user = new userModel({
        firstName : request.body.firstName,
        lastName : request.body.lastName,
        email : request.body.email,
        password : encryptedPassword
    })
    try{
        const existingUser = await userModel.findOne({email : request.body.email})
        if(existingUser)
        {
            return response.status(409).send({message : `Already existing user!!`})
        }
        const newUser = await user.save()
        return response.status(201).json(newUser)
    }
    catch(error)
    {
        response.status(500).send({message: error.message})
    }
}

module.exports = {displayUserData, bookingVaccinationCentre, searchVaccinationCentre, getVaccinationCentreDetails, loginExistingUser, registerNewUser}