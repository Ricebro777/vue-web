<template>
  <div class="searchContentBox">
    <el-form 
      :inline="true"
      :model="searchForm"
    >
      <!-- 筛选框 -->
      <el-form-item class="filterSelect">
        <el-select v-model="searchForm.filterSelect" placeholder="请选择">
          <el-option label="指标名称" value="name"></el-option>
          <el-option label="指标关系" value="relation"></el-option>
          <el-option label="指标参数" value="parameter"></el-option>
        </el-select>
      </el-form-item>
      <!-- 检索内容框 -->
      <el-form-item class="searchInput">
        <el-input v-model="searchForm.searchInput" placeholder="请输入检索内容"></el-input>
      </el-form-item>
      <!-- 检索按钮 -->
      <el-form-item class="searchButton">
        <el-button type="primary" @click="search">检索</el-button>
      </el-form-item>
      <br />
      <el-form-item label="类别:">
        <el-checkbox-group v-model="searchForm.type">
          <el-checkbox label="物探" name="type"></el-checkbox>
          <el-checkbox label="地测" name="type"></el-checkbox>
          <el-checkbox label="钻井" name="type"></el-checkbox>
          <el-checkbox label="采油" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="风险等级:" style="margin-left: 80px">
        <el-checkbox-group v-model="searchForm.level">
          <el-checkbox label="高" name="level" style="padding-left: 30px"></el-checkbox>
          <el-checkbox label="中" name="level"></el-checkbox>
          <el-checkbox label="低" name="level"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <br />
      <div class="divider">
        <span class="text">过滤条件</span>
        <span class="line"></span>
      </div>
      <el-form-item label="时间起止:">
        <el-col :span="11">
          <el-form-item>
            <el-date-picker
              type="date"
              placeholder="选择开始日期"
              style="width: 224px"
              v-model="searchForm.dateBegin"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="text-center" :span="2">
          <span class="text-gray-500;">至</span>
        </el-col>
        <el-col :span="11">
          <el-form-item>
            <el-date-picker
              type="date"
              placeholder="选择结束日期"
              style="width: 224px"
              v-model="searchForm.dateEnd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="排序："  style="margin-left:32px">
        <el-radio label="相关度" v-model="searchForm.sortKind"></el-radio>
        <el-radio label="风险等级由高到低" v-model="searchForm.sortKind"></el-radio>
        <el-radio label="风险等级由低到高" v-model="searchForm.sortKind"></el-radio>
      </el-form-item>
    </el-form>
  </div>
  <div class="searchResultBox">
    搜索结果
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchForm:{
        filterSelect:"name",
        searchInput:"",
        type:[],
        level:[],
        sortKind:"",
        dateBegin:"",
        dateEnd:"",
      }
    }
  },
  methods:{
    search(){
      console.log(this.searchForm.dateBegin)
    }
  }
};
</script>

<style>
.searchContentBox {
  position: absolute;
  left: 30%;
  top: 200px;
  white-space: nowrap;
}

.searchContentBox .el-form-item {
  white-space: nowrap;
}

.filterSelect{
  padding-left: 90px;
}

.filterSelect .el-input__inner {
  height: 50px;
  width: 130px;
}

.searchInput {
  margin-left: -32px;
}

.searchInput .el-input__inner {
  width: 525px;
  height: 50px;
  line-height: 50px;
}

.searchButton .el-button {
  width: 96px;
  height: 50px;
}

.divider{
  position: absolute;
  left: -85px;
  top: 90px;
  text-align: center;
  height: 22px;
  line-height: 22px;
}

.divider .line {
  margin-left: 20px;
  display: inline-block;
  width: 1116px;
  border-top: 1px solid #fff ;
  vertical-align: 4px;
}


.searchResultBox{
  width: 1116px;
  height: 660px;
  position:absolute;
  left: 30%;
  top: 400px;

}
</style>