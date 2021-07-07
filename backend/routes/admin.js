'use strict';
import express from 'express';
import Admin from '@root/controller/admin/admin';
console.log(Admin.login)
const router = express.Router();
router.post('/login', Admin.login);

export default router