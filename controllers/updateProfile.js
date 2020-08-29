const fs = require("fs")

const path = require("path")

const User = require("../models/User")


module.exports = async (req, res) => {
    console.log(req.body.isImage)
    if(req.body.isImage){
        const imageName = "/images/profiles/" + Math.random().toString(36).substr(2, 8) + ".jpg"
        const image = req.body.image.replace(/data:image\/png;base64,/, "")
        const fullpath = __dirname.replace("controllers", "res") + imageName
        await fs.writeFile(fullpath, image, 'base64', (error) => {
            if(error) console.log("Problem Saving Image: " + error)
        })
        User.findOneAndUpdate(
            {
                _id: req.session.user._id
            }, 
            { $set: { 
                name: req.body.formData.value,
                admn: req.body.formData.admn,
                links:{
                    gh: req.body.formData.gh,
                    li: req.body.formData.li,
                    fb: req.body.formData.fb
                },
                image: imageName
            }}, 
            {new: true},
            (error, user) => {
                req.session.user = user
                return res.send({"error": error, "user": user})
            }
        )
    }
    else{
        User.findOneAndUpdate(
            {
                _id: req.session.user._id
            }, 
            { $set: { 
                name: req.body.formData.value,
                admn: req.body.formData.admn,
                links:{
                    gh: req.body.formData.gh,
                    li: req.body.formData.li,
                    fb: req.body.formData.fb
                }
            }}, 
            {new: true},
            (error, user) => {
                req.session.user = user
                return res.send({"error": error, "user": user})
            }
        )
    }
}