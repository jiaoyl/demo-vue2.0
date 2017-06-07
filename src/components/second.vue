<template>
  <div class="hello">
    <h1>{{ msg }}</h1>   
    <!--<li><router-link to="/first">点我跳转到第一页</router-link></li>
     <li><router-link to="/second">点我跳转到第二页</router-link></li>-->
  </div>
</template>

<script>
export default {
  name: 'secondPage',
  data () {
    return {
      msg: '第二页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
