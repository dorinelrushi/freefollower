const router = require("express").Router();
const User = require("../models/user");
router.get("/",(req,res,next)=>{
    res.render("index");
})

router.get("/profile",(req,res,next)=>{
    res.render("profile");
})
router.post("/singup",(req,res,next)=>{
   var user = new User(req.body);
  
   user.save(function(err){
       if(err){
           console.log(err);
       }
   })
   res.redirect("/profile")
})



module.exports = router;