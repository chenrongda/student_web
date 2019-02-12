<template>
	<div class="score">
		<h1>{{gradeFormat(classInfo.grade) + classInfo.className}}——考试成绩</h1>
		<div class="top-btn">
			<el-button type="primary" size="small" @click="addExam()">新增考试</el-button>
		</div>
		<el-row :gutter="20">
			<el-col class="exam-card" :span="6" v-for="item in examList" :key="item.id">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>{{item.examName}}</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="editExam(item)">编辑</el-button>
						<el-button style="float: right; padding: 3px 10px" type="text" @click="recordScore(item)">成绩录入</el-button>
					</div>
					<div @click="countScore(item)" class="box-card-score">
						<p>数学平均分：{{item.mathAvgScore}}</p>
						<p>语文平均分：{{item.chineseAvgScore}}</p>
						<p>英语平均分：{{item.englishAvgScore}}</p>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-dialog  title="考试操作" :visible.sync="examVisible"  width="30%">
			<el-form ref="examInfo" :model="examInfo" label-width="80px">			
				<el-form-item label="考试统称">
					<el-input v-model="examInfo.examName"></el-input>
				</el-form-item>
				<el-form-item label="考试时间">
					<el-date-picker type="date" placeholder="选择日期" v-model="examInfo.examTime" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="examVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitExam">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog :title="scoreTitle" :visible.sync="scoreVisible" width="60%" top="40px" :close-on-press-escape="false" :close-on-click-modal="false" @close="scoreClose">
			<el-row :gutter="20">				
				<el-col :span="16">
					<el-table :data="scoreList"  :height="scoreTableHeight"  border style="width: 100%" size="mini">			
						<el-table-column  prop="studentName"  label="姓名" width="180"> </el-table-column>
						<el-table-column  label="数学成绩">
							<template slot-scope="scope">
								<el-input v-model="scope.row.mathScore" placeholder="请输入" size="mini"></el-input>
							</template>
						</el-table-column>
						<el-table-column  label="语文成绩">
							<template slot-scope="scope">
								<el-input v-model="scope.row.chineseScore" placeholder="请输入" size="mini"></el-input>
							</template>
						</el-table-column>
						<el-table-column  label="英语成绩">
							<template slot-scope="scope">
								<el-input v-model="scope.row.englishScore" placeholder="请输入" size="mini"></el-input>
							</template>
						</el-table-column>						
					</el-table>
				</el-col>
				<el-col :span="8">
					<h1>快速录入</h1>
					<el-form :model="quickly" label-width="70px" >
						<el-form-item label="学生姓名" prop="studentId">
							<el-select v-model="quickly.indexNum" filterable placeholder="请选择" style="width: 100%;" size="mini">
								<el-option v-for="(item,index) in scoreList" 	:key="item.studentId" :label="item.studentName" :value="index">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="数学成绩" prop="mathScore">
							<el-input v-model="quickly.mathScore" placeholder="请输入" size="mini"></el-input>
						</el-form-item>
						<el-form-item label="语文成绩" prop="chineseScore">
							<el-input v-model="quickly.chineseScore" placeholder="请输入" size="mini"></el-input>
						</el-form-item>
						<el-form-item label="英语成绩" prop="englishScore">
							<el-input v-model="quickly.englishScore" placeholder="请输入" size="mini"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="quickAddScore('ruleForm')">添 加</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
			<div style="text-align: center;margin-top:20px;">
				<el-button type="primary" @click="saveScore">保 存</el-button>
			</div>
		</el-dialog>
		<el-dialog :title="countTitle" :visible.sync="countVisible" width="60%" top="40px">
			<el-row :gutter="20">				
				<el-col :span="16">
					<el-table :data="countList"  :height="scoreTableHeight"  border style="width: 100%" size="mini" show-summary sum-text="平均分" :summary-method="getAvgScore">			
						<el-table-column  prop="studentName"  label="姓名" width="100"> </el-table-column>
						<el-table-column  prop="mathScore"  label="数学成绩" sortable></el-table-column>
						<el-table-column  prop="chineseScore"  label="语文成绩" sortable></el-table-column>
						<el-table-column  prop="englishScore"  label="英语成绩" sortable></el-table-column>
						<el-table-column  prop="totalScore" label="总分" sortable></el-table-column>											
					</el-table>
				</el-col>
				<el-col :span="8">
					<div :style="{height:scoreTableHeight/3+'px',width:'100%'}" id="math-echart">
						
					</div>
					<div :style="{height:scoreTableHeight/3+'px',width:'100%'}" id="chinese-echart">
						
					</div>
					<div :style="{height:scoreTableHeight/3+'px',width:'100%'}" id="english-echart">
						
					</div>
				</el-col>
			</el-row>
		</el-dialog>
	</div>
</template>

