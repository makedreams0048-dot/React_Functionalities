const express = require("express");
const router = express.Router();

const Customer = require("../models/CustomerModel/Customer");


router.post("/customer/store",async(req,res)=>{
   
   try{
       
       const {name,email,phone} = req.body;

       const newContact = new Contact({
          name,
          email,
          phone
       });
       
       await newContact.save();

    res.json("Customer added successfully");

   }catch(error){
       
      res.json(error);
   }

})




router.get("/getCustomer",async (req,res)=>{
  
   try{
     const customer = await Customer.find();
     res.json(customer);
     
   }catch(error){
     res.json(error);
   }
})


module.exports = router;