'use strict';

import AdminModel from '@root/models/admin/admin';
import AddressComponent from '@root/common/address';
import formidable from 'formidable'
class Admin extends AddressComponent {
  constructor() {
    super() 
    this.login = this.login.bind(this)
    this.formError = this.formError.bind(this)
  }
  formError(res) {
    res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: '表单信息错误'
				})
  } 
  async login(req, res, next) {
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields,files) => {
      if (err) {
        this.formError(res)
        return
      }
      const { user_name, password, status = 1 } = fields
      console.log(user_name, password)
      res.send({
        status:1,
        message: '成功'
      })
    })
  }
}

export default new Admin()