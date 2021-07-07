<template>
  <div>
    <el-input v-model="user" placeholder="请输入账户"></el-input>
    <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
    <el-button type="primary">登录</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: '',
      password: '',
    }
  }
}
</script>
