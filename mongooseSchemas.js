var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

mongoose.connect('mongodb://alejandra:123abc@ds161345.mlab.com:61345/starships', {useNewUrlParser: true});

const starshipSchema = new Schema({
    starship: {
        type: ObjectId,
    },
    nombre: {
        type: String,
        required: true
    },
    costo: {
        type: String,
        required: true
    },
    pasajeros: {
        type: String,
        required: true
    }
});

const Starship = mongoose.model('Starship', starshipSchema);
module.exports = {Starship}