<template>
<div class="component profiles">
    <div style="display: flow-root;">
        <!-- <input type="submit" value="print all" style="float:left; height:2em" onclick="generateTickets('{% static 'css/card.css' %}')"> -->
        <!-- <input type="submit" value="copy emails" style="margin-left:5px; float:left; height:2em" onclick="toClipboard('{% for client in clients %}{{client.email}} {% endfor %}')"> -->
        <input type="text" placeholder="recherche..." style="float:right; height:2em">
    </div>
    <div class="recycler">
        <UserCard v-for="client in clients" :client="client" :evenmt="evenmt" v-on="$listeners"/>
    </div>
</div>
</template>

<script>
import UserCard from './user_card'
export default {
    components: {
        UserCard
    },
    props:{
        clients:{
            type : Array,
            default : [],
        },
        evenmt:{
            type: Object,
            default: {}
        }
    }
};
</script>

<style scoped>
</style>
