//白名单,登陆，404这样的页面
// const Login = r => require.ensure([], () => r(require('@/pages/login')), 'Login')

import Login from '@/pages/login'


let whiteRouter = [{
	name: "登陆页",
	path: '/login',
	component: Login,
	meta:{}
}] 



//白名单列表
let whiteList = [];
if(whiteRouter.length>0){
	for(var i = 0 ; i < whiteRouter.length; i++){
		whiteList.push(whiteRouter[i].path);
		whiteRouter[i].meta.isVisit = true;
	}
}
export {
	whiteRouter,
	whiteList
}
