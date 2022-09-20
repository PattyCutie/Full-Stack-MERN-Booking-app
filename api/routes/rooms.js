import express from "express";
import Room from "../models/Room.js";

import { createRoom, 
  deleteRoom, 
  getRoom, 
  getRooms, 
  updatedRoom, 
  updatedRoomAvailability} from "../controllers/controlRoom.js";
  import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE /POST
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE /PUT
router.put("/:id", verifyAdmin, updatedRoom)
router.put("/availability/:id", updatedRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL

router.get("/", getRooms);

export default router;