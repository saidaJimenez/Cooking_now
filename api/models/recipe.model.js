const mongoose = require("mongoose");



const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diet: {
        type: String,
        enum: ['vegano', 'vegetariano', 'omnivoro'],
        required: true
    },
    dishtype: {
        type: String,
        required: true,
        enum: ["primer plato", "segundo plato", "aperitivo", "postre", "salsa"]
    },
    ingredients:[{
       quantity : String,
       ingredient : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'ingredient'
       }
    }],
    time: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['fácil', 'medio', 'difícil']
    },
    preparation: {
        type: String,
        required: true
    }
})

const recipeModel = mongoose.model('recipe', recipeSchema);

module.exports = recipeModel;