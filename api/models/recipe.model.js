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
    ingredients: {
        type: [{quantity: String, name:String}],
        required: true
    },

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