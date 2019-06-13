import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Login from '@/components/home/Login'
import chick from '@/components/demos/chick/chick'
import chick1 from '@/components/demos/chick/chick1'
import chick2 from '@/components/demos/chick/chick2'
import Welcome from '@/components/home/Welcome'  //子组件
import Test1 from '@/components/home/Test1'  //子组件
import Test2 from '@/components/home/Test2'  //子组件
import parent from '@/components/demos/test/parent'  
import color from '@/components/demos/color/color'  
import CompAdd from '@/components/baseInfo/CompAdd'  
import CompEdit from '@/components/baseInfo/CompEdit'  
import CompList from '@/components/baseInfo/CompList'
import UserAdd from '@/components/userinfo/UserAdd'  
import UserEdit from '@/components/userinfo/UserEdit'  
import UserList from '@/components/userinfo/UserList'
import BaseDevTypeAdd from '@/components/baseDevType/BaseDevTypeAdd'  
import BaseDevTypeEdit from '@/components/baseDevType/BaseDevTypeEdit'  
import BaseDevTypeList from '@/components/baseDevType/BaseDevTypeList'
import baseDeviceAdd from '@/components/baseDevice/baseDeviceAdd'  
import baseDeviceEdit from '@/components/baseDevice/baseDeviceEdit'  
import baseDeviceList from '@/components/baseDevice/baseDeviceList'
import baseFlowList from '@/components/baseFlow/baseFlowList'
import baseFlowEdit from '@/components/baseFlow/baseFlowEdit'
import baseFlowAdd from '@/components/baseFlow/baseFlowAdd'
import produceFaultList from '@/components/produce/produceFault/produceFaultList'
import produceFaultEdit from '@/components/produce/produceFault/produceFaultEdit'
import produceFaultAdd from '@/components/produce/produceFault/produceFaultAdd'
import produceRepairList from '@/components/produce/produceRepair/produceRepairList'
import produceRepairEdit from '@/components/produce/produceRepair/produceRepairEdit'
import produceRepairAdd from '@/components/produce/produceRepair/produceRepairAdd'
import produceReportList from '@/components/produce/produceReport/produceReportList'
import produceReportEdit from '@/components/produce/produceReport/produceReportEdit'
import produceReportAdd from '@/components/produce/produceReport/produceReportAdd'
import produceJobList from '@/components/produce/produceJob/produceJobList'
import produceJobEdit from '@/components/produce/produceJob/produceJobEdit'
import produceJobAdd from '@/components/produce/produceJob/produceJobAdd'
import energyConsumeList from '@/components/energy/energyConsume/energyConsumeList'
import energyConsumeEdit from '@/components/energy/energyConsume/energyConsumeEdit'
import energyConsumeAdd from '@/components/energy/energyConsume/energyConsumeAdd'
import energyStandradcoalList from '@/components/energy/energyStandradcoal/energyStandradcoalList'
import energyStandradcoalEdit from '@/components/energy/energyStandradcoal/energyStandradcoalEdit'
import energyStandradcoalAdd from '@/components/energy/energyStandradcoal/energyStandradcoalAdd'
import Control from '@/components/produce/control/Control'
import ComeTrue from "@/components/ActivityStatistics/ComeTrue"
import ComeTrues from "@/components/Businesses/ComeTrues"
import EnergyModel from "@/components/EnergyModel/EnergyModel"
import usage from "@/components/devInfo/usage"
import intactRatio from "@/components/devInfo/intactRatio"
import costList from "@/components/devInfo/cost/costList"
import ComeTrueUpdate from "@/components/BusinessesUpdate/ComeTrueUpdate"

Vue.use(Router)

