<template>
<div class="user-card" :qr-data="client.qr">
    <div class="img-user">
        <img :src='client.avatar' alt="photo de profile" width="30px">
    </div>
    <div class="user-info firstname">
        {{ client.first_name }}
    </div>
    <div class="user-info lastname">
        {{ client.last_name }}
    </div>
    <div class="user-info tickettype">
        {{ client.ticket }}
    </div>
    <div class="hidden-infos">
        <div class="user-info quarter">{{ evenmt.quarter}}</div>
        <div class="user-info place">{{ evenmt.place}}</div>
        <div class="user-info ticket-date">{{ evenmt.date }}</div>
    </div>
    <div class="user-hover">
        <div class="user-info phone">{{ client.phone}}</div>
        <div class="user-info email">{{ client.email}}</div>
        <div class="user-info date">{{ client.date }}</div>
        <a href="#" class="commands-btn btn-print" onclick="generateTicket(event,'{% static 'css/card.css' %}')">
            Imprimer
        </a>
        <a href="{% url 'editprofile' client.id %}" class="commands-btn">Modifier</a>
        <a href="{% url 'deleteprofile' client.id %}" class="commands-btn">Supprimer</a>
    </div>
</div>
</template>

<script>
export default {
    props:{
        client:{
            type:Object,
            required: true
        },
        event:{
            type:Object,
            required: true
        }
    }
};
</script>

<style scoped>
</style>
