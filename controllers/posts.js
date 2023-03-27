const { v4 } = require("uuid");


let posts = [];


 const createPost = (req, res) => {
    //  res.send(req.body)
    //  console.log(req.body)
    posts.push({ ...req.body, id: v4() })
    res.send(posts)
}

 const readPost = (req, res) => {
    res.send(posts);
}


 const updatePost = (req, res) => {
    let { name, desc } = req.body
    let { id } = req.params
    let post = posts.find(post => post.id == id)
    if (name) {
        post.name = name
    }
    if (desc) {
        post.desc = desc

    }
    res.send(post)
}

 const deletePost = (req, res) => {
    let { id } = req.params //to get one param
    posts = posts.filter(post => post.id != id)
    res.send(posts)
}

 const searchPost = (req, res) => {
    let id = req.params.id
    let post = posts.find(post => post.id == id)
    res.send(post)
}

module.exports={searchPost,deletePost,updatePost,createPost,readPost}