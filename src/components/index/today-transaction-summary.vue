<template>
  <el-container
    class="today-container">
    <el-header style="padding:20px">
      <el-row
        type="flex"
        justify="space-between"
        class="header-row">
        <el-col :span="8">
          <div class="header-title">今日成交笔数</div>
          <div>
            <template
              v-for="(value,index) in renderCountArray()">
              <div
                v-if="value !=','"
                class="num-div"
                :key="index">{{ value }}</div>

              <template v-else>,</template>
            </template>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="header-title">今日成交金额</div>
          <div>
            ￥
            <template
              v-for="(value,index) in renderCountArray()">
              <div
                v-if="value !=','"
                class="num-div"
                :key="index">{{ value }}</div>

              <template v-else>,</template>
            </template>
          </div>
        </el-col>
      </el-row>
    </el-header>
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
      counts: '1232132132',
      amounts: '234234324324',
    };
  },
  components: {
    DomesticMap,
  },
  methods: {
    renderCountArray() {
      if (!isNaN(this.counts)) {
        return this.counts.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,').split('');
      }
      return [];
    },
    renderAmountArray() {
      if (!isNaN(this.amounts)) {
        return this.amounts.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,').split('');
      }
      return [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.today-main {
  /* height: 100%;
  width: 100%; */
  background-color: #060246;
  padding: 0;
}

.today-container {
  height: 100%;
}

.num-div {
  width: 15px;
  display: inline-block;
  background-color: #0051f8;
  color: #ffffff;
  margin: 1px;
  padding: 2px;
}

.header-title{
  margin-bottom:  20px;
}

.header-row{
  color:#ffffff;
}
</style>
