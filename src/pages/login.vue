<template>
	<div class="login">
		<div class="login-contain">
			<div class="message">系统登录</div>
			<div id="darkbannerwrap"></div>   
			<el-form :model="user" :rules="rules" ref="ruleForm">
				<el-form-item prop="name">
					<el-input v-model="user.name" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item prop="pwd">
					<el-input v-model="user.pwd" placeholder="密码" type="password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="btn" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import {login} from '@/api/index'
	export default {
		data() {
			return {
				user: {
					name: '',
					pwd: '',					
				},
				rules: {
					name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
					pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
				}
			};
		},
		methods:{
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						login(this.user).then((res)=>{
							if(res.data.code == 1){
								this.$message({
									message: '登陆成功',
									type: 'success',									
								});
								this.$router.push({
									path: '/'
								})
							}else{
								this.$message({
									message: res.data.message,
									type: 'error'
								});
							}
						})
					}
				});
			}
		}
	}
</script>
<style lang="scss">
.login{
	background: url('../../static/images/bg.jpg') center center / cover no-repeat;
	min-height: 100%;
	padding-top:120px;

	.login-contain{
		min-height: 420px;
		max-width: 420px;
		background-color: rgb(255, 255, 255);
		box-sizing: border-box;
		margin: 0 auto 0px;
		padding: 40px;
		border-radius: 4px;

		.message{
			position: relative;
			color: rgb(255, 255, 255);
			font-size: 20px;
			margin: 10px 0px 0px -58px;
			padding: 18px 10px 18px 60px;
			background: #409EFF;
		}

		#darkbannerwrap {
			width: 18px;
			height: 10px;
			position: relative;
			margin: 0px 0px 20px -58px;
		}

		.btn{
			width: 100%;
		}
	}
}


</style>