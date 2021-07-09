# mall
商城 vue + nodejs
baseUrl：

## 目录：
### 登录：
#### requestUrl： /admin/login
#### methods: post
#### 参数类型：data
#### 参数字段：
#### 
{
  user_name: String,  // 用户名，必填
  password： String, // 用户名，必填
  status： 1, // 默认普通管理员，非必填    1-普通管理员 2-超级管理员
}
#### 返回字段：
#### 
{
  message: "登录成功"
  status: 1 
}