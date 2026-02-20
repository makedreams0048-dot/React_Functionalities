const mongoose =  required("mongoose");

const customerSchema = new mongoose.Schema({

   name:{
      type:String,
      required:true
   },
   email:{
      type:String,
      required:true
   }

},{timestamp:true});


module.exports =  mongoose.model("Customer",customerSchema);

