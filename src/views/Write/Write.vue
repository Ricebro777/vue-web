<template>
  <!-- 标签块 -->
  <div class="writeHeader">
    <span>智能写作</span>
    <!-- 功能的切换 -->
    <el-radio-group v-model="writeFunction" style="margin-left: 350px">
      <el-radio-button label="冲突检测">冲突检测</el-radio-button>
      <el-radio-button label="模板推荐">模板推荐</el-radio-button>
    </el-radio-group>
  </div>
  <!-- 主体块 -->
  <div class="writeMain">
    <!-- 冲突检测 -->
    <div class="conflictDetect" v-if="writeFunction == '冲突检测'">
      <span class="textLabel">请输入文本：</span>
      <!-- 左侧输入文本框 -->
      <div class="article">
        <el-input
          placeholder="请在这里输入要检测的文本"
          type="textarea"
          v-model="textContent"
          resize="none"
          :autosize="{ minRows: 15, maxRows: 24 }"
        ></el-input>
        <el-button @click="detect" class="detectButton" type="primary"
          >智能冲突检测</el-button
        >
        <el-button @click="detectCancel" class="cancelButton" type="default"
          >取消</el-button
        >
      </div>
      <!-- 右侧结果框 -->
      <div class="result">
        <!-- <span class="resultTitle">冲突检测</span> -->
        <div class="resultInformation">
          <span>AI标准冲突检测用时：{{ useTime }}秒</span>
          <div class="resultButtonGroup">
            <span class="likeConflictNum">{{ likeConflictNum }}</span>
            <span class="solvedConflictNum">{{ solvedConflictNum }}</span>
            <el-icon class="reDetectButtonIcon" size="25px" color="white">
              <refresh />
            </el-icon>
            <el-radio-group v-model="showWhat">
              <el-radio-button
                class="likeConflict"
                label="疑似冲突"
              ></el-radio-button>
              <el-radio-button
                class="solvedConflict"
                label="已处理"
              ></el-radio-button>
            </el-radio-group>
            <el-button type="danger" class="reDetectButton" @click="reDetect">重新检测</el-button>
          </div>
        </div>

        <div class="resultContent">
          <el-scrollbar always>
            <span class="resultContentTitle">检测结果如下</span>
            <!-- 疑似冲突内容 -->
            <div class="likeConflictContent" v-if="showWhat == '疑似冲突'">
              <span class="likeConflictContentTitle">疑似冲突内容：</span>
              <!-- 疑似冲突结果盒子 -->
              <div class="likeConflictBox">
                <!-- 显示冲突部分 -->
                <div class="likeConflictPart">
                  在该试验条件下，手套表面上能用水清洗去除的所有水不溶性物质。[GB/T21869-2008,定义
                  3.1]注：
                  包括有意添加的文末和其他加工试剂或非有意随机存在的物质，这些物质能容易地从手套表面分离，本部
                  分规定任何含有小于或等于2mg粉末的手套为无粉末手套.
                </div>
                <!-- 显示冲突个体 -->
                <div class="likeConflictItem">
                  <!-- 具体冲突句子 -->
                  <div class="likeConflictSentence">
                    在试验条件下，医用手套表面能用水清洗去除的
                  </div>
                  <!-- 关于冲突的处理选项 -->
                  <div class="likeConflictChoice">
                    <el-button type="text" style="color: black" @click="ignore" >忽略</el-button>
                    <el-button type="text" style="color: black" @click="check" >更正</el-button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 已解决冲突内容 -->
            <div class="solvedConflictContent" v-if="showWhat == '已处理'">
              <span class="solvedConflictContentTitle">已处理冲突内容：</span>
              <div class="solvedConflictBox">
                <!-- 显示冲突部分 -->
                <div class="solvedConflictPart">
                  在该试验条件下，手套表面上能用水清洗去除的所有水不溶性物质。[GB/T21869-2008,定义
                  3.1]注：
                  包括有意添加的文末和其他加工试剂或非有意随机存在的物质，这些物质能容易地从手套表面分离，本部
                  分规定任何含有小于或等于2mg粉末的手套为无粉末手套.
                </div>
                <!-- 显示冲突个体 -->
                <div class="solvedConflictItem">
                  <!-- 具体冲突句子 -->
                  <div class="solvedConflictSentence">
                    在试验条件下，医用手套表面能用水清洗去除的
                  </div>
                  <!-- 关于冲突的处理选项 -->
                  <div class="solvedConflictChoice">
                    <el-button type="text" style="color: black" @click="ignore" >忽略</el-button>
                    <el-button type="text" style="color: black" @click="check"  >更正</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
    <!-- 模板推荐 -->
    <div class="templateRecommend" v-if="writeFunction == '模板推荐'">
      <div class="step1" v-if="templateRecommendStep == '0'" >
