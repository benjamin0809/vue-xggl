<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
            <el-input type="text" v-model="ruleForm.account" clearable auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="ruleForm.pwd" clearable auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button @click="register('ruleForm')">注册</el-button>
            <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
        </el-form>

    </div>
</template>

<script>
import { loginByAccount } from '@/api/login'

export default {
  name: 'Login',
  data () {
    var validatePassAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePassPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }

    return {
      ruleForm: {
        account: '',
        pwd: ''
      },
      rules: {
        account: [
          { validator: validatePassAccount, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatePassPassword, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {

    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginByAccount(this.ruleForm.account, this.ruleForm.pwd).then((data) => {
            console.log(data)
            this.lastname = data['username']
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
  .login {
    width: 400px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
