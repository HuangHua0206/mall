/*
 * @Filename: Do not edit
 * @Autor: huanghua
 * @Date: 2021-07-08 17:31:53
 * @LastEditTime: 2021-07-08 17:34:07
 * @LastEditors: huanghua
 * @Description: 
 * @Copyright: Copyright(c) 2019 CMIM Network Co.,Ltd. All Rights Reserved
 */
export function formError(res) {
  res.send({
    status: 0,
    type: 'FORM_DATA_ERROR',
    message: '表单信息错误'
  })
}  
export function catchError(res, err) {
  res.send({
    status: 0,
    type: 'FORM_DATA_ERROR',
    message: err.message
  })
}