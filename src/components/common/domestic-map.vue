<template>
  <div
    ref="domesticMap"
    class="domesticMap">domestic-map</div>
</template>

<script>
require('echarts/map/js/china.js');

export default {
  name: 'DomesticMap',
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    const resizeWorldMapContainer = () => {
      this.$refs.domesticMap.style.width = `${this.$refs.domesticMap.parentElement.clientWidth}px`;
      this.$refs.domesticMap.style.height = `${this.$refs.domesticMap.parentElement.clientHeight}px`;
    };
    // 设置容器高宽
    resizeWorldMapContainer();

    const myChart = this.$echarts.init(this.$refs.domesticMap);

    const option = {
      tooltip: {
        //                    show: false //不显示提示标签
        formatter: '{b}', // 提示标签格式
        backgroundColor: '#ff7f50', // 提示标签背景颜色
        textStyle: { color: '#fff' }, // 提示标签字体颜色
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: true, // 显示省份标签
              textStyle: { color: '#c71585' }, // 省份标签字体颜色
            },
            emphasis: {
              // 对应的鼠标悬浮效果
              show: true,
              textStyle: { color: '#800080' },
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 0.5, // 区域边框宽度
              borderColor: '#009fe8', // 区域边框颜色
              areaColor: '#ffefd5', // 区域颜色
            },
            emphasis: {
              borderWidth: 0.5,
              borderColor: '#4b0082',
              areaColor: '#ffdead',
            },
          },
          data: [
            { name: '福建', selected: true }, // 福建为选中状态
          ],
        },
      ],
    };

    myChart.setOption(option);

    window.onresize = () => {
    // 重置容器高宽
      resizeWorldMapContainer();
      myChart.resize();
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.domesticMap{
  height: 100%;
  width: 100%;
  line-height: 100%;
}
</style>
