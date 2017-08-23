<template>
  <div class="content" v-loading>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="">
      <el-form-item label="" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" style="display: block;margin: 0 auto;">登陆</el-button>
        <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
      </el-form-item>
    </el-form>
    <div v-loading.fullscreen.lock="loading" element-loading-text="拼命加载中..."></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
          } else {
            return
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>


<style scoped>
  .content{
    width: 300px;
    border: 1px solid #ccc;
    position: fixed!important;
    padding: 30px 20px;
    padding-bottom: 10px;
    box-sizing: border-box;
    top: 50%;
    margin-top: -108px;
    left: 50%;
    margin-left: -150px;
    border-radius: 10px;
    background: #fff;
  }
</style>
