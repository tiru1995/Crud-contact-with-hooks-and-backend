const mongoose=require('mongoose');

const contactschema=mongoose.Schema({
    
    name:{
      type:String,
      require:true
},
email:{
    type:String,
    require:true
},
phone:{
    type:String
    
},
type:{
type:String,
default:'personal'
},
date:{
    type:Date,
    default:Date.now()
}
})

module.exports=mongoose.model('contact',contactschema)
