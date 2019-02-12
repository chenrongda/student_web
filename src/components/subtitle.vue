<template>
	<div class="sub-title">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="(item,key) in subList" :key="key" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				subList:[]
			};
		},
		created(){
			this.getBreadcrumb()
		},
		methods:{
			getBreadcrumb:function(){
				if(this.$route.matched){
					let temp = [];
					for(var i = 0 ; i < this.$route.matched.length; i++){
						if(this.$route.matched[i].name){
							temp.push({
								name:this.$route.matched[i].name,
								path:this.$route.matched[i].redirect ? this.$route.matched[i].redirect:this.$route.matched[i].path,
							})	
						}					
					}
					this.subList = temp;
				}
			}
		},
		watch:{
			'$route'(to, from) {
				this.getBreadcrumb()
			}
		}
	}
</script>

<style lang="scss">
.sub-title{	
	margin-bottom:10px;
}
</style>