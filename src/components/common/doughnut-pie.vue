<template>
  <div
    v-resize-container
    ref="doughnutPie"
    class="doughnutPie"
  >
    doughnut-pie
  </div>
</template>

<script>
import helper from '@/utils/helper';

export default {
  name: 'DoughnutPie',
  props: {
    options: {
      default: () => {
      },
      type: Object,
    },
  },
  mounted() {
    const remSize = helper.getRemSize();
    const { getSources, title } = Object.assign(
      {},
      {
        getSources: null,
        title: 'test-test',
      },
      this.options,
    );
    const colorArray = [
      { normal: { color: '#0068ed' } },
      { normal: { color: '#efef50' } },
      { normal: { color: '#00b674' } },
      { normal: { color: '#efaa20' } },
      { normal: { color: '#f7461c' } },
      { normal: { color: '#008bfb' } },
    ];
    const myChart = this.$echarts.init(this.$refs.doughnutPie);
    const option = {
      title: [ // 设置两个title
        {
          text: title[0],
          x: '19%',
          y: 'bottom',
          textStyle: {
            fontSize: '60%',
            color: '#fff',
          },
        },
        {
          text: title[1],
          x: '69%',
          y: 'bottom',
          textStyle: {
            fontSize: '60%',
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
                fontFamily: 'Arial, Verdana, sans-serif',
                formatter: '{b} {d}%', // 格式化引导线文字样式
              },
              labelLine: { // 引导线样式
                show: true,
                length: 4, // 引导线长度控制
              },
            },
          },
          data: [],
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
                fontFamily: 'Arial, Verdana, sans-serif',
                formatter: '{b} {d}%', // 格式化引导线文字样式
              },
              labelLine: { // 引导线样式
                show: true,
                length: 4, // 引导线长度控制
              },
            },
          },
          data: [],
        },
      ],
    };
    myChart.showLoading();
    myChart.setOption(option);

    if (!!getSources && typeof getSources === 'function') {
      const getSourcesPromise = getSources();
      if (typeof getSourcesPromise.then === 'function') {
        getSourcesPromise.then(
          (responce) => {
            let tempPaymentMethod;
            let tempPaymentTerminal;
            if (!!responce && responce instanceof Array) {
              tempPaymentMethod = responce[0];
              tempPaymentTerminal = responce[1];
              tempPaymentMethod.forEach((item, i) => {
                const addStyle = item;
                addStyle.itemStyle = colorArray[i];
              });
              tempPaymentTerminal.forEach((item, i) => {
                const addStyle = item;
                addStyle.itemStyle = colorArray[i];
              });
            }
            myChart.hideLoading(); // 隐藏加载动画

            myChart.setOption({
              // 加载数据图表
              series: [
                {
                  // 根据名字对应到相应的系列
                  data: tempPaymentMethod,
                },
                {
                  data: tempPaymentTerminal,
                },
              ],
            });
          },
          (err) => {
          },
        );
      }
    }
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
