const asyncHandler = require('express-async-handler');
const User = require("../Models/userModel")

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, passsword, pic} = req.body;

    if(!name || !email || !passsword){
        res.status(400);
        throw new Error("Please Enter all the Details");
    }

    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400);
        throw new Error("User already Exists");
    };

    const user = await User.create({
        name,
        email,
        passsword,
        pic,
    });

if(user){
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
    })
} else {
    res.status(400);
    throw new Error("Failed to create the user");
}
});

module.exports = { registerUser };