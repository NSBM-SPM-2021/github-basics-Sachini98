const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id:{type:String, required: true},
    userName:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:String, required: true},
    medium:{type:String, required: true},
    grade:{type:String, required: true},
    school:{type:String, required: true},
    year:{type:String, required: true},
});

module.exports = mongoose.model('Appointment',appointmentSchema);