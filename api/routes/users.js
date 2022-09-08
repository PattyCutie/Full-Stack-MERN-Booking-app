import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/controlUser.js";

const router = express.Router();

//CREATE /POST *use user Register function in coontrolAuth instead*
//router.post("/", createUser);

//verify token to grant permisstion
// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("Hello user, You are now logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user you are logged in and you can manage your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin you are logged in and you can manage all user's accounts")
// })

//UPDATE /PUT
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
