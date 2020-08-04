const router = require('express').Router();
//creating Recipe object by requiring class
let product = require('../models/product.model');

//this the part that is triggerd by axios.get(localhost/Recipes). res.json send the data to axios as a json format
router.route('/').get((req, res) => {
    product.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { //if localhost:5000/add is called
  const name = req.body.name;
  const price = req.body.price;
  const link = req.body.link;
  const link_big = req.body.link;
  const rating = Number(req.body.rating)


  const newproduct = new product({name, price, link, link_big, rating});

  newproduct.save() //saves the recipe(which was made into proper form) in the mongodb database
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
