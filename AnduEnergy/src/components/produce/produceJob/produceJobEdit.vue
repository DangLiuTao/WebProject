<template>
	<div style='text-align: center;'>
		<h1>修改作业信息</h1>
		<el-row>
			请选择设备名称
			<el-select v-model="devid" placeholder="请选择设备名称">
					<el-option
					  v-for="item in list2"
					  :key="item.devid"
					  :value="item.devid"
					  :label="item.devname">
					</el-option>
			</el-select>
		</el-row>
		<el-row>
	      <el-col :span="12"> 
		  开始作业时间
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
		   结束作业时间
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
		 <el-col :span="12">运行时长 <el-input style='width:300px;margin-top: 20px;' placeholder='运行时长' v-model='duration'></el-input> </el-col>
		 <el-col :span="12"> 作业量<el-input style='width:300px;margin-top: 20px;' placeholder='作业量' v-model='amount'></el-input> </el-col>
		 <el-col :span="12">报岗ID <el-input style='width:300px;margin-top: 20px;' placeholder='报岗ID' v-model='reportid'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				list:[],
				duration:"",
				amount:"",
				completetime:"",
				starttime:"",
				devname:"",
				reportid:"",
				jobid:"",
				devid:"",
				list2:[]
			};
		},

		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/update"
				// 传递给后端的数据
				var data = {
				jobid:this.jobid,
				duration:this.duration,
				amount:this.amount,
				completetime:this.completetime,
				starttime:this.starttime,
				devname:this.devname,
				reportid:this.reportid,
				devid:this.devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/produceJobList'});
				})
			},lists(){
				// 后端网址
					var url = this.baseUrl+"/produceJob/list"   //调用后端查询方法
					// 传递给后端的数据
					this.$axios.post(url,this.$qs.stringify(),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list2 = res.data;
					}).catch(error=>{
						alert('错误')
						console.log(error)
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			this.lists();
			var row = this.$route.params.row;
			// 回显
			this.duration = row.duration;
			this.amount = row.amount;
			this.completetime = row.completetime;
			this.starttime = row.starttime;
			this.devname=row.devname;
			this.reportid=row.reportid;
			this.jobid=row.jobid;
			this.devid=row.devid;
		}
	}
</script>

<style>

</style>
