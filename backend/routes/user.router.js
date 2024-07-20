 import express from "express"
import {handlegetalluser,handlegetuserbyid,handleupdateuser,handleDelteuser} from '../controllers/user.controller.js'
// import { g } from "mongoose";

//  we'll create a seperate route for  user 

const userRouter = express.Router();
userRouter.get("/",handlegetalluser)


// // POST route to create a new user
// router.post("/alldetails", async (req, res) => {
//     console.log("Received a POST request to /user");
//     const userDetails = req.body;
//     console.log("Received data:", userDetails);
  
//     // Check if required fields are present
//     if (!userDetails || !userDetails.username || !userDetails.name) {
//       return res.status(400).json({ message: "Missing required fields: username and name" });
//     }
  
//     try {
//       const user = await User.create({
//         username: userDetails.username,
//         name: userDetails.name,
//       });
//       console.log("User created:", user);
//       res.status(201).json(user);
//     } catch (error) {
//       console.error("Error creating user:", error);
//       res.status(500).json({ message: "Error creating user", error: error.message });
//     }
//   });
  
//   router.get("/userpage",async(req,res)=>{
//  
//   })
  
userRouter
  .route("/:id").get(handlegetuserbyid).patch(handleupdateuser).delete(handleDelteuser)

  // .delete(async(req,res)=>{
  //   const userdelete= await User.findByIdAndDelete(req.params.id)
  //   res.send(userdelete)
  // })s


// module.exports = {userRouter}
export {userRouter}