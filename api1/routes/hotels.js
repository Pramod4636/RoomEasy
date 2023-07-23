import express from "express" ; 
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin , verifyUSer, verifyToken } from "../utils/verifyToken.js";

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



//CREATE 
router.post("/",verifyAdmin,createHotel);

//Update 
router.put("/:id",verifyAdmin,updateHotel);

//Delete 
router.delete("/:id",verifyAdmin,deleteHotel);

// GET 
router.get("/:id",verifyAdmin,getHotel);

// GET ALL 
router.get("/",verifyAdmin,getHotels);


export default router ; 
