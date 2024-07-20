import express from 'express';
import multer from 'multer';
// import path from 'path'

// const upload = multer ({dest:"uploads/"})
const storage = multer.diskStorage({
    destination:function(req,res,cb){
        return cb( null,"./uploads")
    },
    filename:function(req,file,cb){
return cb(null,`${Date.now()}-${file.originalname}`)
    },
});

const upload = multer({storage})


// Create an instance of Express
const app = express();
app.set("view engine",'ejs')
// app.set("views",path.join(__dirname,"views"))

// Define a port

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// Define a simple route
app.get('/', (req, res) => {
res.render("")  
});


app.post('/images', upload.fields([{ name: 'profileimage', maxCount: 1 }, { name: 'coverimage', maxCount: 1 }]), (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.redirect('/');
});
// app.post("/uploads", upload.single("profileimage"),(req,res)=>{
//     console.log(req.body);
//     console.log(req.file);
// res.redirect("/")
// })

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
