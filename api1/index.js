import express from "express" 
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js" //must add .js extenssion
import usersRoute from "./routes/users.js" //must add .js extenssion
import hotelsRoute from "./routes/hotels.js" //must add .js extenssion
import roomsRoute from "./routes/rooms.js" //must add .js extenssion
import cookieParser from "cookie-parser"
const app = express();
dotenv.config();

//midlleware 
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
     const errorStatus = err.status || 500 ; 
     const errorMessage = err.message || "Something wet Wrong! ";
    return res.status(errorStatus).json(
        {
            success : false , 
            status : errorStatus , 
            message : errorMessage,
            stack: err.stack
        }
        );
});




const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        
    }
    catch(error)
    {
        console.log("Disconnected mongodb");
         throw error;
    }
}
mongoose.connection.on("disconnected",()=>{
    connect();
    console.log("mongoDB disconnected");
});

mongoose.connection.on("connected",()=>{
    console.log("mongoDB is Connected");
});

app.get('/',(req,res)=>{
    res.send("hello first rquest");
})

app.listen(8800,()=>{
    connect();
    console.log("Connected to backend!");
});
