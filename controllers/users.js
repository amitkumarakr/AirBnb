const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.getsignup = (req,res) =>{
    res.render("./listings/users/signup.ejs");
}

module.exports.postsignup = async (req,res) =>{
    try{
     let {username, email, password} = req.body;
     const newUser =  new User({email,username});
     let registeredUser = await User.register(newUser,password);
     console.log(registeredUser);
     req.login(registeredUser,(err) =>{
         if(err){
             return next(err);
         }
         req.flash("success","Welcome to Wanderlust!");
     res.redirect("/listings")
     })
     
    }
    catch(e){
     req.flash("error",e.message);
     res.redirect("/signup")
    }
}

module.exports.getlogin =(req,res) =>{
    res.render("./listings/users/login.ejs");
}

module.exports.postlogin =async function(req, res) {
    req.flash("success","Welcome back to the Wanderlust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }

module.exports.logout =(req,res,next) =>{
    req.logout((err) =>{        // this is the callback function
        if(err){
            return next(err);
        }
        req.flash("success","Logged out");
        res.redirect("/listings")
    });
   
}