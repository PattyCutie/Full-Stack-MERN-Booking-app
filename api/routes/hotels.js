import express from "express";
import Hotel from "../models/Hotel.js";

import { 
  countByCity, 
  createHotel, 
  deleteHotel, 
  getHotel, 
  getHotels, 
  updatedHotel } from "../controllers/controlHotel.js";
  import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE /POST
router.post("/", verifyAdmin, createHotel);

//UPDATE /PUT
router.put("/:id", verifyAdmin, updatedHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);

//Get by
router.get("/countByCity", countByCity)
router.get("/countByType", getHotels)

export default router;
