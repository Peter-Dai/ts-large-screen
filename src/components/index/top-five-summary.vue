<template>
  <el-container
    class="top-container">
    <el-header
      height="35%"
      class="top-header">
      <histogramBar/>
    </el-header>
    <el-header
      height="35%"
      class="top-header">
      <histogramBar/>
    </el-header>
    <el-header
      height="22%"
      class="top-header">
      <doughnutPie/>
    </el-header>
  </el-container>
</template>

<script>
import HistogramBar from '../common/histogram-bar';
import DoughnutPie from '../common/doughnut-pie';

export default {
  name: 'TopFiveSummary',
  components: { DoughnutPie, HistogramBar },
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container {
  height: 100%;
  padding-left: 6%;
  padding-top: 10px;
}

.top-header {
  margin-bottom: 10px;
  background: #081249;
}

.top-header:last-child {
  padding: 0 2%;
}
</style>
