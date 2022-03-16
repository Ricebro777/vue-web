<template>
  <div class="registerBox">
    <div class="registerTitle">账号注册</div>
    <el-form
      :rules="rules"
      :model="registerForm"
      class="registerContent"
      :label-position="labelPosition"
      label-width="50px"
      style="max-width: 350px"
      hide-required-asterisk
      ref="registerFormRef"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="密码确认" prop="checkedPassword">
        <el-input
          v-model="registerForm.checkedPassword"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          color="#1047F7"
          style="color: white; width: 460px"
          @click="loginAndRegister"
          >注册并且登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <span>已经有了账户？</span>
        <el-button type="text" @click="goToLogin" class="loginButton">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      registerForm: {
        username: "admin",
        password: "admin",
        checkedPassword: "admin",
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
        checkedPassword: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.registerForm.password) {
                callback(new Error("两次密码不一致"))
              } else {
                callback()
              }
            },
            required: true,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    loginAndRegister() {
      this.$refs.registerFormRef.validate((valid) => {
        if (!valid) return;
        console.log(this.registerForm.username, this.registerForm.password);
        this.$router.push("/home")
      });
    },
    goToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
* {
  user-select: none;
}

body {
  background-image: url(../assets/css/registerImg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  width: 100%;
  height: 100%;

}

.registerBox {
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

.registerTitle {
  height: 45px;
  line-height: 45px;
  padding-left: 175px;
  padding-top: 30px;
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.registerContent {
  margin-top: 30px;
  padding-left: 55px;
}

.loginButton{
  padding-top:11px;
  font-size: 16px;
}
</style>