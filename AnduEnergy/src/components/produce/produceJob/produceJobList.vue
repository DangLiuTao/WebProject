<template>
	<div>
		<h1 style="text-align: center">作业信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-select v-model="search_devid" placeholder="请选择设备名称">
					<el-option
					  v-for="item in list2"
					  :key="item.devid"
					  :value="item.devid"
					  :label="item.devname">
					</el-option>
			</el-select>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称" width="80"></el-table-column>
				<el-table-column prop="starttime" label="开始作业时间" width="80"></el-table-column>
				<el-table-column prop="completetime" label="结束作业时间" width="120"></el-table-column>
				<el-table-column prop="duration" label="运行时长" width="120"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" type='danger' @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.jobid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				search_devid:"",
				list:[],
				list2:[]
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/produceJob/search"   //调用后端查询方法
					// 传递给后端的数据
					var data = {devid:this.search_devid};
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
				this.$router.push({path:"produceJobAdd"});
			},update(row){
				this.$router.push({name:"produceJobEdit",params:{row:row}});
			},del(id){
				var url = this.baseUrl+"/produceJob/delete"   //调用后端查询方法
				// 传递给后端的数据
				var data = {jobid:id};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
					this.$message("删除成功");
					this.search();
				}).catch(error=>{
					alert('删除失败')
					console.log(error)
				})
			},lists(){
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
			}
		},
		mounted(){
			this.search();
			this.lists();
		}
		
	}
</script>

<style>

</style>
