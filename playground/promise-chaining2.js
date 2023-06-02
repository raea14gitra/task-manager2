// GOAL : Create promise-chaining2.js
// Load in mongoose and task-model
// remove a given task by id
// get and print the total no of tasks 

require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('647097abd7342671441f56a5').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

// GOAL :USE ASYNC N AWAIT
//  1 create delete task and count as an async fun
// accept id of task to remove
// use await to delete task and count up incomplete tasks
// return the count
// call the function and attach then/catch to log results

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed :false})
    return count
}

deleteTaskAndCount('647096b236e12b337c48bbb4').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})


