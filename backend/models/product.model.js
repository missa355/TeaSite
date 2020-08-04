const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {type: String,required: true},
  price: {type: Number,required: true},
  link: {type: String,required: true},
  link_big: {type: String,required: true},
  rating: {type: Number, required: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;