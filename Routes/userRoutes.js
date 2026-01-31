const express=require('express');
const router=express.Router();
const User=require('../Controller/UserController')

router.get('/',User.index);
router.get('/register',User.form);
router.post('/register',User.createuser);
router.get('/delete/:id',User.deleteUser);
router.get('/edit/:id',User.editUser);
router.post('/update',User.updateUser);

module.exports=router;