<!-- 步骤图 -->
      <el-steps :active="templateRecommendStep" space="50%" finish-status="success">
        <el-step title="步骤一" description="输入标准类型消息"></el-step>
        <el-step title="步骤二" description="点击模板推荐"></el-step>
        <el-step title="步骤三" description="编辑内容"></el-step>
      </el-steps>
      <!-- 表单 -->
      <el-form :model="recommendForm">
        <!-- 标准名称 -->
        <el-form-item label="标准名称">
          <el-input
            style="width: 500px"
            v-model="recommendForm.name"
          ></el-input>
        </el-form-item>
        <!-- 标准性质 -->
        <el-form-item label="标准性质">
          <el-checkbox-group v-model="recommendForm.property">
            <el-checkbox label="硫化氢环境" name="property"></el-checkbox>
            <el-checkbox label="钻井现场" name="property"></el-checkbox>
            <br />
            <el-checkbox label="标准油田" name="property"></el-checkbox>
            <el-checkbox label="警报器选用" name="property"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 标准类型 -->
        <el-form-item label="标准类型" v>
          <el-radio-group v-model="recommendForm.type">
            <el-radio label="国家标准"></el-radio>
            <el-radio label="其他标准"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button @click="recommend" class="recommend" type="primary"
            >模板推荐</el-button
          >
          <el-button
            @click="recommendCancel"
            class="recommendCancel"
            type="default"
            >取消</el-button
          >
        </el-form-item>
      </el-form>
      </div>
      <div class="step2" v-if="templateRecommendStep == '1'">
        <el-steps :active="templateRecommendStep" space="50%" finish-status="success">
          <el-step title="步骤一" description="输入标准类型消息"></el-step>
          <el-step title="步骤二" description="点击模板推荐"></el-step>
          <el-step title="步骤三" description="编辑内容"></el-step>
        </el-steps>
        <div class="stepButtonGroup">
          <el-button @click="nextStep" class="nextStepButton" type="primary">下一步</el-button>
          <el-button @click="preStep" class="preStepButton" type="primary">返回</el-button>
        </div>
        <div class="templateContent">
          推荐模板内容框
        </div>
      </div>

      <div class="step3" v-if="templateRecommendStep == '2'">
        <el-steps :active="templateRecommendStep" space="400px" finish-status="success">
          <el-step title="步骤一" description="输入标准类型消息"></el-step>
          <el-step title="步骤二" description="点击模板推荐"></el-step>
          <el-step title="步骤三" description="编辑内容"></el-step>
        </el-steps>
        <div class="stepButtonGroup">
          <el-button @click="nextStep" class="nextStepButton" type="primary">下一步</el-button>
          <el-button @click="preStep" class="preStepButton" type="primary">返回</el-button>
        </div>
        <div class="writeContent">
          文档编写框
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Refresh } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      writeFunction: "模板推荐",
      textContent: "",
      recommendForm: {
        name: "",
        property: [],
        type: "",
      },
      useTime: "0.9",
      showWhat: "疑似冲突",
      likeConflictNum: "5",
      solvedConflictNum: "0",
      templateRecommendStep:"1",
    };
  },
  methods: {
    detect() {
      alert(this.textContent);
    },
    detectCancel() {
      alert("取消冲突检测");
    },
    recommend() {
      console.log(this.recommendForm);
      this.templateRecommendStep++;
    },
    recommendCancel() {
      alert("取消模板推荐");
    },
    reDetect(){
      alert("重新检测")
    },
    ignore(){
      alert("忽略")
    },
    check(){
      alert("更正")
    },
    nextStep(){
      if (this.templateRecommendStep<2){
      this.templateRecommendStep++
      }
      else{
        alert("输出文档")
      }
    },
    preStep(){
      this.templateRecommendStep--
    },
  },
  components: {
    Refresh,
  },
};
</script>

<style>
.writeHeader {
  position: absolute;
  top: 7%;
  left: 10.8%;
  white-space: nowrap;
  border-left: 5px solid blue;
  padding-left: 10px;
  text-align: center;
}

.writeHeader span {
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
}

.writeMain {
  position: relative;
  top: 15%;
  left: 10%;
  width: 80%;
  height: 80%;
  background-color: white;
}

.writeMain .conflictDetect {
  left: 2.5%;
  top: 2.5%;
  height: 95%;
  width: 95%;
  position: absolute;
}

.writeMain .conflictDetect .textLabel {
  position: absolute;
  top: 5%;
  left: 10%;
  margin-left: -100px;
}

.writeMain .conflictDetect .article {
  width: 50%;
  height: 90%;
  background-color: white;
  position: absolute;
  top: 5%;
  left: 10%;
}

