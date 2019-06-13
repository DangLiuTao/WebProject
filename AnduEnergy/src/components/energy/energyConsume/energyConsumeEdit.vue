<template>
	<div style='text-align: center;'>
		<h1>修改能耗信息</h1>
		<el-row>
			<el-select v-model="devid" placeholder="请选择设备名称">
					<el-option
					  v-for="item in list2"
					  :key="item.devid"
					  :value="item.devid"
					  :label="item.devname">
					</el-option>
			</el-select>
			<!-- 	<!-- private Integer consumeid;    //主键能耗id 
    private Integer devid;    //设备名称 
    private Double electric;    //电耗(kw.h) 
    private Double water;    //水耗(吨) 
    private Double oil;    //油耗(L) 
    private Integer reportid;    //报岗id
    private String devname; -->  
		 <el-col :span="12"> 电耗(kw.h)<el-input style='width:300px;margin-top: 20px;' placeholder='电耗(kw.h)' v-model='electric'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 水耗(吨)<el-input style='width:300px;margin-top: 20px;' placeholder='水耗(吨)' v-model='water'></el-input> </el-col>
		  <el-col :span="12"> 油耗(L)<el-input style='width:300px;margin-top: 20px;' placeholder='油耗(L)' v-model='oil'></el-input> </el-col>
	   </el-row>
	   <el-row>
	   		  <el-col :span="12"> 报岗id<el-input style='width:300px;margin-top: 20px;' placeholder='报岗id' v-model='reportid'></el-input> </el-col>
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
				electric:"",
				water:'',
				oil:'',
				reportid:'',
				consumeid:"",
				list2:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/update"
				// 传递给后端的数据
				var data = {devid:this.devid,electric:this.electric,water:this.water,oil:this.oil,reportid:this.reportid,consumeid:this.consumeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/energyConsumeList'});
				})
				// alert(this.devid)
			},lists(){
				// 后端网址
					var url = this.baseUrl+"/baseDevice/list"   //调用后端查询方法
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
			this.electric = row.electric;
			this.water = row.water;
			this.reportid=row.reportid;
			this.devid=row.devid;
			this.consumeid=row.consumeid;
			this.oil=row.oil;
			this.lists();
		}
		
	}
</script>

<style>

</style>
