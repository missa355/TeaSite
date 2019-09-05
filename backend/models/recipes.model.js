const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipename: {type: String,required: true},
  comp: {type: String,required: true},
  choose: {type: String,required: true},
  Rating: {type: Number, required: true},
  description: {type: String,required:true}
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;