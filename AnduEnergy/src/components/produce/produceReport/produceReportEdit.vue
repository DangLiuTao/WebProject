<template>
	<div style='text-align: center;'>
		<h1>修改报岗信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='船队名称' v-model='shipname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='载货量(吨)' v-model='capacity'></el-input> </el-col>
		  <div class="block">
		  			<el-date-picker
		  			  v-model="planjobtime"
		  			  type="datetime"
		  			  placeholder="预计到港时间"
					  value-format="yyyy-MM-dd HH:mm:ss">
		  			</el-date-picker>
		  </div>
	      <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='报岗人' v-model='reportuser'></el-input> </el-col>
		</el-row>
		<el-row>
		 <el-select v-model="compid" placeholder="请选择企业">
				<el-option
				  v-for="item in list2"
				  :key="item.compid"
				  :value="item.compid"
				  :label="item.compname">
				</el-option>
		</el-select>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveupdate'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				capacity:'',
				reportid:"",
				shipname:'',
				reportuser:'',
				planjobtime:'',
				compid:"",
				list2:[]
			};
		},
		methods:{
			saveupdate(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/update"
				// 传递给后端的数据
				var data = {reportid:this.reportid,capacity:this.capacity,shipname:this.shipname,reportuser:this.reportuser,planjobtime:this.planjobtime,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/produceReportList'});
				})
			},lists(){
				// 后端网址
					var url = this.baseUrl+"/produceReport/list"   //调用后端查询方法
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
		},mounted:function(){
			var row = this.$route.params.row;
			this.capacity=row.capacity;
			this.reportid=row.reportid;
			this.shipname=row.shipname;
			this.reportuser=row.reportuser;
			this.planjobtime=row.planjobtime;
			this.compid=row.compid;
			this.lists();
		}
		
	}
</script>

<style>

</style>
