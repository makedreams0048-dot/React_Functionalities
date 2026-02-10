const mongoose = require("mongoose");


const customerSchema = new mongoose.Schema({

    name:{
       type:String,
       require:true
    },
    email:{
       type:String,
       require:true
    },
    phone:{
       type:String,
       require:true
    }


},{timeseries:true});


module.exports = mongoose.model("Customer",customerSchema);
