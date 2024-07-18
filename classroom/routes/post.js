const express = require('express');
const router = express.Router();

router.get("/",(req, res) =>{
    res.send("this is get posts");
});
// get -> posts/id
router.get("/:id",(req,res) =>{
    res.send("This is get posts/id");
});
// post -> post posts
router.post("/",(req, res) =>{
    res.send("this is post posts")
})
// delete ->posts/id
router.delete("/:id",(req, res) =>{
    res.send("this is delete posts/id");
})

module.exports = router