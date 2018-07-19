<template>
  <el-container
    class="top-container">
    <div style="text-align:left">
      最近30天实时数据

    </div>
    <el-header
      height="22%"
      class="top-header">
      <histogramBar/>
    </el-header>
    <el-header
      height="35%"
      class="top-header">
      <AreaLine/>
    </el-header>
    <el-header
      height="35%"
      class="top-header">
      <AreaLine/>
    </el-header>
  </el-container>
</template>

<script>
import AreaLine from '../common/area-line';

export default {
  name: 'MonthTranscationSummary',
  data() {
    return {
      msg: '',
    };
  },
  components: {
    AreaLine,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container {
  height: 100%;
  /* padding-left: 6%;
  padding-top: 10px; */
  padding: 10px;
}

.top-header {
  margin-bottom: 10px;
  background: #081249;
}

.top-header:last-child {
  margin-bottom: 0;
}
</style>
