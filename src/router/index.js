import Vue from 'vue'
import Router from 'vue-router'
//无需权限验证路径配置
import {whiteRouter,whiteList}  from './whiteRouter'
//权限验证路径配置
import {asyncRouter}  from './routerUrl'
//获取存储
import store from '@/store'
//获取信息
import {getAdminInfo} from '@/api/index'
import { Message } from 'element-ui';

Vue.use(Router)

//初始化路由
const router = new Router({
	mode: 'history',    
	routes:whiteRouter.concat(asyncRouter)
})


//权限关联
router.beforeEach((to, from, next) => {
    //已经登陆
    if (whiteList.indexOf(to.path) >= 0) {
    	next();
    }else{
    	if(store.getters.getUserInfo != ''){
    		next();
    	}else{    			
    		getAdminInfo().then((res)=>{
    			store.commit('setUserInfo',res.data);
    			next();
    		}).catch((res)=>{
    			next(false);
    		})
    	}
    }
})


//全局解析守卫
router.beforeResolve((to, from, next)=>{
    //判断是否可以访问页面
    if(to.meta.isVisit == true){
    	next();
    }else{
    	Message({
    		message: '您没有访问权限',
    		type: 'warning'
    	})
    	next(false);
    }
})

export default router
