const mongoose = require("mongoose");

const commentSchema = require ('./comments.model')

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
    dishType: {
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
    },
    comments:[commentSchema]
})

const recipeModel = mongoose.model('recipe', recipeSchema);

module.exports = recipeModel;