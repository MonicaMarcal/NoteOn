let express = require('express');
let router = express.Router();
const Note = require('../models/note.js');
const withAuth = require('../middlewares/auth');

router.post('/', withAuth, async function(req, res) {
   const { title, body } = req.body;

      try {
        let note = new Note({title: title, body: body, author: req.user._id});

        await note.save();
          res.json(note);
      } catch (error) {
          res.status(500).json({error: 'Problem to create a new note'});
      }
 
 });

 //baixa uma nota
 router.get('/:id', withAuth , async(req,res)=>{
  try {
      const {id} = req.params
      let note = await Note.findById(id)
      if(isOwner(req.user, note)){
          res.json(note)
          
      }else{
          res.status(403).json({error: 'Permission denied'})
      }
  } catch (error) {
      res.status(500).json({error: 'Problem to get a note'})
  }
})

//baixa todas as notas
router.get('/', withAuth, async function(req, res) {
    try {
      let notes = await Note.find({author: req.user._id })
      res.send(notes)
    } catch (error) {
        res.status(500).json({error: 'Problem to get all notes'})
    }
});

//atualizando uma nota
router.put('/:id', withAuth, async function(req, res) {
    const { title, body } = req.body;
    const { id } = req.params;
    try{
        let note = await Note.findById(id);
        if(isOwner(req.user, note)){
            let note = await Note.findOneAndUpdate(
                {_id: id},
                { $set: { title: title, body: body}},
                { upsert: true, 'new': true }
              )
            res.json(note)
        }else{
            res.status(403).json({error: 'Permission to update denied'})
        }
    }catch(error){
        res.status(500).json({error: 'Problem to update a notes'})
    }
});


 //metodo para verificar se usuario é o dono da nota
 const isOwner = (user, note)=>{
  if(JSON.stringify(user._id) == JSON.stringify(note.author._id)){
      return true
  }else{
      return false
  }
}

 module.exports = router;