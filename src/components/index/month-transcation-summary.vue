<template>
  <el-container
    class="month-container">
    <el-header
      style="text-align:left"
      height="3%">
      最近30天实时数据
    </el-header>
    <el-header
      class="month-header"
      height="auto"
      style="text-align:left;margin-top:10px; margin-bottom:10px;">
      <el-row
        :gutter="24"
      >
        <el-col
          :span="8"
        >
          <el-card
            class="summary-body"
            body-style="padding: 10px;">
            <div class ="title">交易额</div>
            <div class ="content">￥122,123,123,213</div>
          </el-card>
        </el-col>
        <el-col
          :span="8"
        >
          <el-card
            class="summary-body"
            body-style="padding: 10px;">
            <div class ="title">订单数</div>
            <div class ="content">122,123,123,213</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card
            class="summary-body"
            body-style="padding: 10px;">
            <div class ="title">佣金</div>
            <div class ="content">￥122,123,123,213</div>
          </el-card>
        </el-col>
      </el-row>

    </el-header>
    <!-- </el-header> -->
    <el-header
      height="35%"
      class="month-header">
      <AreaLine :options ="amountChartOptions"/>
    </el-header>
    <el-header
      height="35%"
      class="month-header">
      <AreaLine :options ="orderChartOptions"/>
    </el-header>
  </el-container>
</template>

<script>
import transactionApi from '@/api/transaction';
import AreaLine from '../common/area-line';
import HistogramBar from '../common/histogram-bar';

export default {
  name: 'MonthTranscationSummary',
  components: {
    AreaLine,
    HistogramBar,
  },
  data() {
    return {
      amountChartOptions: {
        getSources: transactionApi.retrieveMonthlyAmounts,
        lineColor: 'rgb(0, 107, 224)',
        title: '万元-交易额',
        areaColor: 'rgb(5, 58, 139)',
      },
      orderChartOptions: {
        getSources: transactionApi.retrieveMonthlyOrders,
        lineColor: 'rgb(186, 0, 184)',
        title: '笔-订单数',
        areaColor: 'rgb(91, 9, 135)',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary-body {
  /* background-color: aqua;
  height: 100%; */
  /* padding: 10px; */
  padding: 0;
  /*background-color: #1c299a;*/
  background: linear-gradient(to right, #031399, #071159);
  opacity: 0.8;
  border-color:#1c299a;
  color:#ffffff;
}
.month-container {
  color: #ffffff;
  height: 100%;
  /* padding-left: 6%;
  padding-top: 10px; */
  padding: 10px;
}

.month-header {
  margin-bottom: 10px;
  /*background: #081249;*/
  background: linear-gradient(to right, #0a1760, #080c37);
  opacity: 0.8;
  font-size:0.66rem;
}

.month-header .el-row {
  height: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.month-header .el-col {
  margin: 10px 0;
  height: 100%;
}

.month-header:last-child {
  margin-bottom: 0;
}

.title {
  margin-bottom: 15px;
}

.content{
  color: #66ccff;
}
</style>
