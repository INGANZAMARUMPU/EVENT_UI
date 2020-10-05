<template>
<div class="component profiles">
    <div style="display: flow-root;">
        <!-- <input type="submit" value="print all" style="float:left; height:2em" onclick="generateTickets('{% static 'css/card.css' %}')"> -->
        <!-- <input type="submit" value="copy emails" style="margin-left:5px; float:left; height:2em" onclick="toClipboard('{% for client in clients %}{{client.email}} {% endfor %}')"> -->
        <input type="text" placeholder="recherche..." style="float:right; height:2em">
    </div>
    <div class="recycler">
        <UserCard v-for="client in clients" :client="client" :evenmt="evenmt"/>
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
            clients:[
                {
                    "id": 5,
                    "user": {
                        "first_name": "Tititof",
                        "last_name": "Irakoze"
                    },
                    "fullname": "Tititof Irakoze",
                    "avatar": "http://127.0.0.1:8000/media/profiles/a327_barbershop_00393_CuDCx3M.jpg",
                    "phone": "68303893",
                    "email": "",
                    "date": "2020-09-29",
                    "ticket": {
                        "id": 7,
                        "name": "VIP",
                        "price": "20000.0",
                        "consommable": 5000.0,
                        "autres": null
                    },
                    "autres": "",
                    "qr": "2ffc431504188360d5f038bd0703359cdad20273a7d62dc0ef4590ad"
                },
                {
                    "id": 3,
                    "user": {
                        "first_name": "Jonathan",
                        "last_name": "Nkurunziza"
                    },
                    "fullname": "Jonathan Nkurunziza",
                    "avatar": "http://127.0.0.1:8000/media/profiles/profile.png",
                    "phone": "75960696",
                    "email": "jonkur96@gmail.com",
                    "date": "2020-09-27",
                    "ticket": {
                        "id": 5,
                        "name": "VIP",
                        "price": "20000.0",
                        "consommable": 0.0,
                        "autres": null
                    },
                    "autres": "",
                    "qr": "11c21fdc598e62d274cd2ba07046e3f955a191e3e9d3e3f115f6958e"
                },
                {
                    "id": 4,
                    "user": {
                        "first_name": "Joffray",
                        "last_name": "Tungamwese"
                    },
                    "fullname": "Joffray Tungamwese",
                    "avatar": null,
                    "phone": "545667789",
                    "email": "joffray@gmail.com",
                    "date": "2020-09-27",
                    "ticket": {
                        "id": 6,
                        "name": "SIMPLE",
                        "price": "15000.0",
                        "consommable": 3000.0,
                        "autres": null
                    },
                    "autres": "",
                    "qr": "e6c744773b1bf5a5eea52d0766181757e6e026a093a54954db64c64d"
                }
            ],
            evenmt:{
                "id": 1,
                "name": "Private Party",
                "place": "GIHOSHA",
                "date": "2020-10-03",
                "logo": "http://127.0.0.1:8000/media/logo/images.png"
            }
        }
    }
};
</script>

<style scoped>
</style>