<script>
	import echarts from 'echarts'
	import {getExamList,addExam,getScoreList,addScore} from '@/api/index'
	import {gradeFormat} from '@/assets/js/utils'
	export default{
		data(){
			return{
				scoreTableHeight:'',
				classInfo:this.$route.query,
				examVisible:false,
				examInfo:{},
				examList:[],
				scoreVisible:false,
				scoreList:[],
				scoreTitle:"考试成绩",
				quickly:{
					indexNum:"",
					mathScore:"",
					chineseScore:"",
					englishScore:""
				},
				countTitle:"考试成绩",
				countVisible:false,
				isFirstOpenCount:true,
				countList:[],
				mathEchartOption:{},
				chineseEchartOption:{},
				englishEchartOption:{},
				mathEchart:"",
				chineseEchart:"",
				englishEchart:"",
			}
		},
		created(){
			this.init();
			this.getExamList();
		},
		methods:{
			gradeFormat:gradeFormat,
			init:function(){
				//初始化
				let height = document.body.clientHeight;
				this.scoreTableHeight = height -240;
			},
			getExamList:function(){
				let param = {
					classesId:this.classInfo.id
				}
				getExamList(param).then((res)=>{
					this.examList = res.data
				})
			},
			addExam:function(){
				this.examVisible = true;
				this.examInfo = {}
			},
			editExam:function(item){
				this.examVisible = true;
				this.examInfo = item
			},
			submitExam:function(){
				this.examInfo.classesId = this.classInfo.id;
				addExam(this.examInfo).then((res)=>{
					if(res.data.code == 1){
						this.$message({
							message: '操作成功',
							type: 'success',									
						});
						this.examVisible = false;
					}else{
						this.$message({
							message: res.data.message,
							type: 'error'
						});
					}
				})
			},
			recordScore:function(item){
				this.scoreTitle = item.examName;
				this.scoreVisible = true;
				let param = {
					classesId:this.classInfo.id,
					grade:this.classInfo.grade,
					examId:item.id
				}
				getScoreList(param).then((res)=>{
					this.quickly={}
					if(res.data){
						for(var i = 0 ; i < res.data.length;i++){
							if(res.data[i].examId == null){
								res.data[i].examId = item.id				
							}
						}
						this.scoreList = res.data
					}
				})
			},
			saveScore:function(){
				addScore(this.scoreList).then((res)=>{
					if(res.data.code == 1){
						this.$message({
							message: '保存成功',
							type: 'success',									
						});
						this.scoreVisible = false;
					}else{
						this.$message({
							message: res.data.message,
							type: 'error'
						});
					}
				})		
			},
			scoreClose:function(){
				this.getExamList();
			},
			quickAddScore:function(){
				let indexNum = this.quickly.indexNum;
				this.scoreList[indexNum].mathScore =this.quickly.mathScore;
				this.scoreList[indexNum].chineseScore = this.quickly.chineseScore;
				this.scoreList[indexNum].englishScore = this.quickly.englishScore;
			},
			initEchart:function(){						
				this.mathEchart = echarts.init(document.getElementById('math-echart'),'light');
				this.chineseEchart = echarts.init(document.getElementById('chinese-echart'),'light');
				this.englishEchart = echarts.init(document.getElementById('english-echart'),'light');
		        // 指定图表的配置项和数据
		        this.mathEchartOption = {
		        	title:{
		        		subtext:'数学成绩'
		        	},
		        	tooltip : {
		        		trigger: 'item',
		        		formatter: "{a} <br/>{b} : {c} ({d}%)"
		        	},
		        	series : [
		        	{
		        		name: '数学成绩',
		        		type: 'pie',
		        		radius : '55%',
		        		center: ['50%', '50%'],
		        		data:[],
		        	}
		        	]
		        };
		        this.chineseEchartOption = {
		        	title:{
		        		subtext:'语文成绩'
		        	},
		        	tooltip : {
		        		trigger: 'item',
		        		formatter: "{a} <br/>{b} : {c} ({d}%)"
		        	},
		        	series : [
		        	{
		        		name: '语文成绩',
		        		type: 'pie',
		        		radius : '55%',
		        		center: ['50%', '50%'],
		        		data:[],
		        	}
		        	]
		        };
		        this.englishEchartOption = {
		        	title:{
		        		subtext:'英语成绩'
		        	},
		        	tooltip : {
		        		trigger: 'item',
		        		formatter: "{a} <br/>{b} : {c} ({d}%)"
		        	},
		        	series : [
		        	{
		        		name: '英语成绩',
		        		type: 'pie',
		        		radius : '55%',
		        		center: ['50%', '50%'],
		        		data:[ ],
		        	}
		        	]
		        };		        
		    },
		    countScore:function(item){
		    	this.countTitle = item.examName;
		    	this.countVisible = true;
		    	if(this.isFirstOpenCount == true){
		    		//第一次打开
		    		this.$nextTick((res)=>{
		    			this.initEchart();
		    		})
		    		this.isFirstOpenCount = false;
		    	}
		    	let param = {
		    		classesId:this.classInfo.id,
		    		grade:this.classInfo.grade,
		    		examId:item.id
		    	}
		    	getScoreList(param).then((res)=>{
		    		if(res.data){
		    			let mathData = [{value:0, name:'90分以上'},{value:0, name:'80-89分'},{value:0, name:'70-79分'},{value:0, name:'60-69分'},{value:0, name:'不及格'}];
		    			let chineseData = [{value:0, name:'90分以上'},{value:0, name:'80-89分'},{value:0, name:'70-79分'},{value:0, name:'60-69分'},{value:0, name:'不及格'}];
		    			let englishData = [{value:0, name:'90分以上'},{value:0, name:'80-89分'},{value:0, name:'70-79分'},{value:0, name:'60-69分'},{value:0, name:'不及格'}];
		    			for(var i = 0 ; i < res.data.length;i++){
		    				res.data[i].totalScore = res.data[i].mathScore + res.data[i].chineseScore + res.data[i].englishScore
		    				if(res.data[i].mathScore){
		    					if(res.data[i].mathScore >= 90){
		    						mathData[0].value += 1;
		    					}else if(res.data[i].mathScore < 90 && res.data[i].mathScore >= 80){
		    						mathData[1].value += 1;
		    					}else if(res.data[i].mathScore < 80 && res.data[i].mathScore >= 70){
		    						mathData[2].value += 1;
		    					}else if(res.data[i].mathScore < 70 && res.data[i].mathScore >= 60){
		    						mathData[3].value += 1;
		    					}else{
		    						mathData[4].value += 1;
		    					}
		    				}

		    				if(res.data[i].chineseScore){
		    					if(res.data[i].chineseScore >= 90){
		    						chineseData[0].value += 1;
		    					}else if(res.data[i].chineseScore < 90 && res.data[i].chineseScore >= 80){
		    						chineseData[1].value += 1;
		    					}else if(res.data[i].chineseScore < 80 && res.data[i].chineseScore >= 70){
		    						chineseData[2].value += 1;
		    					}else if(res.data[i].chineseScore < 70 && res.data[i].chineseScore >= 60){
		    						chineseData[3].value += 1;
		    					}else{
		    						chineseData[4].value += 1;
		    					}
		    				}

		    				if(res.data[i].englishScore){
		    					if(res.data[i].englishScore >= 90){
		    						englishData[0].value += 1;
		    					}else if(res.data[i].englishScore < 90 && res.data[i].englishScore >= 80){
		    						englishData[1].value += 1;
		    					}else if(res.data[i].englishScore < 80 && res.data[i].englishScore >= 70){
		    						englishData[2].value += 1;
		    					}else if(res.data[i].englishScore < 70 && res.data[i].englishScore >= 60){
		    						englishData[3].value += 1;
		    					}else{
		    						englishData[4].value += 1;
		    					}
		    				}
		    			}
		    			this.countList = res.data
		    			this.mathEchartOption.series[0].data = mathData;
		    			this.chineseEchartOption.series[0].data = chineseData;
		    			this.englishEchartOption.series[0].data = englishData;
		    			// 使用刚指定的配置项和数据显示图表。
				        this.mathEchart.setOption(this.mathEchartOption);
				        this.chineseEchart.setOption(this.chineseEchartOption);
				        this.englishEchart.setOption(this.englishEchartOption);		    			
		    		}
		    	})
		    },
		    getAvgScore:function(param){
		    	const { columns, data } = param;				
		    	let mathNum = 0,chineseNum = 0,englishNum = 0,totalNum = 0;
		    	let mathScore = 0,chineseScore = 0,englishScore = 0,totalScore = 0;
		    	let sums = ["平均分"];
		    	for(var i = 0 ; i < data.length; i++){
		    		if(data[i].mathScore){
		    			mathNum++;
		    			mathScore+=data[i].mathScore;
		    		}
		    		if(data[i].chineseScore){
		    			chineseNum++;
		    			chineseScore+=data[i].chineseScore;
		    		}
		    		if(data[i].englishScore){
		    			englishNum++;
		    			englishScore+=data[i].englishScore;
		    		}
		    		if(data[i].mathScore || data[i].chineseScore || data[i].englishScore){
		    			totalNum++;
		    			totalScore+= data[i].mathScore+data[i].chineseScore+data[i].englishScore;
		    		}
		    	}
		    	if(mathNum > 0){
		    		sums.push(mathScore/mathNum);
		    	}
		    	if(chineseNum > 0){
		    		sums.push(chineseScore/chineseNum);
		    	}
		    	if(englishNum > 0){
		    		sums.push(englishScore/englishNum);
		    	}
		    	if(totalNum > 0){
		    		sums.push(totalScore/totalNum);
		    	}

		    	return sums;
		    }
		}
	}
</script>

<style lang="scss">
.score{
	h1{
		text-align: center;
	}
	.top-btn{
		margin-bottom: 10px;
	}

	.exam-card{
		margin-bottom: 20px;
	}

	.el-dialog__body{
		padding: 10px;
	}

	.box-card-score{
		cursor: pointer;
		padding-left:10px;
	}

	.box-card-score:hover{
		background-color: #E6A23C;
		color:#fff;
	}
}
</style>