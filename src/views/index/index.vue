<template>
  <el-container
    class="container">
    <el-aside
      class="left-aside"
      width="30%">left</el-aside>
    <el-main
      class="main"
      width="40%">Main</el-main>
    <el-aside
      class="right-aside"
      width="30%">right</el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 400px;
}

.left-aside {
  background-color: red;
}

.main {
  background-color: yellow;
}

.right-aside {
  background-color: green;
}


</style>
