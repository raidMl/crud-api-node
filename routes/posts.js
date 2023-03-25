const express=require("express")
const router=express.Router() // in the place of app
const { v4 } = require("uuid");

let posts = [

];
//read
router.get('/posts', (req, res) => {
    res.send(posts);
})


//create
router.post('/posts', (req, res) => {
    //  res.send(req.body)
    //  console.log(req.body)
    posts.push({ ...req.body, id: v4() })
    res.send(posts)
})

//read with id  :id is dynamic
router.get('/posts/:id', (req, res) => {
    let id = req.params.id
    let post = posts.find(post => post.id == id)
    res.send(post)
})

//delete with id  :id is dynamic
router.delete('/posts/:id',(req,res)=>{
    let {id}=req.params //to get one param
    posts=posts.filter(post=>post.id!=id)
    res.send(posts)
})

//udpadte with id  update part of keys

router.patch('/posts/:id',(req,res)=>{
    let {name,desc}=req.body 
    let {id}=req.params 
    let post=posts.find(post=>post.id==id)
    if(name){
      post.name=name
    }
    if(desc){
        post.desc=desc

    }
    res.send(post)
})

module.exports=router
