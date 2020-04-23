const express= require('express');
const router = express.Router()
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact')

router.get('/', async(req,res)=>{
    try {
        const contacts=await Contact.find()
    res.json(contacts)
     } catch (error) {
        res.status(500).send('server error')
    }
 })


router.post('/', [
    check('name','Name is required').not().isEmpty()], async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
           }
           const {name,email,phone,type}=req.body
           try {
               
            const newcontact=new Contact({
                name,
                email,
                type,
                phone
            })
            const updatedcontact=await newcontact.save()
            res.json(updatedcontact)
           } catch (error) {
               console.log(errors.message)
               res.status(500).send('server error')
           }
})

router.put('/:id', async (req, res) => {
    const {name, email, phone, type} = req.body;
  
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
  
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({msg: 'Contact not found'});
  
      contact = await Contact.findByIdAndUpdate(
        req.params.id,
        {$set: contactFields},
        {new: true},
      );
  
      res.json(contact);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  });

router.delete('/:id', async(req,res)=>{
    try {
        let contact = await Contact.findById(req.params.id);
    
        if (!contact) return res.status(404).json({msg: 'Contact not found'});
    
        await Contact.findByIdAndRemove(req.params.id);
    
        res.json({msg: 'Contact removed'});
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})

module.exports=router