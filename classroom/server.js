const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
const flash = require("connect-flash");
// Home


const sessionOptions = {
        secret: "IamAmitkumar",
        resave: false,
        saveUninitialized: true,
};
app.use(session(sessionOptions));// it will work/run for the every route and create s.id (session id);
app.use(flash());
app.get("/register" ,(req, res) =>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;    // here we can define our own property
    if(name === "anonymous"){
        req.flash("error","user not registered");
    }
    else{
        req.flash("success","user registered");
    }
    // req.flash("Success","User registered Successfully");
    res.redirect("/hello");
})
app.get("/hello",(req,res) =>{
    // console.log(req.flash("Success"));
    res.locals.success = req.flash("Success");
    res.locals.error = req.flash("error");
    res.render("page.ejs",{name : req.session.name});
})
// // "/"
// app.use(cookieParser("secretcode"));
// app.get("/",(req,res) =>{
//     console.log("Cookie->",req.cookies)
// });

// // cookie demo
// app.get("/getsignedcookie",(req,res) =>{
//     res.cookie("country","United States",{signed:true});
//     res.send("Getsignedcookie successfull");
// })
// app.get("/verify",(req, res) =>{
//     let {country} = req.signedCookies;
//     console.log(country);
//     res.send("verified");
// })

// app.get("/cookie",(req,res) =>{
//     res.cookie("username","John Doe");
//     res.send("Cookie set");
// });
// // get users
// app.use("/users",users);
// app.use("/posts",posts);

// // get posts

app.listen(3000,() =>{
    console.log("Server is listening on port 3000");
}) 