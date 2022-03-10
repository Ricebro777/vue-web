<template>
  <div class="searchTitle">
    <span>知识检索</span>
  </div>
  <div class="searchFunctionTitle">检索功能</div>
  <div class="searchContent">
    <el-button @click="searchProcess"
      ><el-icon size="25px" style="margin-top: -8px; margin-right: 10px"
        ><share /></el-icon
      >检索流程</el-button
    >
    <el-button @click="searchCatalog"
      ><el-icon size="25px" style="margin-top: -8px; margin-right: 10px"
        ><search /></el-icon
      >检索目录</el-button
    >
    <el-button @click="searchIndex"
      ><el-icon size="25px" style="margin-top: -8px; margin-right: 10px"
        ><tickets /></el-icon
      >检索指标</el-button
    >
  </div>
</template>

<script>
import { Share, Tickets, Search } from "@element-plus/icons-vue";
export default {
  data() {},
  methods: {
    searchProcess() {
      this.$router.push("/searchProcess");
    },
    searchCatalog() {
      this.$router.push("/searchCatalog");
    },
    searchIndex() {
      this.$router.push("/SearchIndex");
    },
  },
  components: {
    Tickets,
    Share,
    Search,
  },
};
</script>

<style>
.searchTitle {
  position: absolute;
  top: 173px;
  left: 50%;
  margin-left: -420px;
  white-space: nowrap;
  border-left: 5px solid blue;
  padding-left: 6px;
}

.searchTitle span {
  font-size: 18px;
  font-weight: bold;
}

.searchFunctionTitle {
  position: absolute;
  top: 252px;
  left: 50%;
  margin-left: -420px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: bold;
}

.searchContent {
  position: absolute;
  top: 289px;
  left: 50%;
  margin-left: -420px;
  white-space: nowrap;
}

.searchContent .el-button {
  width: 250px;
  height: 105px;
  margin-right: 45px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
}
</style>