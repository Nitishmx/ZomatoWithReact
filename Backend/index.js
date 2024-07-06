let express=require("express")
let app=express()
let mongoose=require("mongoose")
let cors=require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
let bcrypt=require('bcrypt')
let jwt=require("jsonwebtoken")
let User=require('./model/dataBase')
mongoose.connect("mongodb://127.0.0.1:27017/zomato").then(()=>{
    console.log("database easily connect");
}).catch(()=>{
    console.log("some error create to connect database");
})

app.get('/',(req,res)=>{
    res.send("this is home route create")
})

app.post('/signupdata',async (req,res)=>{
    let {firstName,email,password}=req.body
    console.log(firstName,email,password,"frontend data");

    // database find email id
    let user= await User.findOne({email})
    if (user) {
        console.log("this user is already exist");
        res.send("User already exist")
        
        
    }
    else{
        password=await bcrypt.hash(password,10)
        console.log("password",password);
        let userData=new User({
            firstName:firstName,
            email:email,
            password:password
        })
        await userData.save()
        
        res.send("Successfuly Account create")

    }
})


app.post('/login', async (req,res)=>{
    console.log("this is backend part");
    let{email,password}=req.body
    console.log("this data is backend part..................",password);
    let loginData=await User.findOne({email:email})
    if (!loginData) {
        res.send("user is not found")
        
    }
    else{
        let validPass=await bcrypt.compare(password,loginData.password)
        if (!validPass) {
            res.send("please enter correct password")
            
        }
        else{
            let convertString=JSON.stringify(loginData)
            let token=jwt.sign(convertString,"this is token")
            res.send({token,loginData})
        }
    }

   
})



app.listen(8000,()=>{
    console.log("server is runing");
})
