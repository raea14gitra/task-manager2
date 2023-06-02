const mongoose = require('mongoose')
// const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true

})

// const me = new User({
//     name : '  Raea  ',
//     email : 'MIKE@GMAIL.COM',
//     password : 'phone098!'
// })
// me.save().then(()=>{
//     console.log(me)

// }).catch((error)=>{
//     console.log('Error!',error)
// })

// Goal : Create a model for task
// Define the model with description and completed fields
// Create a new instance of model
// Save the model to the database


// const task = new Task({
//     description : 'Learn the mongoose library',
//     completed : false
// })
// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })