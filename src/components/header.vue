<template>
	<div class="header">
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="system-login">
					后台管理系统
				</div>
			</el-col>
			<el-col :span="6" :offset="6">
				<el-dropdown class="user-info"  @command="handleCommand">
					<span class="el-dropdown-link">
						{{userInfo.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item  command="changePwd">修改密码</el-dropdown-item>
						<el-dropdown-item  command="logout">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {logout} from '@/api/index'
	export default {
		data(){
			return{
				userInfo:this.$store.getters.getUserInfo
			}
		},
		methods: {
			handleCommand(command) {
				if(command == "logout"){
					logout().then((res)=>{
						if(res.data.code == 1){
							this.$message({
								message: '退出成功',
								type: 'success',									
							});
							this.$router.push({
								path: '/login'
							})
						}else{
							this.$message({
								message: res.data.message,
								type: 'error'
							});
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
.header{
	height: 60px;
	background-color:#393D49;
	line-height: 60px;
	margin: 0 -20px;
	color: #fff;
	.system-login{
		font-size: 24px;
		padding-left: 48px;
	}

	.user-info{
		float: right;
		margin-right: 48px;
		cursor: pointer;
		color: #fff;
	}
}

</style>