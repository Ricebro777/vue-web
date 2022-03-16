<template>
  <!-- 标签块 -->
  <div class="matchHeader">
    <span>智能对标</span>
    <!-- 功能的切换 -->
  </div>
  <div class="matchSearchInput">
    <el-input
      v-model="matchSearchContent"
      :prefix-icon="Search"
      style="width: 250px"
    ></el-input>
  </div>
  <!-- 主体块 -->
  <div class="matchMain">
    <div class="stepsSelect">
      <el-radio-group v-model="step" fill="white" text-color="#5595FE">
        <el-radio-button label="1">考察前</el-radio-button>
        <el-radio-button label="2">考察中</el-radio-button>
        <el-radio-button label="3">考察后</el-radio-button>
      </el-radio-group>
    </div>

    <div class="beforeInspect" v-if="step == 1">
      考察前框框
    </div>
    <div class="inInspect" v-if="step == 2">考察中框框</div>
    <div class="afterInspect" v-if="step == 3">考察后框框</div>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
export default {
  setup() {
    return {
      Search,
    };
  },
  data() {
    return {
      matchSearchContent: "",
      step: "1",
    };
  },
  methods: {},
};
</script>

<style>
.matchHeader {
  position: absolute;
  top: 120px;
  left: 10%;
  white-space: nowrap;
  border-left: 5px solid blue;
  padding-left: 10px;
  text-align: center;
}

.matchHeader span {
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
}

.matchSearchInput {
  position: absolute;
  top: 120px;
  right: 10%;
}

.matchMain {
  position: absolute;
  top: 160px;
  left: 10%;
  width: 80%;
  height: 80%;
  background-color: white;
}

.matchMain .stepsSelect {
  position: absolute;
  left: 5%;
  top: 5%;
  width: 450px;
  background-color: #ebeef5;
  padding: 15px;
}

.matchMain .stepsSelect .el-radio-button__inner {
  width: 150px;
  height: 60px;
  padding-top: 20px;
  font-size: 20px;
  background-color: #ebeef5;
}

.matchMain .beforeInspect{
    position: absolute;
    width: 90%;
    height: 70%;
    background-color: aquamarine;
    top: 20%;
    left: 5%;
}

.matchMain .inInspect{
    position: absolute;
    width: 90%;
    height: 70%;
    background: silver;
    top: 20%;
    left: 5%;
}

.matchMain .afterInspect{
    position: absolute;
    width: 90%;
    height: 70%;
    background: pink;
    top: 20%;
    left: 5%;
}
</style>