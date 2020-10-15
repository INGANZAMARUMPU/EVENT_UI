<template>
	<div class="container">
  		<Topbar/>
  		<Register/>
  		<Recycler :clients="clients" :evnmt="evnmt" @modifier="modifier" @suppr="supprimer"/>
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
	data(){
		return{
			clients:[],
			evenmt:{}
		}
	},
	mounted(){
		axios.get('http://127.0.0.1:8000/api/profile/'
		).then((response) => {
			this.clients = response.data;
			this.$store.state.clients = this.clients;
		}).catch((error) => {
		  console.error(error);
		}).finally(() => {
		});

		axios.get('http://127.0.0.1:8000/api/event/'
		).then((response) => {
			this.evenmt = response.data[0];
			this.$store.state.evenmt = this.evenmt
		}).catch((error) => {
		  console.error(error);
		}).finally(() => {
		});
	},
	methods:{
		modifier(client){
			console.log(client);
		},
		supprimer(client){
			console.log(client);
		}
	}
};
</script>

<style>

</style>
