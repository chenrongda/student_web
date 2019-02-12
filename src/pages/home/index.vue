<template>
	<div class="index">
		<el-row>
			<el-col :span="24">
				<el-card class="box-card">
					<div slot="header" class="clearfix index-title">
						<span>
							<el-select v-model="defaultClass" placeholder="请选择" size="mini" @change="buildEchart">
								<el-option  v-for="item in classList" :key="item.id" :label="item.className" :value="item.id"> </el-option>
							</el-select>
							情况统计分析
						</span>
					</div>
					<div id="score-echart" :style="{height:containHeight*0.4+'px'}">
						
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" style="margin-top: 20px;">
			<el-col :sm="24" :md="18">
				<el-card class="box-card">
					<div id="people-echart" :style="{height:containHeight*0.4+'px'}">
						
					</div>
				</el-card>
			</el-col>
			<el-col  :md="6" class="hidden-sm-only">
				<el-card class="box-card">
					<div id="radar-echart" :style="{height:containHeight*0.4+'px'}" >
						
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import echarts from 'echarts'
	import {getClassesList,getExamList,getPassingNumber} from '@/api/index'
	import {gradeFormat} from '@/assets/js/utils'
	export default{
		data(){
			return{
				containHeight:0,
				classList:[],
				defaultClass:"",
				scoreEchart:"",
				peopleEchart:"",
				radarEchart:""
			}
		},
		created(){
			this.init();
		},
		methods:{
			init:function(){
				//初始化
				let height = document.body.clientHeight;
				this.containHeight = height -140;
				getClassesList().then((res)=>{
					if(res.data){
						for(var i = 0 ; i < res.data.length; i++){
							if(i==0){
								this.defaultClass = res.data[i].id;
							}
							res.data[i].className = gradeFormat(res.data[i].grade) + res.data[i].className;
						}
						this.classList = res.data;
						this.initEchart();
					}					
				})
			},
			initEchart:function(){
				this.$nextTick((res)=>{
					this.scoreEchart = echarts.init(document.getElementById('score-echart'));
					this.peopleEchart = echarts.init(document.getElementById('people-echart'),'light');					
					this.radarEchart = echarts.init(document.getElementById('radar-echart'),'light');
					this.buildEchart();
				})
				
			},
			buildEchart:function(){
				this.getAvgScore();
				this.getScorePeople();
			},
			getAvgScore:function(){
				let param = {
					classesId:this.defaultClass
				}
				let option ={
					title: {
						text: '班级平均分趋势'
					},
					tooltip: {
						trigger:'axis'
					},
					grid:{
						left:'3%',
						right:'1%',
						bottom:'36'
					},
					toolbox: {
						show: true,
						feature: {
							dataView: {readOnly: false},
							magicType: {type: ['line', 'bar']},
							restore: {},
							saveAsImage: {}
						}
					},
					legend: {
						data:['数学平均分','语文平均分','英语平均分']
					},
					xAxis: {
						data: []
					},
					yAxis: {},
					series: [{
						name: '数学平均分',
						type: 'line',
						data: []
					},{
						name: '语文平均分',
						type: 'line',
						data: []
					},{
						name: '英语平均分',
						type: 'line',
						data: []
					}]
				};
				getExamList(param).then((res)=>{
					if(res.data){
						for(var i = 0 ; i < res.data.length ; i++ ){
							option.xAxis.data.push(res.data[i].examName);
							option.series[0].data.push(res.data[i].mathAvgScore)
							option.series[1].data.push(res.data[i].chineseAvgScore)
							option.series[2].data.push(res.data[i].englishAvgScore)
						}
						this.scoreEchart.setOption(option);
					}
				})
			},
			getScorePeople:function(){
				let param = {
					classesId:this.defaultClass
				}
				let option ={
					title: {
						text: '班级各科及格人数'
					},
					tooltip: {
						trigger:'axis',
					},
					toolbox: {
						show: true,
						feature: {
							dataView: {readOnly: false},
							magicType: {type: ['line', 'bar']},
							restore: {},
							saveAsImage: {}
						}
					},
					grid:{
						left:'3%',
						right:'1%',
						bottom:'36'
					},
					legend: {
						data:['数学','语文','英语']
					},
					xAxis: {
						data: [],
						axisPointer: {
							type: 'shadow'
						}
					},
					yAxis: {},
					series: [{
						name: '数学',
						type: 'bar',
						data: []
					},{
						name: '语文',
						type: 'bar',
						data: []
					},{
						name: '英语',
						type: 'bar',
						data: []
					}]
				};
				let radarOption = {
					title: {
						text: '偏科情况'
					},
					grid:{
						left:'3%',
						right:'1%',
						bottom:'36'
					},
					legend: {
						data: ['预算分配'],
						bottom:'0'
					},
					radar: {
						indicator: [
						{ name: '数学', max: 0},
						{ name: '语文', max: 0},
						{ name: '英语', max: 0},
						]
					},
					series: [{
						type: 'radar',
						data : [
						{
							value : [],
						}
						]
					}]
				}
				getPassingNumber(param).then((res)=>{
					if(res.data){
						let mathRadar=0,chineseRadar=0,englishRadar=0,totalRadar=0;
						for(var i = 0 ; i < res.data.length ; i++ ){
							option.xAxis.data.push(res.data[i].examName);
							option.series[0].data.push(res.data[i].mathNum)
							option.series[1].data.push(res.data[i].chineseNum)
							option.series[2].data.push(res.data[i].englishNum)
							mathRadar += Number(res.data[i].mathNum);
							chineseRadar+=Number(res.data[i].chineseNum);
							englishRadar+= Number(res.data[i].englishNum);
							totalRadar += Number(res.data[i].examNum);
						}
						radarOption.radar.indicator[0].max = totalRadar;
						radarOption.radar.indicator[1].max = totalRadar;
						radarOption.radar.indicator[2].max = totalRadar;							
						radarOption.series[0].data[0].value.push( mathRadar);
						radarOption.series[0].data[0].value.push( chineseRadar);
						radarOption.series[0].data[0].value.push( englishRadar);

						this.peopleEchart.setOption(option);
						this.radarEchart.setOption(radarOption);
					}
				})
			}
		}
	}
</script>
<style lang="scss">
.index{
	.index-title{
		text-align: center;
	}
}
</style>