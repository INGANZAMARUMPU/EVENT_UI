<template>
    <div class="navbar">
        <ul>
            <li><a href="/">Acceuil</a></li>
            <li><a href="/admin" target="_blank">Administration</a></li>
        </ul>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.navbar{
	background-color: #37e;
	display: inline-block;
	width: 100%;
    position: sticky;
    z-index: 3;
}
ul{
	float: right;
}
a{
	text-decoration: none;
	color: white;
	font-family: sans-serif;
	font-size: 20px;
	padding: 0 5px;
}
li{
	display: inline-block;
	padding: 5px 0;
}
li:hover{
	background-color: #15a;
}
</style>
