import Vue from 'vue';

Vue.directive('resize-container', {
  inserted(el) {
    const resizeChartContainer = (elem) => {
      const targetELem = elem;
      targetELem.style.width = `${targetELem.parentElement.clientWidth}px`;
      targetELem.style.height = `${targetELem.parentElement.clientHeight}px`;
    };
      // 设置容器高宽
    resizeChartContainer(el);

    // window.onresize = () => {
    //   console.log('this is directive');
    //   resizeWorldMapContainer(el);
    // myChart.resize();
    // };

    window.addEventListener('resize', () => {
      resizeChartContainer(el);
    });
  },
});
