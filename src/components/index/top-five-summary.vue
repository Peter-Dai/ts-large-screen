<template>
  <el-container
    class="top-container">
    <el-header
      height="35%"
      class="top-header">
      <histogramBar :options ="transactionAmountOption"/>
    </el-header>
    <el-header
      height="35%"
      class="top-header">
      <histogramBar :options ="transactionNumberOption"/>
    </el-header>
    <el-header
      height="22%"
      class="top-header">
      <doughnutPie/>
    </el-header>
  </el-container>
</template>

<script>
import transactionApi from '@/api/transaction';
import HistogramBar from '../common/histogram-bar';
import DoughnutPie from '../common/doughnut-pie';

export default {
  name: 'TopFiveSummary',
  components: { DoughnutPie, HistogramBar },
  data() {
    return {
      transactionAmountOption: {
        getSources: transactionApi.retrieveTopFiveTransactionAmount,
        title: '最近30天交易额 TOP 5 城市',
      },
      transactionNumberOption: {
        getSources: transactionApi.retrieveTopFiveTransactionNumber,
        title: '最近30天交易笔数 TOP 5 城市',
      },
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
