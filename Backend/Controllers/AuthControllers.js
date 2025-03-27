const User = require('../Schema/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const SignUp = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({error : "User already exists,you can login"})
        }
        const usermodel  = new User({name,email,password});
        usermodel.password = await bcrypt.hash(password,10);
        await usermodel.save();
        res.status(200).json({message : "User registered sucessfully"})

    } catch (error) {
        res.status(500).json({error  : "Internal server error !"})
        
    }
}

const login = async(req,res) => {
   try {
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({error : "User not Found,Please register"})
    }
    const isMatch = await bcrypt.compare(password,user.password);   
    if(!isMatch){
        return res.status(400).json({error : "Invalid credentials"})
    }
    const token = jwt.sign({id : user._id},process.env.JWT_SECRET,{expiresIn : "1d"})

    res.status(200).json({token,message : 'Login Sucessfully !'})
    
   } catch (error) {
    res.status(500).json({error, message : 'Internal server error !'})
   }
}

module.exports = {SignUp,login}
