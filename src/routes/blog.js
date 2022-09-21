const router = require('express').Router();
const { request } = require('chai');
const Blog = require('../models/Blog')

// Your routing code goes here


// router.get('/blog',async(req,res)=>{
//     // res.json({ok:'blog'})
//    try {
//         const data=await  Blog.paginate({},{page: req.query.page ,limit:req.query.limit})

//    res.json({
//         status: "Success",
//         data
//     })

// }catch(e) {
//     res.status(400 ).json({
//         status: "failed",
//         // message: e.message,
//         message: 'either name or weight is missing'

//     })
// }
// })
router.get('/blog',async(req,res)=>{
    // res.json({ok:'blog'})
   try {
    let {page = 1, search = ""} = req.query;
        const data=await  Blog.find({topic:req.query.search}).limit(5).skip((Number(page)-1) * 5);

   res.json({
        status: "Success",
        data
    })

}catch(e) {
    res.status(400 ).json({
        status: "failed",
        // message: e.message,
        message: 'either name or weight is missing'

    })
}
})


router.post("/blog",async(req,res)=>{
    console.log(req.body)
    // res.send("ok")
try{
    const  datas = await Blog.create(req.body);
  
    res.json({
        status: "Success",
        datas
    })

}catch(e) {
    res.status(400 ).json({
        status: "failed",
        // message: e.message,
        message: 'either name or weight is missing'

    })
}
})
router.put("/blog/:id",async(req,res)=>{
    // res.send("ok")
try{
    const  datas = await Blog.updateOne({_id: req.params.id},req.body);
    const data=await Blog.findone({_id: req.params.id})
    res.json({
        status: "Success",
        data
    })

}catch(e) {
    res.status(400 ).json({
        status: "failed",
        // message: e.message,
        message: 'either name or weight is missing'

    })
}
})
router.delete("/blog/:id", async (req, res) => {
    // Write the code for fetch
    try {
        const datas = await Blog.deleteOne({_id: req.params.id});
        res.json({
            status: "Success",
            datas
        })

    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

});

module.exports = router;