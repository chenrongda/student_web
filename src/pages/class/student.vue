<template>
	<div class="student">
		<h1>{{gradeFormat(classInfo.grade) + classInfo.className}}——学生名录</h1>
		<div class="top-btn">
			<el-button type="primary" size="small" @click="addStudent()">新增学生</el-button>
			<el-button type="primary" size="small" @click="exportStudent()">导出</el-button>
		</div>
		<el-table :data="studenList"  :height="tableHeight"  border style="width: 100%" size="mini" id="studentList">			
			<el-table-column  prop="name"  label="姓名"   width="100"> </el-table-column>
			<el-table-column  prop="sex"  label="性别"   width="60">
				<template slot-scope="scope">
					{{scope.row.sex==1?"男":"女"}}
				</template>
			</el-table-column>
			<el-table-column  prop="birth"  label="出生日期"   width="100" :formatter="formatterTime"> </el-table-column>
			<el-table-column  prop="nation"  label="民族"   width="80"> </el-table-column>
			<el-table-column  prop="phone"  label="联系电话"   width="100"> </el-table-column>
			<el-table-column  prop="parentName"  label="家长姓名"   width="100"> </el-table-column>
			<el-table-column  prop="startSchool"  label="入学时间"   width="100"  :formatter="formatterTime"> </el-table-column>
			<el-table-column  prop="hukou"  label="户口所在地"   width="100"> </el-table-column>
			<el-table-column  prop="address"  label="家庭住址" > </el-table-column>
			<el-table-column  label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="editStudent(scope.row)" type="text" size="small">编辑</el-button>
					<el-button @click="delStudent(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog  title="新增/编辑学生"  :visible.sync="dialogVisible"  width="35%">
			<el-form ref="studentInfo" :model="studentInfo" label-width="100px">			
				<el-form-item label="学生姓名">
					<el-input v-model="studentInfo.name"></el-input>
				</el-form-item>
				<el-form-item label="学生性别">
					<el-radio-group v-model="studentInfo.sex">
						<el-radio :label="0">女生</el-radio>
						<el-radio :label="1">男生</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="出生日期">
					<el-date-picker type="date" placeholder="选择日期" v-model="studentInfo.birth" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
				</el-form-item>
				<el-form-item label="民族">
					<el-input v-model="studentInfo.nation"></el-input>
				</el-form-item>
				<el-form-item label="家庭住址">
					<el-input v-model="studentInfo.address"></el-input>
				</el-form-item>
				<el-form-item label="联系电话">
					<el-input v-model="studentInfo.phone"></el-input>
				</el-form-item>
				<el-form-item label="家长姓名">
					<el-input v-model="studentInfo.parentName"></el-input>
				</el-form-item>
				<el-form-item label="入学时间">
					<el-date-picker type="date" placeholder="选择日期" v-model="studentInfo.startSchool" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
				</el-form-item>
				<el-form-item label="户口所在地">
					<el-input v-model="studentInfo.hukou"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitStudent">提 交</el-button>
			</span>
		</el-dialog>
	</div>
</template>


<script>
	import {getStudentList,addStudent,delStudent} from '@/api/index'
	import {gradeFormat,formatDate} from '@/assets/js/utils'
	import SYSTEMCONFIG from '@/config/config'
	export default{
		data(){
			return{
				classInfo:this.$route.query,
				studenList:[],
				studentInfo:{},
				dialogVisible:false,
				tableHeight:0
			}
		},
		created(){
			this.init();
			this.getStudent();
		},
		methods:{
			gradeFormat:gradeFormat,
			init:function(){
				//初始化
				let height = document.body.clientHeight;
				this.tableHeight = height -200;
			},
			getStudent:function(){
				let param = this.classInfo;
				getStudentList(param).then((res)=>{
					this.studenList = res.data
				})
			},
			addStudent:function(){
				this.studentInfo = {};
				this.dialogVisible = true;
			},
			editStudent:function(obj){
				this.studentInfo = obj;
				this.dialogVisible = true;
			},
			submitStudent:function(){
				switch(this.classInfo.grade){
					case 1:this.studentInfo.grade1Id = this.classInfo.id;
					break;
					case 2:this.studentInfo.grade2Id = this.classInfo.id;
					break;
					case 3:this.studentInfo.grade3Id = this.classInfo.id;
					break;
					case 4:this.studentInfo.grade4Id = this.classInfo.id;
					break;
					case 5:this.studentInfo.grade5Id = this.classInfo.id;
					break5
					case 6:this.studentInfo.grade6Id = this.classInfo.id;
					break;
				}
				addStudent(this.studentInfo).then((res)=>{
					if(res.data.code == 1){
						this.$message({
							message: '操作成功',
							type: 'success',									
						});
						this.dialogVisible = false;
					}else{
						this.$message({
							message: res.data.message,
							type: 'error'
						});
					}
				})
			},
			formatterTime:function(row,index){
				var dates;
				if(index.property =="birth"){
					dates = new Date(row.birth);
				}else{
					dates = new Date(row.startSchool);
				}
				return formatDate(dates,"yyyy-MM-dd")				
			},
			exportStudent:function(){
				window.location.href=SYSTEMCONFIG.ApiRootUrl + "student/exportStudent?grade="+this.classInfo.grade+"&id="+this.classInfo.id+"&className="+this.classInfo.className;   
			},
			delStudent:function(student){
				this.$confirm('是否确定要删除该学生?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(()=>{
					let param = {
						grade:this.classInfo.grade
					}
					delStudent(param,student).then((res)=>{
						if(res.data.code == 1){
							this.$message({
								message: '删除成功',
								type: 'success',									
							});
							this.getStudent();
						}else{
							this.$message({
								message: res.data.message,
								type: 'error'
							});
						}
					})
				})
				
			}
		}
	}
</script>


<style lang="scss">
.student{
	h1{
		text-align: center;
	}
	.top-btn{
		margin-bottom: 10px;
	}
}
</style>