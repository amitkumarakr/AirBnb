const express = require('express');
const router = express.Router()

router.get("/",(req, res) =>{
    res.send("this is get users");
});
// get -> users/id
router.get("/:id",(req,res) =>{
    res.send("This is get users/id");
});
// post -> post users
router.post("/",(req, res) =>{
    res.send("this is post users")
})
// delete ->users/id
router.delete("/:id",(req, res) =>{
    res.send("this is delete users/id");
})


module.exports = router;