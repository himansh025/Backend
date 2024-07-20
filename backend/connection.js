import mongoose from "mongoose";

 const connectmongodb=async(url)=>{

   return mongoose.connect(url)
    .then(() => { console.log("Mongoose connected"); })
    .catch((error) => { console.error("Connection error:", error); });
  
 } 
export default connectmongodb;