export default new Router({
  routes: [
		{path:'/Login',component:Login,name:'Login'},
		{
			path: '/', name: 'Index',component: Index,children:[
				{path:'/',component:Welcome},
				// {path:'Login',component:Login},
// 				{path:'Test2',component:Test2}
			]
			
				
		},
		{
			path: '/chick', name: 'chick',component: chick,children:[
				 {path:'chick1',component:chick1},
				 {path:'chick2',component:chick2}
			]
		},
		{
			path:'/parent',component:parent
		},{
			path:'/color',component:color
		}
		,{
		  path: '/',name: 'Index',component: Index,
				children:[
						{path:'/',component:Welcome},
						{path:'CompList',component:CompList,name:'CompList'},
						{path:'CompAdd',component:CompAdd},
						{path:'CompEdit',component:CompEdit,name:'CompEdit'},
						{path:'/',component:Welcome},
						{path:'UserAdd',component:UserAdd,name:'UserAdd'},
						{path:'UserList',component:UserList},
						{path:'UserEdit',component:UserEdit,name:'UserEdit'},
						{path:'BaseDevTypeAdd',component:BaseDevTypeAdd,name:'BaseDevTypeAdd'},
						{path:'BaseDevTypeList',component:BaseDevTypeList,name:'BaseDevTypeList'},
						{path:'BaseDevTypeEdit',component:BaseDevTypeEdit,name:'BaseDevTypeEdit'},
						{path:'baseDeviceAdd',component:baseDeviceAdd,name:'baseDeviceAdd'},
						{path:'baseDeviceList',component:baseDeviceList},
						{path:'baseDeviceEdit',component:baseDeviceEdit,name:'baseDeviceEdit'},
						{path:'baseFlowList',component:baseFlowList,name:'baseFlowList'},
						{path:'baseFlowEdit',component:baseFlowEdit,name:'baseFlowEdit'},
						{path:'baseFlowAdd',component:baseFlowAdd,name:'baseFlowAdd'},
						{path:'produceFaultList',component:produceFaultList,name:'produceFaultList'},
						{path:'produceFaultEdit',component:produceFaultEdit,name:'produceFaultEdit'},
						{path:'produceFaultAdd',component:produceFaultAdd,name:'produceFaultAdd'},
						{path:'produceRepairList',component:produceRepairList,name:'produceRepairList'},
						{path:'produceRepairEdit',component:produceRepairEdit,name:'produceRepairEdit'},
						{path:'produceRepairAdd',component:produceRepairAdd,name:'produceRepairAdd'},
						{path:'produceReportList',component:produceReportList,name:'produceReportList'},
						{path:'produceReportEdit',component:produceReportEdit,name:'produceReportEdit'},
						{path:'produceReportAdd',component:produceReportAdd,name:'produceReportAdd'},
						{path:'Control',component:Control,name:'Control'},
						{path:'produceJobList',component:produceJobList,name:'produceJobList'},
						{path:'produceJobEdit',component:produceJobEdit,name:'produceJobEdit'},
						{path:'produceJobAdd',component:produceJobAdd,name:'produceJobAdd'},
						{path:'energyConsumeAdd',component:energyConsumeAdd,name:'energyConsumeAdd'},
						{path:'energyConsumeEdit',component:energyConsumeEdit,name:'energyConsumeEdit'},
						{path:'energyConsumeList',component:energyConsumeList,name:'energyConsumeList'},
						{path:'energyStandradcoalAdd',component:energyStandradcoalAdd,name:'energyStandradcoalAdd'},
						{path:'energyStandradcoalEdit',component:energyStandradcoalEdit,name:'energyStandradcoalEdit'},
						{path:'energyStandradcoalList',component:energyStandradcoalList,name:'energyStandradcoalList'},
						{path:'ComeTrue',component:ComeTrue,name:'ComeTrue'},
						{path:'ComeTrues',component:ComeTrues,name:'ComeTrues'},
						{path:'EnergyModel',component:EnergyModel,name:'EnergyModel'},
						{path:'usage',component:usage,name:'usage'},
						{path:'intactRatio',component:intactRatio,name:'intactRatio'},
						{path:'costList',component:costList,name:'costList'},
						{path:'ComeTrueUpdate',component:ComeTrueUpdate,name:'ComeTrueUpdate'}
					]
		 }	
		
	
	
  ]
})
