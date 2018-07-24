<template>
  <div
    v-resize-container
    ref="areaLine"
    class="areaLine"
  >area-line</div>
</template>

<script>
export default {
  name: 'AreaLine',
  props: {
    options: {
      default: () => {},
      type: Object,
    },
  },
  mounted() {
    const remfontSize = getComputedStyle(
      document.getElementsByTagName('html')[0],
      null,
    )['font-size'];
    let remSize = 18;
    if (remfontSize) {
      remSize = +remfontSize.replace(/[p|x]/g, '');
    }

    const { getSources, lineColor, areaColor, title } = Object.assign(
      {},
      {
        getSources: null,
        lineColor: 'nocolor',
        areaColor: 'noareaColor',
        title: 'test-test',
      },
      this.options,
    );

    const titles = title.split('-');

    const myChart = this.$echarts.init(this.$refs.areaLine);
    const option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [], // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // CONFIG
        splitLine: {
          show: false,
        },
        axisTick: {
          // 坐标刻度线
          show: false,
        },
        axisLine: {
          // 坐标轴线
          show: false,
        },
        axisLabel: {
          // 坐标轴文本标签选项
          textStyle: {
            color: '#fff',
            fontSize: 0.66 * remSize,
            fontFamily: 'Arial, Verdana, sans-serif',
            fontWeight: 800,
          },
          interval: 4,
        },
        min: 1,
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisTick: {
          // 坐标刻度线
          show: false,
        },
        axisLine: {
          // 坐标轴线
          show: false,
        },
        axisLabel: {
          // 坐标轴文本标签选项
          textStyle: {
            color: '#fff',
            // fontSize: 12,
            fontSize: 0.66 * remSize,
            fontFamily: 'Arial, Verdana, sans-serif',
            fontWeight: 800,
          },
        },
      },
      series: [
        {
          data: ['', 400, 2, 3, 4, 5, 6, 99, 23, 234, 324, 343], // CONFIG
          type: 'line',
          areaStyle: {
            normal: {
              color: areaColor, // 'rgb(5, 58, 139)',
            },
          },
          lineStyle: {
            color: lineColor, // 'rgb(0, 107, 224)',
            shadowColor: lineColor, // 'rgba(0, 107, 224)',
            shadowBlur: 20,
            shadowOffsetX: 5,
            opacity: 1,
          },
          symbolSize: 0,
        },
      ],
      grid: [
        {
          width: '100%',
          height: '80%',
          x: '0',
          y: '20%',
          containLabel: true,
        },
      ],
      title: {
        text: `{white|单位：${titles[0]}} {blue|———} {white|${titles[1]}}`,
        // top: '5px',
        textStyle: {
          fontFamily: 'Arial, Verdana, sans-serif',
          fontWeight: 800,
          rich: {
            blue: {
              color: lineColor, // 'rgb(0, 107, 224)',
              lineHeight: 10,
              padding: [3, 10, -5, 10],
              // fontSize: '66%',
            },
            white: {
              color: 'rgb(255, 255, 255)',
              // padding: 0,
              fontSize: 0.66 * remSize,
              padding: [3, 10, -5, 0],
            },
          },
        },
      },
    };
    myChart.showLoading();
    myChart.setOption(option);

    if (!!getSources && typeof getSources === 'function') {
      const getSourcesPromise = getSources();
      if (typeof getSourcesPromise.then === 'function') {
        getSourcesPromise.then(
          (responce) => {
            let getxAxisData;
            let tempData;
            if (!!responce && responce instanceof Array) {
              getxAxisData = [...responce.keys()].map(i => i + 1);
              getxAxisData.unshift(0);

              tempData = responce.map(i => i.amount);
              tempData.unshift('');
            }
            myChart.hideLoading(); // 隐藏加载动画

            myChart.setOption({
              // 加载数据图表
              xAxis: {
                data: getxAxisData,
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
.areaLine {
  height: 100%;
  width: 100%;
  line-height: 100%;
}
</style>
