<template>
  <el-container
    class="today-container">
    <el-header>Header</el-header>
    <el-main class="today-main">
      <DomesticMap/>
    </el-main>
  </el-container>
</template>

<script>
import DomesticMap from '../common/domestic-map';

export default {
  name: 'TodayTransactionSummary',
  data() {
    return {
      msg: '',
    };
  },
  components: {
    DomesticMap,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.today-main {
  /* height: 100%;
  width: 100%; */
  background-color:#060246 ;
  padding: 0;
}

.today-container {
  height: 100%;
}
</style>
