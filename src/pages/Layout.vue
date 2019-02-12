<template>
	<el-container style="height: 100%;">
		<el-header><HEADER></HEADER></el-header>
		<el-container>			
			<el-aside width="200px">
				<ASIDE></ASIDE>
			</el-aside>
			<el-main>
				<SUBTITLE></SUBTITLE>
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive"></router-view>
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive"></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import HEADER from '@/components/header.vue'
	import ASIDE from '@/components/aside.vue'
	import SUBTITLE from '@/components/subtitle.vue'
	export default {
		components: {HEADER, ASIDE,SUBTITLE},
	}
</script>

<style lang="scss">
</style>
