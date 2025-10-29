const express = require('express');

const router = express.Router();
const Person = require('./../models/person');


router.post('/', async (req, res) => {
  try {
    const data = req.body  // req body contain  the person data
    const newPerson = new Person(data);  // create a new person document uisng the  mongoose model

    // save the new person data in database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }

  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }

})

// GET method for person
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data fetch');
    res.status(200).json(data);

  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });

  }
})

// validation for work type
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    }
    else {
      res.status(404).json({ error: 'invalid work type' });
    }

  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' })

  }
})

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,             // ✅ return updated document
      runValidators: true,   // ✅ fixed: use colon, not equals sign
    });

    if (!response) {
      return res.status(404).json({ error: 'person not found' });
    }

    console.log('data updated');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id; // ✅ corrected
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: 'person not found' });
    }

    console.log('data deleted');
    res.status(200).json({ message: 'person deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
});



module.exports = router;




