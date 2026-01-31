const UserModal=require('../Model/UserModal');
const bcrypt=require('bcrypt');

const securePassword= async(password)=>{
    try {
        const passwordHash=await bcrypt.hash(password,10);  
        return passwordHash;
    } catch (error) {
        console.log(error.message);
    }
}

index= async(req,res)=>{
    const user=await UserModal.find({});
    res.render('index',{user});
}
form=(req,res)=>{
    res.render('register');
}
createuser= async(req,res)=>{
    try {
        const {fname,lname,email,mobile}=req.body;
        const spassowrd=await securePassword(req.body.password);
        const user=await UserModal.create({
         Firstname: fname,
         Lastname: lname,
        Email: email,
        Password: spassowrd,
        Mobile: mobile,
        is_admin:0
    })
    if(user){
        res.redirect('/')
    }
    else{
        res.redirect('/register')
    }
    } catch (error) {
        console.log(error.message)
    }
}
deleteUser=async (req,res)=>{
    const id=req.params.id;
    await UserModal.findByIdAndDelete(id);
    res.redirect('/');
}
editUser= async(req,res)=>{
    const id=req.params.id;
    const user=await UserModal.findById(id);
    res.render('edituser',{user});
}
updateUser= async(req,res)=>{
    try {
        const {id,fname,lname,email,mobile}=req.body;
        const password=await securePassword(req.body.password);
        await UserModal.findByIdAndUpdate(id,{
         Firstname: fname,
         Lastname: lname,
        Email: email,
        Password: password,
        Mobile: mobile
    })
    res.redirect('/');
    } catch (error) {
        console.log(error.message)
    }  
}
module.exports={
    index,
    form,
    createuser,
    deleteUser,
    editUser,
    updateUser
};
