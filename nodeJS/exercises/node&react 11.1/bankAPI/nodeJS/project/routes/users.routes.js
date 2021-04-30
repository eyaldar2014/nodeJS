const express = require('express');

const router = express.Router();
const users = require('../data.json')
const bankController = require('../controllers/bank.controllers')

router.get('/tryConnection',(req,res)=>{
  bankController.tryConnection(req, res)
});
router.get('/cashFilter',(req,res)=>{
  bankController.cashFilter(req, res)
});
router.get('/showUserDetails',(req,res)=>{
  bankController.showUserDetails(req, res)
});
router.get('/showAllUsersDetails',(req,res)=>{
  bankController.showAllUsersDetails(req, res)
});

router.post('/activateUser',(req,res)=>{
  bankController.activateUser(req, res)
});
router.post('/addUser',(req,res)=>{
  bankController.addUser(req, res)
});
router.post('/deposit',(req,res)=>{
  bankController.depositing(req, res)
});
router.post('/updateCredit',(req,res)=>{
  bankController.updateCredit(req, res)
});
router.post('/withdraw',(req,res)=>{
  bankController.withdraw(req, res)
});
router.post('/transfer',(req,res)=>{
  bankController.transfer(req, res)
});



module.exports = router;