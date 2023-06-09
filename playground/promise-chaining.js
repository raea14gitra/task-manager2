require('../src/db/mongoose')
const User = require('../src/models/user')

// 6473a544653d732a448bb8fb
// User.findByIdAndUpdate('64706ed36054a6571cf937e2',{age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count

}
updateAgeAndCount('64706ed36054a6571cf937e2',2).then((count )=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
