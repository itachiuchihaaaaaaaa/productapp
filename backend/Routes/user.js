var express = require("express");
const router = express.Router();
const userModel = require("../model/user");

// Signup
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    await userModel(req.body).save();
    res.status(200).send({ message: "User added successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong", error: error.message });
  }
});

// for login
router.post('/login',async(req,res)=>{
    try {
        const user = await userModel.findOne(
                                {username:req.body.username});
        if(!user){
            return res.send({message:"User not found"})
        }
        if(user.password === req.body.password){
            return res
                .status(200)
                .json({message:`Welcome ${user.username}`,user})
        }
        return res.send({message:"Invalid credential"})

    } catch (error) {
        res
        .status(500).
        send(
            {
            message:"Something went wrong",
            error:error.message
        })
    }
})

module.exports = router
