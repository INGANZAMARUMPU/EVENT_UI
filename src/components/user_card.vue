<template>
<div class="user-card" :qr-data="client.qr">
    <div class="img-user">
        <img :src='client.avatar' alt="photo de profile" width="30px">
    </div>
    <div class="user-info firstname">
        {{ client.user.first_name }}
    </div>
    <div class="user-info lastname">
        {{ client.user.last_name }}
    </div>
    <div class="user-info tickettype">
        {{ client.ticket.name }}
    </div>
    <div class="hidden-infos">
        <div class="user-info quarter">{{ client.quarter}}</div>
        <div class="user-info place">{{ evenmt.place}}</div>
        <div class="user-info ticket-date">{{ evenmt.date }}</div>
    </div>
    <div class="user-hover">
        <div class="user-info phone">{{ client.phone}}</div>
        <div class="user-info email">{{ client.user.email}}</div>
        <div class="user-info date">{{ client.date }}</div>
        <PrintButton :client="client">Imprimer</PrintButton>
        <a @click="emitEdit" class="commands-btn">Modifier</a>
        <a @click="emitDelete" class="commands-btn">Supprimer</a>
    </div>
</div>
</template>

<script>
import PrintButton from "./print_button"
export default {
    props:{
        client:{
            type:Object,
            required: true
        },
        evenmt:{
            type:Object,
            required: true
        }
    },
    components: {
        PrintButton
    },
    methods: { 
        emitEdit(){
            this.$emit('modifier', this.client); 
        },
        emitDelete(){
            this.$emit('suppr', this.client); 
        }
    }
};
</script>

<style scoped>
.user-card{
    display: inline-flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 140px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 5px 10px 5px;
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.username{
    max-width: 130px;
    overflow: hidden;
}
.user-card:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.hidden-infos{
    display: none;
}
.img-user{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ddd;
    overflow: hidden;
}
.img-user img{
    width: 100%;
    margin:auto;
}
.user-hover a{
    display: block;
    margin: 3px;
    padding: 3px;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #37e;
    color: #37e;
    border-radius: 5px;
}
.user-hover{
    width: 130px;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    position: absolute;
    display: none;
}
.user-card:hover .user-hover{
    display: block;
}
</style>
