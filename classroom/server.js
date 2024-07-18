const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
// Home

// "/"
app.use(cookieParser("secretcode"));
app.get("/",(req,res) =>{
    console.log("Cookie->",req.cookies)
});

// cookie demo
app.get("/getsignedcookie",(req,res) =>{
    res.cookie("country","United States",{signed:true});
    res.send("Getsignedcookie successfull");
})
app.get("/verify",(req, res) =>{
    let {country} = req.signedCookies;
    console.log(country);
    res.send("verified");
})

app.get("/cookie",(req,res) =>{
    res.cookie("username","John Doe");
    res.send("Cookie set");
});
// get users
app.use("/users",users);
app.use("/posts",posts);

// get posts

app.listen(3000,() =>{
    console.log("Server is listening on port 3000");
}) 