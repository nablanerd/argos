const express = require('express');
const app = express();
const path = require ('path');

const cors = require('cors');


const db = require('./models'); 

app.use(express.json())

app.use(cors());

/**
 * @route   GET api/argos
 * @desc    Get All Argos
 * @access  Public
 */

app.get('/api/argos', (req, res) => {
  
      return db.Argo.findAll( )
        .then((argos) => res.send(argos))
        .catch((err) => {
          console.log('There was an error querying argos', JSON.stringify(err))
          return res.send(err)
        });
});
  
/**
 * @route   POST api/argos
 * @desc    Create An Argo
 * @access  Public
 */
app.post('/api/argos', (req, res) => {

    const { name } = req.body
  
     return db.Argo.create( { name })
      .then((argo) => res.send(argo))
      .catch((err) => {
        console.log('***There was an error creating a argo', JSON.stringify(argo))
        return res.status(400).send(err)
      }) 
  
    });


    // Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


/* 
BOOT
 */  
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

    
