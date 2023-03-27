const express=require("express")
const router=express.Router() // in the place of app
const { readPost, createPost, searchPost, deletePost, updatePost } = require("../controllers/posts");

//read
router.get('/posts', readPost)


//create
router.post('/posts',createPost)

//read with id  :id is dynamic
router.get('/posts/:id',searchPost)

//delete with id  :id is dynamic
router.delete('/posts/:id',deletePost)

//udpadte with id  update part of keys

router.patch('/posts/:id',updatePost)

module.exports=router
