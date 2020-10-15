<template>
	<div class="container">
  		<Topbar/>
  		<ClientForm :client="client" :method="method" :tickets="tickets"/>
  		<Recycler :clients="clients" :evenmt="evenmt" @modifier="modifier" @suppr="supprimer"/>
  	</div>
</template>

<script>
import Topbar from "../components/Topbar";
import ClientForm from "../components/client_form";
import Recycler from "../components/recycler_view";
import axios from "axios";
export default {
	components: {
		Topbar,
		ClientForm,
		Recycler
	},
	data(){
		return{
			clients:[],
			tickets:[],
			evenmt:{},
			client:{"user":{},"ticket":{}},
			method:""// edit, delete
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

		axios.get('http://127.0.0.1:8000/api/ticket/'
		).then((response) => {
			this.tickets = response.data;
			this.$store.state.tickets = this.tickets
		}).catch((error) => {
		  console.error(error);
		}).finally(() => {
		});
	},
	methods:{
		modifier(client){
			this.method = "edit";
			this.client=client;
			console.log(client)
		},
		supprimer(client){
			this.method = "delete";
			this.client=client;
			console.log(client);
		}
	}
};
</script>

<style>

</style>
