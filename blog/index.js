import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
const app = express();
app.set("view engine",'ejs')


const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
res.render("home")  
console.log("set");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
