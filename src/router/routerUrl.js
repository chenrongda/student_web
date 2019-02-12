// 进行懒加载
// const Layout = r => require.ensure([], () => r(require('@/pages/Layout')), 'Layout')
// const HomeIndex = r => require.ensure([], () => r(require('@/pages/home/index')), 'HomeIndex')
// const ClassIndex = r => require.ensure([], () => r(require('@/pages/class/index')), 'ClassIndex')
// const Student = r => require.ensure([], () => r(require('@/pages/class/student')), 'Student')
// const Score = r => require.ensure([], () => r(require('@/pages/class/score')), 'Score')

import Layout from '@/pages/Layout'
import HomeIndex from '@/pages/home/index'
import ClassIndex from '@/pages/class/index'
import Student from '@/pages/class/student'
import Score from '@/pages/class/score'


let asyncRouter = [{
	name: "首页",
	path: '/',
	component: Layout,
	redirect: '/index',
	children: [{
		path: 'index',
		component: HomeIndex,
		meta:{}		
	}]
},{
	name:"班级管理",
	path:'/class',
	component:Layout,
	redirect:'/class/index',
	children:[{
		name:'班级列表',
		path:'index',
		component:ClassIndex,
		meta:{}
	},{
		name:'学生名录',
		path:'student',
		component:Student,
		meta:{}
	},{
		name:'考试成绩',
		path:'score',
		component:Score,
		meta:{}
	}]
}]

//起始都是拒绝访问的
if (asyncRouter.length > 0) {
	for (var i = 0; i < asyncRouter.length; i++) {
		if (asyncRouter[i].children) {
			for (var j = 0; j < asyncRouter[i].children.length; j++) {
				asyncRouter[i].children[j].meta.isVisit = true;
			}
		}

	}
}
export {
	asyncRouter
}