<template>
	<div class="aside">
		<el-menu  :default-active="menuActive" class="el-menu-vertical-demo"   background-color="#393D49" text-color="#fff" active-text-color="#ffd04b" router>
			<el-menu-item index="/index">
				<i class="el-icon-menu"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="/class">
				<i class="el-icon-menu"></i>
				<span slot="title">班级管理</span>
			</el-menu-item>
			<el-menu-item index="3" disabled>
				<i class="el-icon-menu"></i>
				<span slot="title">导航三</span>
			</el-menu-item>
			<el-menu-item index="4" disabled>
				<i class="el-icon-setting"></i>
				<span slot="title">导航四</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				menuActive:"/index"
			}
		},
		created(){
			this.initDefaultActive()
		},
		methods: {
			initDefaultActive:function(){
				var arr = this.$route.fullPath.split('/');
				this.menuActive = "/"+arr[1];
			}	
		}
	}
</script>


<style lang="scss">
.aside{
	height: 100%;
	background-color:#393D49;

	.el-menu{
		border-right:0px;
	}
}

</style>