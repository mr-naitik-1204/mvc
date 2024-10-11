const express=require('express')
const router=express.Router();

const HC=require('../Controller/HomeController')

router.get('/',HC.page)
router.get('/subdata',HC.subdata)

module.exports=router;


