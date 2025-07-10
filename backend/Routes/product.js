var express = require('express');
const router = express.Router();
var product  = require('../model/product');
var upload = require('../middleware/multer');

router.post('/',upload.array("images",5),async(req,res)=>{
    try {
        console.log("h")
        const {proName,price,dis,stock}=req.body
        const imagePaths =req.files.map(file=>file.filename)
        const newproduct = new product({
            proName,
            price,
            dis,
            stock,
            images:imagePaths
        })
        await newproduct.save();
        res
        .status(200)
        .send({message:"Product data added"})
    } catch (error) {
        res
        .status(500).
        send(
            {
            message:"Something went wrong",
            error:error.message
        })
    }
})

//api to view all the products in the collection
router.get('/',async(req,res)=>{
    try {
        const products = await product.find();
        res.status(200).json(products)
    } catch (error) {
        res
        .status(500)
        send(
            {
                message:"Something went wrong",
                error:error.message
            }
        )
    }
})

//api to delete a document from the collection

router.delete('/:id',async(req,res)=>{
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Item deleted successfully!!"})
    } catch (error) {
        res
        .status(500).
        send(
            {
            message:"Something went wrong",
            error:error.message
        })  
    }
})

//api to update a single document in the collection

router.put('/:id', upload.single("images"), async (req, res) => {
    try {
      const { id } = req.params;
      const { proName, price, dis, stock } = req.body;
  
      const updatedFields = {
        proName,
        price,
        dis,
        stock
        
      };
  
      if (req.file) {
        // If new image uploaded, update the image path
        updatedFields.images = [req.file.filename]; // OR full path if needed
      }
  
      const updatedProduct = await product.findByIdAndUpdate(id, updatedFields, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });


module.exports = router

