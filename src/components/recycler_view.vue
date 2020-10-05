<template>
<div class="component profiles">
    <div style="display: flow-root;">
        <!-- <input type="submit" value="print all" style="float:left; height:2em" onclick="generateTickets('{% static 'css/card.css' %}')"> -->
        <!-- <input type="submit" value="copy emails" style="margin-left:5px; float:left; height:2em" onclick="toClipboard('{% for client in clients %}{{client.email}} {% endfor %}')"> -->
        <input type="text" placeholder="recherche..." style="float:right; height:2em">
    </div>
    <div class="recycler">
        <UserCard/>
    </div>
</div>
</template>

<script>
import UserCard from './user_card'
export default {
    components: {
        UserCard
    },
    data(){
        return{

        }
    }
};
</script>

<style scoped>
</style>
