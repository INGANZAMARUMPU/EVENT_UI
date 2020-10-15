import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
        clients:[],
        evenmt:null,
        tickets:[] //0:default, 1:edition, 2:deletion
    },
	mutations: {},
	actions: {},
	getters:{
        clients(state){
            return state.clients;
        },
        evenmt(state){
            return state.evenmt;
        },
        tickets(state){
            return state.action;
        }
    }
})