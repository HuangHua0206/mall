/*
 * @Filename: Do not edit
 * @Autor: huanghua
 * @Date: 2021-07-07 14:52:14
 * @LastEditTime: 2021-07-15 15:19:18
 * @LastEditors: huanghua
 * @Description: 
 * @Copyright: Copyright(c) 2019 CMIM Network Co.,Ltd. All Rights Reserved
 */
'use strict';
import express from 'express';
import Admin from '@root/controller/admin/admin';
console.log(Admin.login)
const router = express.Router();
router.post('/login', Admin.login);
router.post('/info', Admin.getAdminInfo);
export default router