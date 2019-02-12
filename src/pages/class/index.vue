<template>
	<div class="class-index">
		<div class="top-btn">
			<el-button type="primary" size="small" @click="addClass()">新增班级</el-button>
		</div>
		<el-row :gutter="20">
			<el-col :span="6" v-for="item in classesList" :key="item.id">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>{{gradeFormat(item.grade)+item.className}}</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="editClass(item)">编辑</el-button>
					</div>
					<div class="class-prop">
						<table class="stTable">
							<thead>
								<tr>
									<th colspan="2">功能列表</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<el-button type="primary" plain size="small" @click="urlToPath('student',item)">学生名录</el-button>
									</td>
									<td>
										<el-button type="primary" plain size="small" @click="urlToPath('score',item)">考试成绩</el-button>
									</td>
								</tr>
								<tr>
									<td>
										<el-button type="primary" plain size="small" disabled>班级干部</el-button>
									</td>
									<td>
										<el-button type="primary" plain size="small" @click="upClass(item)">班级升学</el-button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-dialog  title="新增/编辑班级"  :visible.sync="dialogVisible"  width="30%">
			<el-form ref="classes" :model="classes" label-width="80px">
				<el-form-item label="年级">
					<el-select v-model="classes.grade" placeholder="请选择年级" style="width: 100%;" :disabled="classes.id&&classes.id>0">
						<el-option label="一年级" :value="1"></el-option>
						<el-option label="二年级" :value="2"></el-option>
						<el-option label="三年级" :value="3"></el-option>
						<el-option label="四年级" :value="4"></el-option>
						<el-option label="五年级" :value="5"></el-option>
						<el-option label="六年级" :value="6"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="班级名称">
					<el-input v-model="classes.className"></el-input>
				</el-form-item>
				<el-form-item label="备注">
					<el-input v-model="classes.bz"></el-input>
				</el-form-item>
				<el-form-item label="权限">
					<el-input v-model="classes.sortOrder"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitClasses">提 交</el-button>
			</span>
		</el-dialog>
		<el-dialog  title="班级升学"  :visible.sync="upDialogVisible"  width="30%">
			<el-form  :model="upClasses" label-width="80px">
				<el-form-item label="年级">
					<el-select v-model="upClasses.grade" placeholder="请选择年级" style="width: 100%;" :disabled="upClasses.id&&upClasses.id>0">
						<el-option label="一年级" :value="1"></el-option>
						<el-option label="二年级" :value="2"></el-option>
						<el-option label="三年级" :value="3"></el-option>
						<el-option label="四年级" :value="4"></el-option>
						<el-option label="五年级" :value="5"></el-option>
						<el-option label="六年级" :value="6"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="班级名称">
					<el-input v-model="upClasses.className"></el-input>
				</el-form-item>
				<el-form-item label="备注">
					<el-input v-model="upClasses.bz"></el-input>
				</el-form-item>
				<el-form-item label="权限">
					<el-input v-model="upClasses.sortOrder"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="upDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="submitUpClasses">提 交</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
	import {getClassesList,addClasses,upClasses} from '@/api/index'
	import {gradeFormat} from '@/assets/js/utils'
	export default{
		data(){
			return{
				classesList:[],
				dialogVisible:false,				
				classes:{},
				upDialogVisible:false,
				upClasses:{},
				oldUpClasses:{}
			}
		},
		created(){
			this.getClassesList();
		},
		methods:{
			getClassesList:function(){
				getClassesList().then((res)=>{
					if(res.data){
						this.classesList = res.data	
					}					
				})
			},
			addClass:function(){
				//新增班级
				this.classes = {};
				this.dialogVisible = true;
			},
			submitClasses:function(){
				addClasses(this.classes).then((res)=>{
					if(res.data.code == 1){
						this.$message({
							message: '操作成功',
							type: 'success',									
						});
						this.dialogVisible = false;
						this.getClassesList();
					}else{
						this.$message({
							message: res.data.message,
							type: 'error'
						});
					}
				})
			},
			editClass:function(item){
				this.classes = item;
				this.dialogVisible = true;
			},
			urlToPath:function(url,objs){
				if(url){
					this.$router.push({
						path:url,
						query:objs
					})
				}
			},
			upClass:function(item){
				this.upDialogVisible = true;
				this.upClasses = {}
				this.oldUpClasses = item;
			},
			submitUpClasses:function(){
				let param = {
					oldUpClasses:this.oldUpClasses,
					upClasses:this.upClasses
				}
				upClasses(param).then((res)=>{
					if(res.data.code == 1){
						this.$message({
							message: '操作成功',
							type: 'success',									
						});
						this.dialogVisible = false;
						this.getClassesList();
					}else{
						this.$message({
							message: res.data.message,
							type: 'error'
						});
					}
				})

			},
			gradeFormat:gradeFormat,

		}
	}
</script>

<style lang="scss">
.class-index{
	.top-btn{
		margin: 10px 0;
	}
}
</style>