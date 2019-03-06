<template>
  <div class="header">
    <img 
      class="logo"
      src="../../assets/images/logo.png" 
      alt=""
    >
    <a href="#home">首页</a>
    <a href="#caseShow">案例展示</a>
    <a href="#products">产品方案</a>
    <a href="#aboutUs">关于我们</a>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  z-index: 999;
  font-size: 18px;
  text-align: right;
  box-sizing: border-box;
  img {
    width: 200px;
    height: 50px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    width: 100px;
    line-height: 50px;
    text-align: center;
  }
}
</style>


