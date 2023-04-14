const { Router } = require('express');
const router = Router();
const postControllers = require("./controllers/post")

router.get("/all-posts", postControllers.getPosts)
router.post("/new-post", postControllers.createPost)
router.put("/update-post/:id", postControllers.updatePost)
router.delete("/delete-post/:id", postControllers.deletePost)
 
module.exports = router