<template>
  <div
    ref="histogramBar"
    class="histogramBar"
    resize-container>
    histogramBar
  </div>
</template>

<script>
export default {
  name: 'HistogramBar',
  props: {
    options: {
      default: () => {
      },
      type: Object,
    },
  },
  mounted() {
    const { getSources, title } = Object.assign(
      {},
      {
        getSources: null,
        title: 'test-test',
      },
      this.options,
    );
    const myChart = this.$echarts.init(this.$refs.histogramBar);
    const option = {
      title: {
        text: title,
        textStyle: {
          color: '#fff',
          fontSize: '100%',
        },
        padding: '100%',
      },
      grid: [{
        width: '90%',
        height: '80%',
        x: '3%',
        y: '15%',
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
              fontSize: '60%',
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
          data: [],
        },
      ],
      series: [
        {
          name: '最近30天交易额',
          type: 'bar',
          label: { // 图形上数据信息
            normal: {
              position: [this.$refs.histogramBar.clientWidth * 0.8, -5], // 图形上数据信息的位置
              show: true,
              color: '#fff',
              formatter: '{c}万元', // 图形上数据信息格式化
              fontSize: '66%',
            },
          },
          itemStyle: {
            normal: {
              color: '#0f35ff',
            },
          },
          barWidth: 5,
          data: [],
        },
      ],
    };
    myChart.showLoading();
    myChart.setOption(option);
    // 接口数据
    if (!!getSources && typeof getSources === 'function') {
      const getSourcesPromise = getSources();
      if (typeof getSourcesPromise.then === 'function') {
        getSourcesPromise.then(
          (responce) => {
            let getyAxisData;
            let tempData;
            if (!!responce && responce instanceof Array) {
              getyAxisData = responce.map(i => i.name);

              tempData = responce.map(i => i.value);
            }
            myChart.hideLoading(); // 隐藏加载动画
            myChart.setOption({
              // 加载数据图表
              yAxis: {
                data: getyAxisData,
              },
              series: [
                {
                  // 根据名字对应到相应的系列
                  data: tempData,
                },
              ],
            });
          },
          (err) => {
            console.log(err);
          },
        );
      }
    }
    // 自适应
    window.addEventListener('resize', () => {
      const currentClientwidth = this.$refs.histogramBar.clientWidth - 102;
      myChart.setOption({
        series: {
          label: { // 图形上数据信息
            normal: {
              position: [currentClientwidth, '-5'], // 图形上数据信息的位置
            },
          },
        },
      });
      myChart.resize();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.histogramBar {
  padding: 0;
  width: 100%;
  height: 100%;
  line-height: 100%;
}
</style>
