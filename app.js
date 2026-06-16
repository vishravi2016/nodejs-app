const express=require("express")
const app=express()

app.get("/",(req,resp)=>{
    resp.send("NodeJS app running inside Docker")
});

app.listen(3000,()=>{
    console.log("app is up and running on port 3000");
    
})