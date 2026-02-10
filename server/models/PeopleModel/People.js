const mongoose =  require("mongoose");


const PeopleSchema = new mongoose.Schema({


  name:{
    type:string,
    require:true
  },

},{timestamps:true})


module.exports=mongoose.model("People",PeopleSchema);