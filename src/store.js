import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
        clients:[],
        evenmt:null,
        action:0 //0:default, 1:edition, 2:deletion
    },
	mutations: {},
	actions: {},
	getters:{
        allClients(state){
            return state.clients;
        },
        evenmt(state){
            return state.evenmt;
        },
        action(state){
            return state.action;
        }
    }
})