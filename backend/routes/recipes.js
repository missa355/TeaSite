const router = require('express').Router();
let Recipe = require('../models/recipes.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const recipename = req.body.recipename;
  const comp = req.body.comp;
  const choose = req.body.choose;
  const Rating = Number(req.body.Rating)
  const description = req.body.description;

  const newRecipe = new Recipe({recipename, comp, choose, Rating, description});

  newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipes => {
      recipes.recipename = req.body.recipename;
      recipes.comp = req.body.comp;
      recipes.choose = req.body.choose;
      recipes.Rating = Number(req.body.Rating);
      recipes.description = req.body.description;

      recipes.save() //This part actually updates the data
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;