<template>
  <!-- 返回按钮 -->
  <div class="back">
       <el-button 
         type="text" 
         :icon="Back"
         @click="goBack"
       ></el-button>
  </div>
  <!-- 标签块 -->
  <div class="questionHeader">
    <span>流程知识问答</span>
  </div> 
  <!-- 主体块 -->
  <div class="questionMain">
    <div class="questionHistory">
        这里是问答记录
    </div>
    <div class="relevantKnowledge">
        相关流程知识
    </div>
    <div class="inputBox">
        <el-input 
            v-model="questionContent"
            placeholder="请输入问题..."
            style="width:800px; padding-top:30px; padding-left:30px"
        ></el-input>
        <el-button type="primary">发送</el-button>
    </div>
  </div>
</template>

<script>
import { Search, Back } from "@element-plus/icons-vue";
export default {
  setup() {
    return {
      Search,
      Back,
    };
  },
  data() {
    return {
      searchContent: "",
      step: "1",
      questionContent:"",

    };
  },
  methods: {
      goBack(){
          this.$router.push("/question")
      }
  },
};
</script>

<style>
.questionHeader {
  position: absolute;
  top: 120px;
  left: 10%;
  white-space: nowrap;
  border-left: 5px solid blue;
  padding-left: 10px;
  text-align: center;
}

.questionHeader span {
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
}

.questionMain {
  position: absolute;
  top: 160px;
  left: 10%;
  width: 80%;
  height: 80%;
  background-color: white;
}

.questionMain .questionHistory{
  position: absolute;
  width: 65%;
  height: 90%;
  background-color: aqua;
}

.questionMain .inputBox{
  position: absolute;
  width: 65%;
  height: 10%;
  top: 90%;
  background-color: blue;
}

.questionMain .relevantKnowledge{
  position: absolute;
  width: 35%;
  height: 100%;
  left: 65%;
  background-color: red;
}

.questionMain .inputBox .el-input__inner{
    height: 40px;
}

.questionMain .inputBox .el-button{
    margin-left: 30px;
    width: 85px;
    height: 40px;
}

.back{
    position: absolute;
    left: 7.5%;
    top: 9.3%;

}

.back .el-button{
    font-size: 200%;
    color: #575a57;
}
</style>