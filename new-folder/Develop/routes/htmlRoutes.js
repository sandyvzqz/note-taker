//import required libraries 
const router = require('express').Router();
const path = require('path');

//sets index.html as the default 
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//notes router 
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});


module.exports = router;