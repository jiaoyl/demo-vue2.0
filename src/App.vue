<template>
  <div id="app">
    <h1 class="logo"><img src="./assets/images/logo.png"></h1>
    <ul>
        <li><router-link to="/first">点我跳转到第一页</router-link></li>
        <li><router-link to="/second">点我跳转到第二页</router-link></li>
      </ul>
      <firstPage1></firstPage1>
    <router-view></router-view>
  </div>
</template>

<script>
import firstPage1 from '@/components/first'
export default {
  name: 'app',
  components:{ firstPage1}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 640px;
  margin: 0 auto;
  
}
img{ max-width: 100%; max-height: 100%;}

.logo{ width:30%;}
</style>
