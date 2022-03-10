<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header height="72px">
      <!-- 头部左侧标题 -->
      <div>
        <span>智慧油田安全系统</span>
      </div>

      <!-- 头部中间功能菜单篮 -->
      <el-menu
        :default-active="activeIndex"
        class="el-function-menu"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="search">知识检索</el-menu-item>
        <el-menu-item index="write">智能写作</el-menu-item>
        <el-menu-item index="match">智能对标</el-menu-item>
        <el-menu-item index="question">智能问答</el-menu-item>
      </el-menu>
      <!-- 头部右侧用户菜单栏 -->
      <div class="toolbar">
        <el-dropdown>
          <el-icon size="25px" style="margin-right: 25px">
            <bell-filled />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>消息一</el-dropdown-item>
              <el-dropdown-item>消息二</el-dropdown-item>
              <el-dropdown-item>消息三</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown>
          <el-icon size="25px" style="margin-right: 25px">
            <info-filled />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>信息一</el-dropdown-item>
              <el-dropdown-item>信息二</el-dropdown-item>
              <el-dropdown-item>信息三</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown>
          <el-icon size="40px" style="margin-top: -8px">
            <avatar />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人设置</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {
  Setting,
  Avatar,
  BellFilled,
  InfoFilled,
} from "@element-plus/icons-vue";
export default {
  components: {
    Setting,
    Avatar,
    BellFilled,
    InfoFilled,
  },
};
</script>

<style>
.home-container {
  height: 100%;
  width: 100%;
}

.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  width: 100%;
  background-image: url(../assets/css/loginImg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.el-header {
  background-color: #ffffff;
  margin: 10px 10px 0;
  display: flex;
  padding-left: 56px;
  /* flex: none; */
  justify-content: space-between;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .2);
  border-radius: 3px;
}

.el-header span {
  font-weight: bold;
  font-size: 20px;
  display: block;
  /* flex: none; */
  padding-top: 26px;
}

.el-header .el-menu {
  /* position: abosolute;
  left: 50%;
  width: 600px;
  margin-left: -300px;
  margin-top: 10px; */
  /* flex: none; */
  width: auto;
  flex: none;
}

.el-header .el-menu .el-menu-item {
  font-size: 16px;
  text-align: center;
  margin-right: 50px;
}

.el-header .toolbar {
  margin-top: 20px;
}

.el-main{
  position: relative;
}
</style>