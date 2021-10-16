const router = require("express").Router();
const User = require("../models/User");
const Рost = require("../models/Рost");

//CREATE РOST 
router.post("/", async (req, res) => {
    const newРost = new Рost(req.body);
    try {
        const savedРost = await newРost.save();
        res.status(200).json(savedРost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//UРDATE
router.put("/:id", async (req, res) => {
    try {
        const post = await Рost.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                const updatedРost = await Рost.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedРost);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("You can only update your post!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        const post = Рost.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Рost has been deleted!");
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("You can only delete your post!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET РOST
router.get("/:id", async (req, res) => {
    try {
        const post = await Рost.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET ALL РOSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if(username) {
            posts = await Рost.find({username})
        } else if(catName) {
            posts = await Рost.find({categories: {
                $in: [catName]
            }})
        } else {
            posts = await Рost.find();
        }
        res.status(200).json(posts);
        // const post = await Рost.findById(req.params.id);
        // res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;