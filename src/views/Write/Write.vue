<template>
  <!-- 标签块 -->
  <div class="writeHeader">
    <span>智能写作</span>
    <!-- 功能的切换 -->
    <el-radio-group v-model="isCollapse" style="margin-left: 350px">
      <el-radio-button :label="1">冲突检测</el-radio-button>
      <el-radio-button :label="2">模板推荐</el-radio-button>
    </el-radio-group>
  </div>
  <!-- 主体块 -->
  <div class="writeMain">
    <!-- 冲突检测 -->
    <div class="conflictDetect" v-if="isCollapse == 1">
      <span class="textLabel">请输入文本：</span>
      <!-- 左侧输入文本框 -->
      <div class="article">
        <el-input
          placeholder="请在这里输入要检测的文本"
          type="textarea"
          v-model="textContent"
          :autosize="{ minRows: 10, maxRows: 25 }"
        ></el-input>
        <el-button @click="detect" class="detect" type="primary"
          >智能冲突检测</el-button
        >
        <el-button @click="detectCancel" class="cancel" type="default"
          >取消</el-button
        >
      </div>
      <!-- 右侧结果框 -->
      <div class="result">知识卡片框</div>
    </div>
    <!-- 模板推荐 -->
    <div class="templateRecommend" v-if="isCollapse == 2">
      <!-- 步骤图 -->
      <el-steps :active="1" space="400px">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: "1",
      textContent: "",
      recommendForm: {
        name: "",
        property: [],
        type: "",
      },
    };
  },
  methods: {
    detect() {
      alert(this.textContent);
    },
    detectCancel() {
      alert("取消冲突检测");
    },
    recommend(){
      console.log(this.recommendForm)
    },
    recommendCancel() {
      alert("取消模板推荐");
    },
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
  top: 0%;
  left: 10%;
  width: 80%;
  height: 110%;
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
  left: 3%;
}

.writeMain .conflictDetect .article {
  width: 40%;
  height: 90%;
  background-color: white;
  position: absolute;
  top: 5%;
  left: 10%;
}

.writeMain .conflictDetect .result {
  width: 40%;
  height: 90%;
  background-color: white;
  position: absolute;
  top: 5%;
  right: 5%;
  border: 1px solid #ccc;
}

.writeMain .conflictDetect .article .detect {
  width: 90px;
  height: 45px;
  margin-top: 30px;
  margin-left: 160px;
  margin-right: 60px;
}

.writeMain .conflictDetect .article .cancel {
  width: 70px;
  height: 35px;
  margin-top: 30px;
}

.writeMain .templateRecommend .el-steps {
  margin-top: 20px;
  margin-left: 160px;
}

.writeMain .templateRecommend .el-form {
  position: absolute;
  left: 160px;
  top: 120px;
}
</style>