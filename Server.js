const express = require('express');
const connectDB=require('./config/db')
const App = express();

connectDB();

App.use(express.json({extended:false}))

App.get('/',(req,res)=>res.send('hello backend'))

App.use('/api/contact',require('./Routes/contactuser'))
const PORT=process.env.PORT ||5000

App.listen(PORT,()=>console.log('server started'))