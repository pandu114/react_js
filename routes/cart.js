const router = require('express').Router();
const Cart = require("../models/Cart");
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAutherization } = require('./verifyToken');

//CREATE CART

router.post("/", verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAutherization, async (req, res)=>{
    try{
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new:true}
        ) 
        res.status(200).json(updateCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAutherization, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Cart has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET CART
router.get("/find/:userId", verifyTokenAndAutherization, async(req,res)=>{
    try{
        const cart = await Cart.findOne({userId:req.params.userId});
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
});

//GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async(req, res)=>{
   
    try{
        let carts= await Cart.find();
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router;