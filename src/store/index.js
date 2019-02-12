import Vue from 'vue'
import Vuex from 'vuex'


import {setSessionStorage,getSessionStorage} from '@/assets/js/utils'


Vue.use(Vuex)

const state = {
	userInfo:''
}

const getters = {
	getUserInfo:function(state){
		return state.userInfo;		
	}
}

const mutations = {
	setUserInfo:function(state,userInfo){
		state.userInfo = userInfo;
	}
}

const actions = {
	
	
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})