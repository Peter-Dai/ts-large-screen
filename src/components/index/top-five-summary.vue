<template>
  <el-container
    class="top-container">
    <el-header
      height="35%"
      class="top-header">
      <histogramBar/>
    </el-header>
    <!--<el-main>main</el-main>-->
    <!--<el-footer style="height: 30%">footer</el-footer>-->
  </el-container>
</template>

<script>
import HistogramBar from '../common/histogram-bar';

export default {
  name: 'TopFiveSummary',
  components: { HistogramBar },
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
}

.top-header {
  margin-top: 10px;
  background: #081249;
}
</style>
