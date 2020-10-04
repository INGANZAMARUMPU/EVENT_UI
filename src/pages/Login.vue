<template>
  <div>
  	<form class="login-form">
    	<h1>WELCOME BACK</h1>
		<label for="id_username">Username:</label>
		<input type="text" placeholder="Username " class="input" required id="id_username">
		<label for="id_password">Password:</label>
		<input type="password" placeholder="Password " class="input" required id="id_password">
		<div>
    		<input type="submit" name="submit" value="submit" class="btn left">
    	</div>
	</form>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.login-form {
	background: #fff;
	padding: 2em;
	width: 30em;
	position: fixed;
	top: 50%;
	left: 50%;
	border-radius: 4px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, .25);
	transform: translate(-50%, -50%);
}
@media screen and (max-width: 650px){
	.login-form {
	  position: fixed;
	  top: 40%;
	  left: 50%;
	  margin: 2em auto;
	  width: 90%;
	}
}
</style>
