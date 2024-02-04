const express = require("express");
const router = express.Router();
const {Crud} = require('../models/crudModel');
const getUserIdFromToken= require('../middleware/auth.js');

router.delete("/", async(req, res) => {
    
    try {
        const id = req.cookies.id;
        const token = getUserIdFromToken(req,id);
       //console.log(token);
        const deletedPost = await Crud.findByIdAndDelete(id);
        if (!deletedPost) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
      } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports  = router;