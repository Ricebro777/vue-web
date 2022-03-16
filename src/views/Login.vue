<template>
  <div class="loginBox">
    <div class="login-title">欢迎使用CIKE智慧油田安全系统</div>
    <el-form
      :rules="rules"
      :model="loginForm"
      class="loginContent"
      :label-position="labelPosition"
      label-width="50px"
      style="width: 350px"
      hide-required-asterisk
      ref="loginFormRef"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="记住账号"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button color="#1047F7" style="color: white; width: 460px " @click="login"
          >立即登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <span>没有账号？</span>
        <el-button type="text" @click="goToRegister" class="registerButton">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      loginForm: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
      login(){
          this.$refs.loginFormRef.validate(valid=>{
              if (!valid) return;
              console.log(this.loginForm.username,
              this.loginForm.password)
              this.$router.push("/home")
          })
      },
      goToRegister(){
          this.$router.push("/register")
      }
  }
};
</script>

<style>
* {
  user-select: none;
}

body {
  background-image: url(../assets/css/loginImg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: absolute;
}

.loginBox {
  width: 460px;
  height: 480px;
  background-color: white;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  margin-top: -240px;
  left: 50%;
  margin-left: -230px;
}

.login-title {
  width: 344px;
  height: 45px;
  line-height: 45px;
  padding-left: 65px;
  padding-top: 50px;
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.loginContent {
  margin-top: 30px;
  padding-left: 55px;
}

/* 调整按钮中文字的位置以及文字大小 */
.registerButton{
  padding-top:11px;
  font-size: 16px;
}
</style>