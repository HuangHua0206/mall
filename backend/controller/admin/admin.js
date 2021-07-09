'use strict';

import AdminModel from '@root/models/admin/admin';
import AddressComponent from '@root/common/address';
import formidable from 'formidable'
import { formError, catchError } from '@root/utils'
import dtime from 'time-formater'
class Admin extends AddressComponent {
  constructor() {
    super() 
      this.login = this.login.bind(this) 
    }
 
  async login(req, res, next) {
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields,files) => {
      if (err) {
        formError(res)
        return
      }
      const { user_name, password, status = 1 } = fields
      try {
        if (!user_name) {
          throw new Error('用户名不能为空')
        }
        if (!password) {
          throw new Error('密码不能为空')
        }
      } catch(err) {
        catchError(res, err)
        return
      }
      try {
        const admin = await AdminModel.findOne({user_name})
        if (!admin) { // 如果没有找到这个用户就直接注册该用户
          this.register(req,res, user_name, password, status)
        } else {
          if (password.toString() !== admin.password.toString()) {
            res.send({
              status: 0,
              type: 'ERROR_PASSWORD',
              message: '该用户已存在，密码输入错误',
            })
          } else {
            res.send({
              status: 1, 
              message: '登录成功', 
            })
          }
        }
        
      } catch(err) {
        res.send({
					status: 0,
					type: 'LOGIN_ADMIN_FAILED',
					message: '登录管理员失败',
				})
      }
     
    }) 
  }

  async register(req,res,user_name, password, status) {
    const adminTip = status === 1 ? '管理员' : '超级管理员'
    const admin_id = await this.getId('admin_id')
    const cityInfo = await this.guessPosition(req)
    const newAdmin = {
      user_name,
      password,
      id: admin_id,
      create_time: dtime().format('YYYY-MM-DD HH:mm'),
      admin: adminTip,
      status,
      city: cityInfo.city
    }
    await AdminModel.create(newAdmin)
    req.session.admin_id = admin_id
    res.send({
      status:1,
      message: '注册管理员成功'
    })
  }
}

export default new Admin()