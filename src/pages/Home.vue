<template>
	<div class="container">
  		<Topbar/>
  		<Register/>
  		<Recycler/>
  	</div>
</template>

<script>
import Topbar from "../components/Topbar";
import Register from "../components/Register";
import Recycler from "../components/recycler_view";
import axios from "axios";
export default {
	components: {
		Topbar,
		Register,
		Recycler
	},
	mounted(){
		axios.get('http://127.0.0.1:8000/api/profile/'
		).then((response) => {
			this.$store.state.clients = response.data;
		}).catch((error) => {
		  console.error(error);
		}).finally(() => {
		});

		axios.get('http://127.0.0.1:8000/api/event/'
		).then((response) => {
			this.$store.state.evenmt = response.data[0];
		}).catch((error) => {
		  console.error(error);
		}).finally(() => {
		});
	}
};
</script>

<style>

</style>