.writeMain .conflictDetect .article .detectButton {
  width: 90px;
  height: 45px;
  position: absolute;
  left: 25%;
  bottom: 0%;
}

.writeMain .conflictDetect .article .cancelButton {
  width: 90px;
  height: 45px;
  position: absolute;
  bottom: 0%;
  left: 55%;
}

.writeMain .conflictDetect .result {
  width: 30%;
  height: 90%;
  background-color: white;
  position: absolute;
  top: 5%;
  right: 5%;
  border: 1px solid #ccc;
}

/* .writeMain .conflictDetect .result .resultTitle{
  display: inline-block;
  position: absolute;
  font-weight: bold;
  top: 15px;
  left: 5%;
} */

.writeMain .conflictDetect .result .resultInformation {
  background-color: aqua;
  margin: 0 auto;
  position: absolute;
  width: 90%;
  height: 30%;
  left: 5%;
}

.writeMain .conflictDetect .result .resultInformation .resultButtonGroup {
  position: absolute;
  top: 28%;
  width: 95%;
}

.writeMain
  .conflictDetect
  .result
  .resultInformation
  .resultButtonGroup
  .likeConflict {
  margin-right: 20px;
  margin-left: 5px;
}

.writeMain
  .conflictDetect
  .result
  .resultInformation
  .resultButtonGroup
  .likeConflict
  .el-radio-button__inner {
  width: 80px;
  height: 80px;
  padding-left: 12px;
  padding-top: 45px;
}

.writeMain
  .conflictDetect
  .result
  .resultInformation
  .resultButtonGroup
  .solvedConflict
  .el-radio-button__inner {
  width: 80px;
  height: 80px;
  padding-top: 45px;
}

.writeMain
  .conflictDetect
  .result
  .resultInformation
  .resultButtonGroup
  .reDetectButton {
  width: 80px;
  height: 80px;
  padding-top: 33px;
  position: absolute;
  right: 0%;
}

.writeMain
  .conflictDetect
  .result
  .resultInformation
  .resultButtonGroup
  .likeConflictNum {
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 40px;
}

.writeMain
  .conflictDetect
  .result
  .resultInformation
  .resultButtonGroup
  .solvedConflictNum {
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 140px;
}

.writeMain
  .conflictDetect
  .result
  .resultInformation
  .resultButtonGroup
  .reDetectButtonIcon {
  position: absolute;
  z-index: 1;
  right: 0%;
  margin-right: 26px;
  top: 10px;
}

.writeMain .conflictDetect .result .resultContent {
  background-color: silver;
  position: absolute;
  width: 90%;
  top: 33%;
  left: 5%;
  height: 65%;
  /* overflow: auto; */
}

.writeMain .conflictDetect .result .resultContent .resultContentTitle {
  display: block;
  font-size: 20px;
  margin-top: 8px;
}

.writeMain .conflictDetect .result .resultContent .likeConflictContentTitle {
  display: block;
  margin-top: 15px;
}

.writeMain
  .conflictDetect
  .result
  .resultContent
  .likeConflictBox
  .likeConflictPart {
  margin-top: 10px;
  color: orange;
}

.writeMain
  .conflictDetect
  .result
  .resultContent
  .likeConflictItem
  .likeConflictSentence {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 25px;
}

.writeMain
  .conflictDetect
  .result
  .resultContent
  .likeConflictItem
  .likeConflictChoice {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 25px;
}

.writeMain .conflictDetect .result .resultContent .solvedConflictContentTitle {
  display: block;
  margin-top: 15px;
}

.writeMain
  .conflictDetect
  .result
  .resultContent
  .solvedConflictBox
  .solvedConflictPart {
  margin-top: 10px;
  color: orange;
}

.writeMain
  .conflictDetect
  .result
  .resultContent
  .solvedConflictItem
  .solvedConflictSentence {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 25px;
}

.writeMain
  .conflictDetect
  .result
  .resultContent
  .solvedConflictItem
  .solvedConflictChoice {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 25px;
}


.writeMain .templateRecommend .el-steps {
  margin-top: 20px;
  margin-left: 25%;
}

.writeMain .templateRecommend .el-form {
  position: absolute;
  left: 25%;
  top: 120px;
}

.writeMain .templateRecommend .templateContent{
  width: 60%;
  height: 70%;
  left: 25%;
  background-color: aqua;
  position: absolute;
}

.writeMain .templateRecommend .stepButtonGroup{
  position: absolute;
  left: 50%;
  top: 90%;
}

.writeMain .templateRecommend .writeContent{
  width: 60%;
  height: 70%;
  left: 25%;
  background-color: springgreen;
  position: absolute;
}
</style>