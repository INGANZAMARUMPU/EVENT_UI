<template>
	<div class="component profile">
	    <form action="." accept-charset="utf-8" enctype="multipart/form-data">	        
	        <div class="item">
	            <label for="id_firstname">Itazirano</label>
	            <input type="text" name="firstname" placeholder="Prenom "
	            	required="" id="id_firstname" v-model="client.user.first_name">
	        </div>
	        <div class="item">
	            <label for="id_lastname">Izina</label>
	            <input type="text" name="lastname" placeholder="Nom "
	            	required="" id="id_lastname" v-model="client.user.last_name">
	        </div>
	    
	        <div class="item">
	            <label for="id_phone">Telephone</label>
	            <input type="text" name="phone" placeholder="ex: 75 96 06 96 "
	            	required="" id="id_phone" v-model="client.phone">
	            
	        </div>
	        <div class="item">
	            <label for="id_email">Adresse e-mail</label>
	            <input type="text" name="email" placeholder="ex: username@gmail.com"
	            	id="id_email" v-model="client.email">
	        </div>
	    
	        <div class="item">
	            <label for="id_avatar">photo de profile</label>
	            <input type="file" name="avatar" accept="image/*" id="id_avatar"/>
	        </div>
	    
	        <div class="item">
	            <label for="id_autres">Autres informations</label>
	            <textarea name="autres" cols="40" rows="3" placeholder="Autres informations"
	            	id="id_autres"></textarea>
	        </div>
	        <div class="item">
	            <label for="id_ticket_type">Type de ticket</label>
	            <select name="ticket_type" required="" id="id_ticket_type">
					<option value="" selected="">---------</option>
					<option v-for="ticket in tickets" value="ticket.id"
						 :selected="ticket.id == client.ticket.id">
						{{ ticket.name }}
					</option>
				</select>  
	        </div>
	        <div style="display: flow-root;">
	            <div style="float:right;">
	                <button type="reset" @click="method=''">reset</button>
	                <button type="submit" submit="">{{ getSubmitTxt }}</button>
	            </div>
	        </div>
	    </form>
	</div>
</template>

<script>
export default {
	props: { 
		method:{
			type:String,
			default:""
		},
		client:{
			type : Object,
			default : {}
		}, 
		tickets:{
			type : Array,
			default : []
		} 
	},
	watch: {
		method : function (val){
			if(val == ""){
				this.client = {"user":{},"ticket":{}};
			}
		}
	},
	computed: {
		getSubmitTxt(){
			return this.method == "" ? "Submit": this.method;
		}
	}
};
</script>

<style>
form{
	font-size: 0;
}
form .item{
	display: inline-block;
	width: 33%;
	font-size: 1rem;
	margin-bottom: 3px;
	padding: 0 5px;
}
form li{
	font-size: .8rem;
}
form [type=text], form textarea, select{
	height: 2em;
	width: 100%;
}
@media screen and (max-width: 600px){
	form .item{
		width: 50%;
	}
}
@media screen and (max-width: 420px){
	form .item{
		width: 100%;
	}
}
</style>
