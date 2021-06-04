<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>        
  </div>
</template>

<script>

</script>

<style>
/*
所有页面都需要的css
*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*整个页面的背景色*/
body{
  background-color: #f5f5f5;
  min-width:1000px;
}
/*一级容器定宽居中*/
body>.container{
  width:1000px;
  min-width:1000px;
  margin:0 auto;
}
</style>
