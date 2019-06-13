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
		<h1>港口间设备利用率对比</h1>
		<ve-line :data="flowchartData"></ve-line>
		<h1>港口间设备利用率对比柱状</h1>
		<ve-histogram :data="devTypechartData"></ve-histogram>
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
				},years:"2019"
			};
		},
		methods:{
			flowchartDatas(){ 
				var url = this.baseUrl+"/devInfo/usage"//调用后端查询方法
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
				var url = this.baseUrl+"/devInfo/usage"//调用后端查询方法
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
