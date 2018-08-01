<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
            <el-input type="text" v-model="ruleForm.account" clearable auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" clearable auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button @click="register('ruleForm')">注册</el-button>
            <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
        </el-form>

    </div>
</template>

<script>

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
        password: ''
      },
      rules: {
        account: [
          { validator: validatePassAccount, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassPassword, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {

    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('loginByAccount', this.ruleForm).then((data) => {
            this.$router.push({ path: '/home' })
            console.log(data)
            this.lastname = data['username']
            const token = this.$store.getters.token
            console.log('token:' + token)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register (formName) {
      this.$router.push({ path: '/register' })
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
