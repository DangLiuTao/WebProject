<template>
	<div style='text-align: center;'>
		<h1>修改维修信息</h1>
		<el-row>
			<el-select v-model="devid" placeholder="请选择设备名称">
					<el-option
					  v-for="item in list2"
					  :key="item.devid"
					  :value="item.devid"
					  :label="item.devname">
					</el-option>
			</el-select>
			<!--  private Integer repairid;    //主键维修id 
    private Integer devid;    //设备名称 
    private String cause;    //维修原因 
    private Integer cost;    //维修费用 
    private String repairdate;    //维修日期
    private String devname; -->
		 <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='维修原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='维修费用' v-model='cost'></el-input> </el-col>
		 <div class="block">
		 		<el-date-picker
		 		  v-model="repairdate"
		 		  type="date"
		 		  placeholder="维修日期" value-format='yyyy-MM-dd'>
		 		</el-date-picker>
		 </div>
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
				devid:'',
				repairid:"",
				repairdate:'',
				cost:'',
				cause:'',
				list2:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/update"
				// 传递给后端的数据
				var data = {repairid:this.repairid,devid:this.devid,repairdate:this.repairdate,cost:this.cost,cause:this.cause};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/produceRepairList'});
				})
				// alert(this.devid)
			},lists(){
				// 后端网址
					var url = this.baseUrl+"/produceRepair/list"   //调用后端查询方法
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
			var row = this.$route.params.row;
			// 回显
			this.cost = row.cost;
			this.repairdate = row.repairdate;
			this.repairid=row.repairid;
			this.devid=row.devid;
			this.cause=row.cause;
			this.lists();
		}
		
	}
</script>

<style>

</style>
