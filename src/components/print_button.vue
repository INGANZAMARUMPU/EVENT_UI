<template>
    <a href="#" class="commands-btn btn-print" @click="generateTicket(client)">
        Imprimer
    </a>
</template>

<script>
export default {
    props:{
        client:{
            user:Object,
            required: true
        }
    },
    methods: {
        generateTicket(client){
            console.log(client);
        }
    }
};
</script>

<style scoped>
</style>
