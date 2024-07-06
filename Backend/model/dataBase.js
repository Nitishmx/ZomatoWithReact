let mongoose=require("mongoose")
let useSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})

let User=mongoose.model("User",useSchema)
module.exports=User