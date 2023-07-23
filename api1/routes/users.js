import express from "express" ; 
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUSer } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hellow user , you are logged in ");
});

router.get("/checkuser/:id",verifyUSer,(req,res,next)=>{
    res.send("hellow user , you are logged in and you can delete your account ");
});

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hellow Admin , you are logged in and you can delete your account ");
});


//Update 
router.put("/:id",updateUser);

//Delete 
router.delete("/:id",deleteUser);

// GET 
router.get("/:id",getUser);

// GET ALL 
router.get("/",getUsers);


export default router ; 
