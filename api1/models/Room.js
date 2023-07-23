import mongoose from "mongoose" 

const RoomSchema = new mongoose.Schema({
       title: {
        type: String , 
        required : true , 
        unique : true
       } ,
       price: {
        type: Number  , 
        required : true , 
        unique : true
       } ,
        maxPeople: {
        type : Number  , 
        required : true
       } ,
        roomNumbers: {
        type : [{number : Number , unavailableDates :[{type : [Date]}] }] , 
        required : true
       } ,
       
            
}
,{timestamps : true}) ; 


export default mongoose.model("Room",RoomSchema);
