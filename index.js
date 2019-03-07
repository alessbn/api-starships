const express = require('express');
const bodyParser = require('body-parser');
const {Starship} = require('./mongooseSchemas.js');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/starships/', (req,res)=>{
  const { nombre, costo, pasajeros } = req.body;
  const newStarship = Starship({
      nombre: nombre,
      costo: costo,
      pasajeros: pasajeros
  });
  newStarship.save((err, starship)=>{
    (err) ? res.status(400).send(err.message) : res.status(201).send(starship)
  })
});

app.get('/api/starships/', (req, res) => {
  Starship.find({}, (err, starships) => {
      res.status(200).send(starships);
  });
});

app.get('/api/starships/:id/', (req, res) => {
  const { id } = req.params;
  Starship.findById(id)
      .exec()
      .then(starship => res.status(200).send(starship))
      .catch(err => res.status(404).send(err))
});   


app.listen(port, () => console.log(`Example app listening on port ${port}!`));