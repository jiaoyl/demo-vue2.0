<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h1 v-text="title"></h1>
    <h1 v-html="title2"></h1>
    
    <ul>
    	<li v-for='ss in items' v-bind:class="[itemClass,{finished: ss.isFinished}]">
    	 	{{ss.label}}
    	</li>
    </ul>
   
    
  </div>
</template>

<script>

export default {
	name: 'App',
  data () {
  	return {
  		title:'这是一个任务列表',
  		title2:'<b style="color:#fff000">这是一个带html的任务列表</b>',
  		items:[
  			{
	  			label:'学习',
	  			isFinished:false
	  		},
	  		{
	  			label:'喝水',
	  			isFinished:true
	  		}
  		],
  		itemClass:'itemli',
  	}
  }
}
</script>

<style>
html,body{
	font-size:14px; /*10px=14px/1rem*/
}

body{
	 margin: 0; padding: 0;
}

h1{ font-size: 1.6rem; margin: ;}
h2{ font-size: 1.4rem;}
h3{ font-size: 1.2rem;}
h4{ font-size: 1rem;}
h4,h6{ font-size:0.8rem;}
p{font-size: 1rem;}

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


.itemli{ text-align: left; color: #42B983; font-size: 1rem;}
.finished{
	color: #ccc;
	text-decoration: line-through;
}
</style>
