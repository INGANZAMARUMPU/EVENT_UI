<template>
    <a href="#" class="commands-btn btn-print" @click="generateTicket(client)">
        <slot/>
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
            var evenmt = this.$store.state.evenmt;
            console.log(client, evenmt);
        }
    }
};
</script>

<style scoped>
</style>
