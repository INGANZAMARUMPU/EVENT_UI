<template>
  <div id="app">
  	<div v-if="logged_in">
  		
  	</div>
  	<login-page v-else/>
  </div>
</template>

<script>
import Login from "./pages/Login";

export default {
	components:{
		"login-page": Login
	},
	data(){
		return{
			logged_in: false
		}
	}
};
</script>

<style src="./css/styles.css">

</style>
