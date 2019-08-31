const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipename: {type: String,required: true,unique: true,trim: true,minlength: 3},
  comp: {type: String,required: true,unique: true,trim: true,minlength: 3},
  choose: {type: String,required: true,unique: true,trim: true,minlength: 3},
  Rating: {type: Number, min: 0, max: 5},
  description: {type: String,required: true,unique: true,trim: true,minlength: 3}
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;