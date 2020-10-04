<template>
	<div class="component profile">
	    <form action="." accept-charset="utf-8" enctype="multipart/form-data">	        
	        <div class="item">
	            <label for="id_firstname">Itazirano</label>
	            <input type="text" name="firstname" placeholder="Prenom " required="" id="id_firstname">
	        </div>
	        <div class="item">
	            <label for="id_lastname">Izina</label>
	            <input type="text" name="lastname" placeholder="Nom " required="" id="id_lastname">
	        </div>
	    
	        <div class="item">
	            <label for="id_phone">Telephone</label>
	            <input type="text" name="phone" placeholder="ex: 75 96 06 96 " required="" id="id_phone">
	            
	        </div>
	        <div class="item">
	            <label for="id_email">Adresse e-mail</label>
	            <input type="text" name="email" placeholder="ex: username@gmail.com" id="id_email">
	        </div>
	    
	        <div class="item">
	            <label for="id_avatar">photo de profile</label>
	            <input type="file" name="avatar" accept="image/*" id="id_avatar">
	        </div>
	    
	        <div class="item">
	            <label for="id_autres">Autres informations</label>
	            <textarea name="autres" cols="40" rows="3" placeholder="Autres informations" id="id_autres"></textarea>
	        </div>
	        <div class="item">
	            <label for="id_ticket_type">Type de ticket</label>
	            <select name="ticket_type" required="" id="id_ticket_type">
					<option value="" selected="">---------</option>

					<option value="1">VIP</option>

					<option value="2">SIMPLE</option>

					<option value="3">HOOD</option>
				</select>  
	        </div>
	        <div style="display: flow-root;">
	            <div style="float:right;">
	                <button type="reset">reset</button>
	                <button type="submit" submit="">envoyer</button>
	            </div>
	        </div>
	    </form>
	</div>
</template>

<script>
export default {
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
