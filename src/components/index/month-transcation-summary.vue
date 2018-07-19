<template>
  <el-container
    class="month-container">
    <div style="text-align:left">
      最近30天实时数据
    </div>
    <el-header
      height="22%"
      class="month-header">
      <el-row :gutter="24">
        <el-col :span="8">
          <div>交易额</div>
          <div>￥122,123,123,213</div>
        </el-col>
        <el-col :span="8">
          <div>订单数</div>
          <div>1232</div>
        </el-col>
        <el-col :span="8">ksnkfjlkfdjlkgfdjlgjs</el-col>
      </el-row>
    </el-header>
    <el-header
      height="35%"
      class="month-header">
      <AreaLine :options ="options1"/>
    </el-header>
    <el-header
      height="35%"
      class="month-header">
      <AreaLine
        :options ="options2"/></el-header>
    {{ options }}
  </el-container>
</template>

<script>
import AreaLine from '../common/area-line';

import HistogramBar from '../common/histogram-bar';

export default {
  name: 'MonthTranscationSummary',
  data() {
    return {
      options1: {
        getSources: () => new Promise((resolve) => {
          resolve([{ peter: 1 }, { peter: 2 }]);
        }),
        lineColor: 'peter ',
        title: 'afasdf',
        areaColor: '3432432',
      },
      options2: {
        lineColor: 'peter ',
      },
    };
  },
  components: {
    AreaLine,
    HistogramBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.month-container {
  color: #ffffff;
  height: 100%;
  /* padding-left: 6%;
  padding-top: 10px; */
  padding: 10px;
}

.month-header {
  margin-bottom: 10px;
  background: #081249;
}

.month-header .el-row{
  height: 100%;
}

.month-header .el-col{
  margin: 10px 0;
  height: 100%;
}

.month-header:last-child {
  margin-bottom: 0;
}
</style>
