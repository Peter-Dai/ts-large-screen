<template>
  <div
    ref="domesticMap"
    class="domesticMap"
    v-resize-container>domestic-map</div>
</template>

<script>

import 'echarts/map/js/china';

import transactionApi from '@/api/transaction';


export default {
  name: 'DomesticMap',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    autoShowTooltip: (mapChart) => {
      let currentIndex = -1;
      setInterval(() => {
        const dataLen = mapChart.getOption().series[0].data.length;
        // 取消之前高亮的图形
        mapChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // // 高亮当前图形
        mapChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        // 显示 tooltip
        mapChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
      }, 1000);
    },
  },
  mounted() {
    const myChart = this.$echarts.init(this.$refs.domesticMap);
    const option = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,

        formatter(params) {
          return `<div style="padding:5px;text-align:left;font-size:12px;">
                    <div>
                      <span style="font-size:14px" >${params.name}省</span>
                    </div>
                    <div>
                      <span >交易金额:</span><span style='color:#ffff3b;font-size:14px'>
                        ${params.data.amount}
                      </span>万元
                    </div>
                    <div>
                      <span>订单数:</span>
                      <span style='color:#ffff3b;font-size:14px'>
                        ${params.data.orders}
                      </span>
                    </div>
                  </div>`;
        },
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: false, // 显示省份标签
              textStyle: { color: '#c71585' }, // 省份标签字体颜色
            },
            emphasis: {
              // 对应的鼠标悬浮效果
              show: false,
              textStyle: { color: '#800080' },
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 0.2, // 区域边框宽度
              borderColor: '#051c55', // 区域边框颜色
              areaColor: '#cfebf6', // 区域颜色
            },
            emphasis: {
              borderWidth: 0.2,
              borderColor: '#051c55',
              areaColor: '#006be0',
            },
          },
          data: [
            {
              name: '南海诸岛',
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: { show: false },
                },
              },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);
    myChart.showLoading();

    transactionApi.retrieveDailyTransaction().then((data) => {
      // const data1 = data;
      // console.log(data1);

      myChart.hideLoading(); // 隐藏加载动画
      myChart.setOption({ // 加载数据图表
        series: [{
          // 根据名字对应到相应的系列
          data,
        }],
      });
    });

    this.autoShowTooltip(myChart);

    window.addEventListener('resize', () => {
      myChart.resize();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.domesticMap {
  height: 100%;
  width: 100%;
  line-height: 100%;
}
</style>
