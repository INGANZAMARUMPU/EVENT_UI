<template>
	<div class="container">
  		<Topbar/>
  		<Register/>
  		<Recycler/>
  	</div>
</template>

<script>
import Topbar from "../components/Topbar"
import Register from "../components/Register"
import Recycler from "../components/recycler_view"
export default {
	components: {
		Topbar,
		Register,
		Recycler
	}
};
</script>

<style>

</style>
