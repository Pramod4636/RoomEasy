import express from "express" ; 
import { createRoom, deleteRoom, updateRoom , getRoom , getRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE 
router.post("/:hotelid",verifyAdmin,createRoom);

//Update 
router.put("/:id",verifyAdmin,updateRoom);

//Delete 
router.delete("/:id",verifyAdmin,deleteRoom);

// GET 
router.get("/:id",verifyAdmin,getRoom);

// GET ALL 
router.get("/",verifyAdmin,getRooms);



export default router ; 
