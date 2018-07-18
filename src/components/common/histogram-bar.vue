<template>
  <div
    ref="histogramBar"
    class="histogramBar">
    histogramBar
  </div>
</template>

<script>
export default {
  name: 'HistogramBar',
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    const myChart = this.$echarts.init(this.$refs.histogramBar);

    const option = {
      title: {
        text: '最近30天交易额 TOP 5 城市',
        textStyle: {
          color: '#fff',
        },
      },
      grid: [{
        width: '100%',
        height: '80%',
        x: 5,
        y: 35,
        containLabel: true,
      }],
      tooltip: {
        trigger: 'axis',
      },
      xAxis: [
        {
          show: false,
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisLabel: { // 坐标轴文本标签选项
            textStyle: {
              color: '#fff',
              fontSize: 12,
            },
          },
          splitLine: { // 分隔线
            show: false,
          },
          axisTick: { // 坐标刻度线
            show: false,
          },
          axisLine: { // 坐标轴线
            show: false,
          },
          data: ['深圳', '北京', '上海', '南京', '杭州'],
        },
      ],
      series: [
        {
          name: '最近30天交易额',
          type: 'bar',
          label: {
            normal: {
              position: 'right',
              show: true,
              color: '#fff',
            },
          },
          itemStyle: {
            normal: {
              color: '#0f35ff',
            },
          },
          barWidth: 5,
          data: [83.21, 93.21, 103.21, 113.21, 123.21],
        },
      ],
    };
    myChart.setOption(option);

    // window.onresize = () => {
    //   // 重置容器高宽
    //   resizeWorldMapContainer();
    //   myChart.resize();
    // };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.histogramBar {
  padding-top: 6px;
  width: 100%;
  height: 100%;
  line-height: 100%;
}
</style>
