const express  = require('express');

const router = express.Router();
const MenuItem = require('./../models/menuItem');


router.post('/', async (req, res) => {
  try {
    const data = req.body  // req body contain  the person data
    const newMenu = new MenuItem(data);  // create a new person document uisng the  mongoose model

    // save the new person data in database
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }

  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }

})
// GET method for menuItem card
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data fetch');
    res.status(200).json(data);



  }
  catch (err) {                                                    

    console.log(err);
    res.status(500).json({ error: 'internal server error' });

  }
})
// validation for menu taste type
    router.get('/:tasteType', async (req, res) => {
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType =='sour'){
      const response = await MenuItem.find({taste : tasteType});
      console.log("response fetched");
      res.status(200).json(response); 
    }
    else{
      res.status(404).json({error: 'invalid work type'});
    }

  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error'})

  }
})
    

// commented added for testing purpose
module.exports = router;