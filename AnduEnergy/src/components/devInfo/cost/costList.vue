<template>
	<div>
		<h1 style="text-align: center">成本核算信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<!-- <el-input style='width:160px' placeholder='设备名称查询' v-model='search_devname'></el-input>
			<el-select v-model="search_typeid" placeholder="请选择设备类别">
					<el-option
					  v-for="item in list2"
					  :key="item.typeid"
					  :value="item.typeid"
					  :label="item.typename">
					</el-option>
			</el-select> -->
			
			<!-- <el-button @click='search'>查询</el-button> -->
			<!-- <el-button @click='add'>添加</el-button> -->
			<span>请选择年份：</span> <el-date-picker v-model="year"  type="year"
				placeholder="请选择年份" value-format='yyyy' @change="fn()">
			  </el-date-picker>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称" width="80"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
				<el-table-column prop="consume" label="能耗(折标煤)" width="120"></el-table-column>
				<el-table-column prop="cost" label="维修成本" width="120"></el-table-column>
			<!-- 	<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" type='danger' @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
				  </template>
				</el-table-column> -->
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				// search_devname:'',
				// search_typeid:'',
				list:[],
				list2:[],
				year:"2018"
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/devInfo/cost"   //调用后端查询方法
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list = res.data;
					}).catch(error=>{
						alert('错误')
						console.log(error)
					})
			},add(){
				// this.$router.push({path:"baseDeviceAdd"});
			},update(row){
				// this.$router.push({name:"baseDeviceEdit",params:{row:row}});
			}
// 			,del(id){
// 				var url = this.baseUrl+"/baseDevice/delete"   //调用后端查询方法
// 				// 传递给后端的数据
// 				var data = {devid:id};
// 				this.$axios.post(url,this.$qs.stringify(data),{
// 					headers: {
// 						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// 					}
// 				}).then(res=>{
// 					this.list = res.data;
// 					this.$message("删除成功");
// 					this.search();
// 				}).catch(error=>{
// 					alert('删除失败')
// 					console.log(error)
// 				})
// 			}
			,lists(){
				// 后端网址
					var url = this.baseUrl+"/baseDevtype/list"   //调用后端查询方法
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
			},fn(){
				this.search();
				this.lists();
			}
		},
		mounted(){
			this.fn();
		}
		
	}
</script>

<style scoped="scoped">
	/* .el-table {
			width: 2000px !important;
      }	 */
</style>
