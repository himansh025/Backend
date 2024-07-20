import express from "express";
// import data from './MOCK_DATA.json' assert { type: 'json' };
import connectmongodb from "./connection.js";
import {userRouter} from './routes/user.router.js'

// model view controller
// controller manupulate the model and model update the view


// call MongoDB
connectmongodb("mongodb://localhost:27017/my")


const app = express();
const PORT = 2000;
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());
app.use("/api/user",userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// GET route for the root path to return JSON data
// app.get("/user", (req, res) => {});

//  app.get("/api/users:id",(req,res)=>{
//     const  html =`<ul>
//     ${data.map((user)=> `<li>
//         ${user.first_name}
//         </li>`
//     )}
//     </ul>`
// res.send(html)
//  })

// app.get("/api/users/:id", (req, res) => {
//   // const id = Number(req.params.id);
//   // const user = data.find((user)=> user.id === id);
//   //    return res.json(user)
//   //    console.log(user);
//   // res.send(user)
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });
