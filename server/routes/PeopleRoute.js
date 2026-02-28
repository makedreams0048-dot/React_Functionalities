const express =  require("express");
const router = express.Router();


const People =  require("../models/PeopleModel/People");

//People Create
router.post("/create", async (req,res)=>{
    try{
        const newPeople = await People.create(req.body);
        dd(newPeople);
        res.status(201).json(newPeople);
    }catch(error){
        res.status(400).json({error:error.message})
    }
});


router.get("/read",async(req,res)=>{
     try{
      
         const getPeople = await People.find();
         res.status(201).json(getPeople);
       
     }catch(error){

         res.status(500).json({error:error.message})
     }
});


router.get("/edit/:id",async(req,res)=>{
     try{
      
         const getPeople = await People.findById(req.params.id);
         res.status(201).json(getPeople);
       
     }catch(error){

         res.status(500).json({error:error.message})
     }
});


router.put("/update/:id",async(req,res)=>{
     try{
      
         const getPeople = await People.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
          );
         res.status(201).json(getPeople);
       
     }catch(error){

         res.status(500).json({error:error.message})
     }
});


router.delete("/delete/:id", async(req,res)=>{

   try{
     
      const deletePeople = await People.findByIdAndDelete(req.params.id);
      res.status(200).json("People Data Successfully Deleted",deletePeople);

   }catch(error){

      res.status(500).json({error:error.message})

   }
 
})


module.exports = router;