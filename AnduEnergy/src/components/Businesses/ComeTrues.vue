<!-- html部分 -->
<template>
	<div>
		<!-- <div class="block">
			<span class="demonstration">年</span>
				<el-date-picker
				v-model="years"
				align="right"
				type="year"
				placeholder="选择年"
				@change="fn()" value-format='yyyy'
				>
			</el-date-picker>
		</div> -->
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
		<h1>流程能耗比折线对比图</h1>
		<ve-line :data="flowConsume"></ve-line>
		<h1>设备类别能耗比折线对比图</h1>
		<ve-line :data="devTypeConsume"></ve-line>
		<h1>设备能耗比折线对比图</h1>
		<ve-line :data="devConsume"></ve-line>
		<h1>设备单位作业量耗电量折线对比图</h1>
		<ve-line :data="electricConsume"></ve-line>
		<h1>设备单位作业量耗水量折线对比图</h1>
		<ve-line :data="waterConsume"></ve-line>
		<h1>设备单位作业量耗油量折线对比图</h1>
		<ve-line :data="oilConsume"></ve-line>
		<h1>流程能耗比柱状对比图</h1>
		<ve-histogram :data="flowConsume"></ve-histogram>
		<h1>设备类别能耗比柱状对比图</h1>
		<ve-histogram :data="devTypeConsume"></ve-histogram>
		<h1>设备能耗比柱状对比图</h1>
		<ve-histogram :data="devConsume"></ve-histogram>
		<h1>设备单位作业量耗电量柱状对比图</h1>
		<ve-histogram :data="electricConsume"></ve-histogram>
		<h1>设备单位作业量耗水量柱状对比图</h1>
		<ve-histogram :data="waterConsume"></ve-histogram>
		<h1>设备单位作业量耗油量柱状对比图</h1>
		<ve-histogram :data="oilConsume"></ve-histogram>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				flowConsume: {
				  columns: [],
				  rows: []
				},
				devTypeConsume: {
				  columns: [],
				  rows: []
				},devConsume: {
				  columns: [],
				  rows: []
				},years:"2019",
				electricConsume:{
					 columns: [],
					rows: []
				},waterConsume:{
					 columns: [],
					rows: []
				},oilConsume:{
					 columns: [],
					rows: []
				}
			};
		},
		methods:{
			flowConsumes(){
				var url = this.baseUrl+"/energyConsume/flowConsume"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.flowConsume = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},devTypeConsumes(){
				var url = this.baseUrl+"/energyConsume/devTypeConsume"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.devTypeConsume = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},devConsumes(){
				var url = this.baseUrl+"/energyConsume/devConsume"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.devConsume = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},electricConsumes(){
				// 				<!-- electricConsume waterConsume oilConsume -->
				var url = this.baseUrl+"/energyConsume/electricConsume"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.electricConsume = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},waterConsumes(){
				// 				<!-- electricConsume waterConsume oilConsume -->
				var url = this.baseUrl+"/energyConsume/waterConsume"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.waterConsume = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},oilConsumes(){
				// 				<!-- electricConsume waterConsume oilConsume -->
				var url = this.baseUrl+"/energyConsume/oilConsume"//调用后端查询方法
				// 传递给后端的数据
				var data={year:this.years}
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.oilConsume = res.data;
				}).catch(error=>{
					alert('错误')
					console.log(error)
				})
			},fn(){
				this.flowConsumes();
				this.devTypeConsumes();
				this.devConsumes();
				this.electricConsumes();
				this.waterConsumes();
				this.oilConsumes();
			}
		},mounted(){
			this.fn();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
