<template>
    <a href="#" class="commands-btn btn-print" @click="generateTicket()">
        <slot/>
    </a>
</template>

<script>
import qrjs2 from 'qrjs2';
import {templateHead, templateBody, templateFoot, printTicket} from "./print_functions";
export default {
    props:{
        client:{
            user:Object,
            required: true
        }
    },
    methods: {
        generateTicket(){
            printTicket(templateBody(this.client, this.$store.getters.evenmt));
        }
    }
};
</script>

<style scoped>
</style>
