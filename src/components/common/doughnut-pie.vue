<template>
  <div
    ref="doughnutPie"
    class="doughnutPie"
    resize-container>
    doughnut-pie
  </div>
</template>

<script>
export default {
  name: 'DoughnutPie',
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    const myChart = this.$echarts.init(this.$refs.doughnutPie);
    const option = {
      title: [ // 设置两个title
        {
          text: '支付方式',
          x: '19%',
          y: 'bottom',
          textStyle: {
            fontSize: '10',
            color: '#fff',
          },
        },
        {
          text: '支付终端',
          x: '69%',
          y: 'bottom',
          textStyle: {
            fontSize: '10',
            color: '#fff',
          },
        },
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      series: [
        {
          name: '支付方式',
          type: 'pie',
          radius: ['30%', '50%'], // 环形图内圆和外圆的半径
          center: ['25%', '40%'], // 环形图位置控制
          itemStyle: {
            normal: {
              label: { // 引导线文字样式
                show: true,
                fontSize: '60%',
                formatter: '{b} {d}%', // 格式化引导线文字样式
              },
              labelLine: { // 引导线样式
                show: true,
                length: 4, // 引导线长度控制
              },
            },
          },
          data: [
            { value: 535, name: '支付宝', itemStyle: { normal: { color: '#0068ed' } } },
            { value: 30, name: '银行卡', itemStyle: { normal: { color: '#efef50' } } },
            { value: 435, name: '微信', itemStyle: { normal: { color: '#00b674' } } },
          ],
        },
        {
          name: '支付终端',
          type: 'pie',
          radius: ['30%', '50%'], // 环形图内圆和外圆半径
          center: ['75%', '40%'], // 环形图位置控制
          calculable: true,
          itemStyle: {
            normal: {
              label: { // 引导线文字样式
                show: true,
                fontSize: '60%',
                formatter: '{b} {d}%', // 格式化引导线文字样式
              },
              labelLine: { // 引导线样式
                show: true,
                length: 4, // 引导线长度控制
              },
            },
          },
          data: [
            { value: 335, name: '二维码订单', itemStyle: { normal: { color: '#f7461c' } } },
            { value: 310, name: '收银台订单', itemStyle: { normal: { color: '#efaa20' } } },
            { value: 234, name: '银行卡订单', itemStyle: { normal: { color: '#efef50' } } },
            { value: 234, name: '小程序订单', itemStyle: { normal: { color: '#00b674' } } },
            { value: 234, name: 'API订单', itemStyle: { normal: { color: '#008bfb' } } },
            { value: 234, name: 'APP订单', itemStyle: { normal: { color: '#0069eb' } } },
          ],
        },
      ],
    };
    myChart.setOption(option);

    window.addEventListener('resize', () => {
      myChart.resize();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.doughnutPie {
  width: 100%;
  height: 100%;
  line-height: 100%;
}
</style>
