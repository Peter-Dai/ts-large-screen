<template>
  <el-container
    class="container">
    <el-aside
      class="left-aside"
      width="30%">
      <TopFiveSummary/>
    </el-aside>
    <el-main
      class="main"
      width="40%">
      <TodayTransactionSummary/>
    </el-main>
    <el-aside
      class="right-aside"
      width="30%">
      <MonthTranscationSummary/>
    </el-aside>
  </el-container>
</template>

<script>

import MonthTranscationSummary from '@/components/index/month-transcation-summary';
import TodayTransactionSummary from '@/components/index/today-transaction-summary';
import TopFiveSummary from '@/components/index/top-five-summary';


export default {
  name: 'Index',
  components: {
    MonthTranscationSummary,
    TodayTransactionSummary,
    TopFiveSummary,
  },
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    // const currentClientwidth = document.documentElement.clientWidth;
    // console.log(`width------${currentClientwidth}`);
    // console.log(`height------${(currentClientwidth * 9) / 64}`);
    // this.$el.style.width = `${currentClientwidth}px`;
    // this.$el.style.height = `${currentClientwidth / 7}px`;


    // window.addEventListener('resize', () => {
    //   const currentClientwidth1 = document.documentElement.clientWidth;
    //   console.log(`width------${currentClientwidth1}`);
    //   console.log(`height------${(currentClientwidth1 * 9) / 64}`);
    //   this.$el.style.width = `${currentClientwidth}px`;
    //   this.$el.style.height = `${currentClientwidth / 7}px`;
    // });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
   /* width: 1920px;
  height: 270px; */

   width: 2844.44 px;
  height: 400px;

   /* width: 15360px;
  height: 2160px; */
}

.left-aside {
  background-color: #080b37;
  padding: 0.5rem;
}

.main {
  background-color: #060246;
}

.right-aside {
  background-color:#060246;
  padding: 0.5rem;
}


</style>
