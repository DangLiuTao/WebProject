<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<!-- 菜单 -->
		<el-menu>
			<span v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item v-show='!obj.children' :index='obj.index' @click='fn(obj)'>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item v-for='item in obj.children' :index='item.index' :key='item.text' @click='fn(item)'>{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/CompList'},
						 {text:'人员信息',index:'1022',url:'/UserList'},
						 {text:'设备类别',index:'1023',url:'/BaseDevTypeList'},
						 {text:'设备信息',index:'1024',url:'/baseDeviceList'},
						 {text:'流程信息',index:'1025',url:'/baseFlowList'}
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031',url:'/produceReportList'},
						 {text:'中控',index:'1032',url:'/Control'},
						 {text:'作业信息',index:'1033',url:'/produceJobList'},
						 {text:'故障信息',index:'1034',url:'/produceFaultList'},
					 	 {text:'维修记录',index:'1035',url:'/produceRepairList'}
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'能耗信息',index:'1041',url:"/energyConsumeList"},
					 	 {text:'水耗信息',index:'1042',url:"/energyStandradcoalList"}
					 ]},
					 {text:'统计信息',index:'105',children:[
						 {text:"港口能耗对比",index:"1051",url:"/ComeTrues"},
					 	 {text:'作业量统计',index:'1052',url:"/ComeTrue"},
					 	 {text:'设备利用率',index:'1053',url:"/usage"},
					 	 {text:'设备完好率',index:'1054',url:"/intactRatio"},
					     {text:'成本核算信息',index:'1055',url:"/costList"},
						 {text:'港口能耗对比Update',index:'1056',url:"/"}
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061'},
					 	 {text:'实时监控',index:'1062'},
					 	 {text:'异常处理',index:'1063'}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'维修登记',index:'1071'}
					 ]},
					 {text:'用能单元模型',index:'109',children:[
					 	 {text:'全年能效对比',index:'1091'},
					 	 {text:'能效模型(平均值+~20%)',index:'1092'},
					 	 {text:'同类设备能耗对比',index:'1093'}
					 ]},
					 {text:'能源产销模型',index:'1010',children:[
					 	 {text:'企业用能模型',index:'10101',url:"EnergyModel"},
					 	 {text:'产销模型展示',index:'10102'}
					 ]},
				]
			};
		},
		methods:{
			fn(obj){
				// 路由跳转
				this.$router.push({path:obj.url});
				// 往store中的tags数组中添加数据
				var obj = {name:obj.text,type:'warning',url:obj.url};
				this.$store.commit('addTag',obj);
			}
		} 
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	background: #F4F4F4;
}
</style>
