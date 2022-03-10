<template>
  <div class="questionTitle">
    <span>智能问答</span>
  </div>
  <div class="questionFunctionTitle">问答服务</div>
  <div class="questionContent">
    <el-button @click="questionProcess"
      ><el-icon size="25px" style="margin-top: -8px; margin-right: 10px"
        ><share /></el-icon
      >流程问答</el-button
    >
    <el-button @click="questionIndex"
      ><el-icon size="25px" style="margin-top: -8px; margin-right: 10px"
        ><tickets /></el-icon
      >指标问答</el-button
    >
  </div>
</template>

<script>
import { Share, Tickets } from "@element-plus/icons-vue";
export default {
  data() {},
  methods: {
    questionProcess() {
      this.$router.push("/questionProcess");
    },
    questionIndex() {
      this.$router.push("/questionIndex");
    },
  },
  components: {
    Tickets,
    Share,
  },
};
</script>

<style>
.questionTitle {
  position: absolute;
  top: 173px;
  left: 50%;
  margin-left: -420px;
  white-space: nowrap;
  border-left: 5px solid blue;
  padding-left: 6px;
}

.questionTitle span {
  font-size: 18px;
  font-weight: bold;
}

.questionFunctionTitle {
  position: absolute;
  top: 252px;
  left: 50%;
  margin-left: -420px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: bold;
}

.questionContent {
  position: absolute;
  top: 289px;
  left: 50%;
  margin-left: -420px;
  white-space: nowrap;
}

.questionContent .el-button {
  width: 250px;
  height: 105px;
  margin-right: 45px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
}
</style>