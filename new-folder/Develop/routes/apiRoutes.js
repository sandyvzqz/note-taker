//import necessary dependencies
const router = require('express').Router();
//library that generates random id
const {v4: uuidv4} = require('uuid');
const fs = require('fs');

//Get request to notes endpoint
router.get('/api/notes', async (req,res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf-8'))
    res.json(dbJson);
});

//Post request to post notes
router.post('/api/notes', (req,res)=> {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson)); 
    res.json(dbJson)
});

//delete request for specified note id
router.delete('/api/notes/:id', (req,res) => {
    //reads the data from file and stores it in a variable
    let data = fs.readFileSync('db/db.json', 'utf-8');
    //parses the data
    const dataJson = JSON.parse(data);
    const newNotes = dataJson.filter((note)=> {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('db/db.json', JSON.stringify(newNotes))
    res.json("Note deleted");
});

module.exports = router;