const mongoose = require('mongoose');

const dosageSchema = new mongoose.Schema({
    dosageType: {
        type: String,
        required: true
    },
    dateAdministered: {
        type: Date,
        required: true
    }
});

const centreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    slots: {
        type: Number,
        required: true
    },
    dosages: {
        type: [dosageSchema],
        required: true
    }
},
{
    collection : "vaccinationCentre"
})


module.exports = mongoose.model('vaccinationCentre', centreSchema)
