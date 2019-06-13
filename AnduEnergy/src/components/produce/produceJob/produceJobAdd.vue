<template>
	<div style='text-align: center;'>
		<h1>添加作业信息</h1>
		<el-row>
		  <el-col :span="12"> 
		  <el-input style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devname'></el-input> 
		  </el-col>
		  <el-col :span="12"> 
		   <div class="block">
				<el-date-picker
				  v-model="starttime"
				  type="datetime"
				  placeholder="开始作业时间"
						  value-format="yyyy-MM-dd HH:mm:ss">
				</el-date-picker>
		    </div>
		   </el-col>
		   <el-col :span="12"> 
		    <div class="block">
		   				<el-date-picker
		   				  v-model="completetime"
		   				  type="datetime"
		   				  placeholder="结束作业时间"
		   						  value-format="yyyy-MM-dd HH:mm:ss">
		   				</el-date-picker>
		     </div>
		    </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='运行时长' v-model='duration'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='作业量' v-model='amount'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='报岗ID' v-model='reportid'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	  
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				duration:"",
				amount:"",
				completetime:"",
				starttime:"",
				devname:"",
				reportid:""
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/insert"
				// 传递给后端的数据
				var data = {duration:this.duration,amount:this.amount,completetime:this.completetime,starttime:this.starttime,devname:this.devname,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/produceJobList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},mounted(){
				
		}
		
	}
</script>

<style>

</style>
