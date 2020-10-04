<template>
  <div id="app">
  	<home v-if="logged_in"/>
  	<login-page v-else/>
  </div>
</template>

<script>
import Login from "./pages/Login";
import Home from "./pages/Home";

export default {
	components:{
		Home,
		"login-page": Login
	},
	data(){
		return{
			logged_in: true
		}
	}
};
</script>

<style src="./css/styles.css">

</style>
