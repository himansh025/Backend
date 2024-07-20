// inside the controller there are fnc which are atteced to our route
// import { module } from 'mongoose';
import {User} from '../models/user.model.js'



const handlegetalluser=async (req,res)=>{
    const alluser= req.body
    console.log("this is index route",alluser);
    // res.send(alluser)   
    try {
        const details = await User.find({});
        console.log(details);
        // Construct HTML list (if you need it for some reason)
        const all = `<ul>${details.map(data => `<li>${data.name} ${data.username}</li>`).join('')}</ul>`;
        res.send(details);  // Or send `all` if you need to send the HTML
      } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
    };

const handlegetuserbyid= async(req,res)=>{
        const byid = await User.findById(req.params.id)
     res.send(byid)
}
   const handleupdateuser= async(req,res)=>{
      const updateuser= await User.findByIdAndUpdate(req.params.id,{"name":"rohit"})
      res.send(updateuser)
    }

    const handleDelteuser = async(req,res)=>{
      const deleteuser= await User.findByIdAndDelete(req.params.id)
      res.send(deleteuser)
    }

export {handlegetalluser,handleupdateuser,handlegetuserbyid,handleDelteuser}
