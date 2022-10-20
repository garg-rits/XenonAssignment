const mongoose=require("mongoose");

const employeeSchema= new mongoose.Schema({
    userid:{
       type:String,
       required:true
    },
    remail:{
        type:String,
        required:true,
        unique:true
    },
    epass:{
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", employeeSchema);
module.exports=Register;
