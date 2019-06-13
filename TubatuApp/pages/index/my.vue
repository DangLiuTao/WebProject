<template>
	<view>
		<view class="header" v-bind:class="{'status':isH5Plus}">
			<view class="userinfo">
				<view class="face"><image :src="userinfo.face"></image></view>
				<view class="info">
					<view class="username">{{userinfo.username}}</view>
					<view class="integral">积分:{{userinfo.integral}}</view>
				</view>
			</view>
			<view class="setting"><image src="../../static/HM-PersonalCenter/setting.png"></image></view>
		</view>
		<view class="orders">
			<view class="box">
				<view class="label" v-for="(row,index) in orderTypeLise" :key="row.name" hover-class="hover"  @tap="toOrderType(index)">
					<view class="icon"><view class="badge" v-if="row.badge>0">{{row.badge}}</view><image :src="'../../static/HM-PersonalCenter/'+row.icon"></image></view>
					{{row.name}}
				</view>
			</view>
		</view> 
		<view class="list" v-for="(list,list_i) in severList" :key="list_i">
			<view class="li" v-for="(li,li_i) in list" @tap="toPage(list_i,li_i)" v-bind:class="{'noborder':li_i==list.length-1}"  hover-class="hover" :key="li.name" >
				<view class="icon"><image :src="'../../static/HM-PersonalCenter/sever/'+li.icon"></image></view>
				<view class="text">{{li.name}}</view>
				<image class="to" src="../../static/HM-PersonalCenter/to.png"></image>
			</view>
		</view>
		<view class="imgs">
			{{ris}}
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus:true,
				//#endif
				//#ifndef APP-PLUS
				isH5Plus:false,
				//#endif
				userinfo:{},
				orderTypeLise:[
					//name-标题 icon-图标 badge-角标
					{name:'发🐰布',icon:'l1.png',badge:1},
					{name:'收🐰藏',icon:'l2.png',badge:2},
					{name:'关🐰注',icon:'l3.png',badge:6},
					{name:'粉🐰丝',icon:'l4.png',badge:9},
					{name:'领兔币',icon:'l5.png',badge:0}
				],
				severList:[
					[
						{name:'全屋定制',icon:'1.png'},
						{name:'量房报告',icon:'2.png'},
						{name:'钱包',icon:'3.png'},
						{name:'优惠券',icon:'4.png'},
					],
					[
						{name:'礼品',icon:'5.png'},
						{name:'装修记账',icon:'6.png'},
						{name:'计算器',icon:'7.png'},
						{name:'黄历',icon:'8.png'}
					]
				],ris:""
			};
		},
		onLoad() {
			//加载
			this.init();
			// 动态获取时间绑定给日历
			this.ris=this.gettime();
		},
		methods: {
			init() {
				//用户信息
				this.userinfo={
					face:'../../static/HM-PersonalCenter/face.jpeg',
					username:"back4h5b",
					integral:"1435"
				}		
			},
			//用户点击订单类型
			toOrderType(index){
				uni.showToast({title: this.orderTypeLise[index].name});
			},
			//用户点击列表项
			toPage(list_i,li_i){
				uni.showToast({title: this.severList[list_i][li_i].name});
			},gettime(){
				var date=new Date();
				var ri=date.getDate();
				return ri;
			}
		}
	}
</script>

<style lang="scss">
page{background-color:#fff}
.header{
	&.status{padding-top:var(--status-bar-height);}
	background:linear-gradient(#6666CC,#005a5b);width:92%;height:30vw;padding:0 4%;display:flex;align-items:center;
	.userinfo{
		width:90%;display:flex;
		.face{flex-shrink:0;width:15vw;height:15vw;
			image{width:100%;height:100%;border-radius:100%}
		}
		.info{
			display:flex;flex-flow:wrap;padding-left:30upx;
			.username{width:100%;color:#fff;font-size:40upx}
			.integral{display:flex;align-items:center;padding:0 20upx;height:40upx;color:#fff;background-color:rgba(0,0,0,0.1);border-radius:20upx;font-size:24upx}
		}
	}
	.setting{
		flex-shrink:0;width:6vw;height:6vw;
		image{width:100%;height:100%}
	}
}
// .hover{background:linear-gradient(left,#00FF33,#FFCC66);
// 
// }
// .hover{
// 	background:#f5f5f5;
// 	opacity: 0.8;
// }
.orders{
	background-color:#005a5b;width:92%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + 40upx);display:flex;align-items:flex-start;border-radius:0 0 100% 100%;margin-top: -1upx;
	.box{
		width:98%;padding:0 1%;height:22vw;background:linear-gradient(left,#005a5b,#6666CC);border-radius:24upx;box-shadow:0 0 20upx rgba(0,0,0,0.15);margin-bottom:40upx;display:flex;align-items:center;justify-content:center;
		.label{
			display:flex;align-items:center;justify-content:center;flex-flow:wrap;width:100%;height:16vw;color:#fff;font-size:26upx;
			.icon{
				position:relative;width:7vw;height:7vw;margin:0 1vw;
				.badge{position:absolute;width:4vw;height:4vw;background-color:#F74c31;top:-1vw;right:-1vw;border-radius:100%;font-size:20upx;color:#fff;display:flex;align-items:center;justify-content:center;z-index: 10;}
				image{width:7vw;height:7vw;z-index: 9;}
			}
		}
	}
}
.list{
	// 两个缝隙↓
	width:100%;border-bottom:solid 10upx #f8f8f8;
	.li{
		width:92%;height:100upx;padding:0 4%;border-bottom:solid 1upx #f8f8f8;display:flex;align-items:center;
	&.noborder{border-bottom:0}
		.icon{
			flex-shrink:0;width:50upx;height:50upx;
			image{width:50upx;height:50upx}
		}
		.text{padding-left:20upx;width:100%;color:#005a5b}
		.to{flex-shrink:0;width:40upx;height:40upx}
	}
}
.imgs{
	width: 25upx;
	height: 25upx;
	color: white;
	font-size: 23upx;
	// float: left;
	margin-top: -69upx;
	margin-left: 43.5upx;
	z-index: 10;
}
</style>
