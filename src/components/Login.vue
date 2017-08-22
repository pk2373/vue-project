<template>
  <div>
    <div class="content" >
      <el-input name="用户名"   type="text"  :value="userName"  :disabled="disable" placeholder="请输入账号" />

      <el-input name="密码" type="password" :value="password"  :disabled="disable" placeholder="请输入密码" />
      <el-button type="primary"  :disabled="disable" @click="login">{{ button }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: `logn`,
  data () {
    return {
      button: `登陆`,
      disable: false,
      userName: ``,
      password: ``
    }
  },
  methods: {
    login: function () {
      this.button = `登陆中...`
      this.disable = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    width: 300px;
    border: 1px solid #ccc;
    position: absolute;
    padding: 30px 0;
    top: 50%;
    margin-top: -100px;
    left: 50%;
    margin-left: -150px;
    border-radius: 10px;
  }
  .el-input{
    width: 80%;
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  }
  .el-button{
    margin: 0 auto;
    display: block;
  }
</style>
