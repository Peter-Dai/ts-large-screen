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
    const resizeWorldMapContainer = (elem) => {
      const targetELem = elem;
      targetELem.style.width = `${targetELem.parentElement.clientWidth}px`;
      targetELem.style.height = `${targetELem.parentElement.clientHeight}px`;
    };
    // 设置容器高宽
    resizeWorldMapContainer(this.$refs.domesticMap);

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
              name: '浙江',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '安徽',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '北京',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '天津',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '上海',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '重庆',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '河北',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '河南',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '云南',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '辽宁',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '黑龙江',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '湖南',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '山东',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '新疆',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '江苏',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '江西',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '湖北',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '广西',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '甘肃',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '山西',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '内蒙古',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '陕西',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '吉林',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '福建',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '贵州',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '广东',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '青海',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '西藏',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '四川',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '宁夏',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '海南',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '台湾',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '香港',
              amount: '1231321',
              orders: '12321321',
            },
            {
              name: '澳门',
              amount: '1231321',
              orders: '12321321',
            },
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

    this.autoShowTooltip(myChart);

    window.onresize = () => {
      resizeWorldMapContainer(this.$refs.domesticMap);
      myChart.resize();
    };
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
