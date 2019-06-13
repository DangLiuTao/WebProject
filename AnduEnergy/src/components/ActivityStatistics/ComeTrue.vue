<!-- html部分 -->
<template>
	<div>
		<div class="block">
			<span class="demonstration">年</span>
				<el-date-picker
				v-model="years"
				align="right"
				type="year"
				placeholder="选择年"
				@change="fn()"
				value-format="yyyy">
			</el-date-picker>
		</div>
		<h1>流程作业量折线对比图</h1>
		<ve-line :data="flowchartData"></ve-line>
		<h1>设备类别作业量折线对比图</h1>
		<ve-line :data="devTypechartData"></ve-line>
		<h1>设备作业量折线对比图</h1>
		<ve-line :data="devchartData"></ve-line>
		<h1>流程作业量柱状对比图</h1>
		<ve-histogram :data="flowchartData"></ve-histogram>
		<h1>设备类别作业量柱状对比图</h1>
		<ve-histogram :data="devTypechartData"></ve-histogram>
		<h1>设备作业量柱状对比图</h1>
		<ve-histogram :data="devchartData"></ve-histogram>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				flowchartData: {
				  columns: [],
				  rows: []
				},
				devTypechartData: {
				  columns: [],
				  rows: []
				},devchartData: {
				  columns: [],
				  rows: []
				},years:"2019"
			};
		},
		methods:{
			flowchartDatas(){  
				var url = this.baseUrl+"/jobAmount/flowAmount"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.flowchartData = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},devTypechartDatas(){
				var url = this.baseUrl+"/jobAmount/devTypeAmount"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.devTypechartData = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},devchartDatas(){
				var url = this.baseUrl+"/jobAmount/devAmount"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.devchartData = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},fn(){
				this.devTypechartDatas();
				this.flowchartDatas();
				this.devchartDatas();
			}
		},mounted(){
			this.fn();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
