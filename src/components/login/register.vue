<template>
    <el-form :model="registerForm" status-icon :rules="registerRule" ref="registerForm" label-width="100px" class="demo-ruleForm header">
        <el-form-item label="账号" prop="account">
            <el-input type="text" v-model="registerForm.account" auto-complete="off" clearable></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="registerForm.pwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd">
            <el-input type="password" v-model="registerForm.checkPwd" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="用户名"  prop="username">
            <el-input type="text" v-model="registerForm.username" auto-complete="off" clearable></el-input>
        </el-form-item>

        <el-form-item label="电话号码" prop="mobile">
            <el-input type="text" v-model.number="registerForm.mobile" auto-complete="off" clearable></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
            <el-input type="email" v-model="registerForm.email" auto-complete="off" clearable></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { checkAccount } from '@/api/user'
export default {
  data () {
    var checkUsername = (rule, value, callback) => {
      callback()
    }
    var checkEmail = (rule, value, callback) => {
      callback()
    }
    var checkAccount1 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入账号'))
      } else {
        checkAccount(value).then(response => {
          if (response.data.isExist) {
            return callback(new Error('账号已存在'))
          } else {
            callback()
          }
        })
      }
    }
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机不能为空'))
      }
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'))
      } else {
        if (value < 10000000000 || value > 19999999999) {
          callback(new Error('必须输入正确的手机号码'))
        } else {
          callback()
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.checkPwd !== '') {
          this.$refs.registerForm.validateField('checkPwd')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        account: '',
        username: '',
        mobile: '',
        email: '',
        pwd: '',
        checkPwd: ''
      },
      registerRule: {
        username: [
          { trigger: 'blur', validator: checkUsername }
        ],
        account: [
          { required: true, validator: checkAccount1, trigger: 'blur' }
        ],
        pwd: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPwd: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        mobile: [
          { required: true, validator: checkMobile, trigger: 'blur' }
        ],
        email: [
          { required: true, validator: checkEmail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('check pass')
          this.$store.dispatch('register', this.registerForm).then((data) => {
            this.$router.push({ path: '/home' })
            console.log(data)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
  .header{
    margin-top:50px
  }
</style>
