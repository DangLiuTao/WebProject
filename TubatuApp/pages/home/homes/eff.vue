<template>
	<view class="content">
		<view style="height: 60upx;
			 color: #969696;
			font-size:25upx;
			padding-top: 15upx;
			">— 效果图 —</view>
			<view class="eff_div" style="width:48%;height:400upx; 
			display: inline-block; float: left; margin-left: 10upx;background: #FFFFFF; margin-top: 15upx;"  v-for="(item,index) in arr" :key="item.src">
				<image :src="item.src" style="width: 100%; height: 70%; border-radius: 20upx;"></image>
				<view style="font-size: 22upx;">{{item.text}}</view>
				<view style="width: 180px;height: 50upx; line-height: 50px;">
					<image :src="item.lsrc" style="width: 20px; height: 20px; border-radius: 50%;margin-top: 15px; margin-left: -90px;"></image>
					<text style="font-size: 22upx;margin-top: -20px;">{{item.ltext}}</text>
				</view>
				<view style="width: 90px;height: 50upx; float: right; margin-top: -10px;">
					<text style="font-size: 20upx;">{{item.rtext}}</text>
					<text style="font-size: 18px;">{{item.rtexts}}</text>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data:function() {
			return{
				title:"eff",
				arr:[
					{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},
					{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},
					{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},{src:"../../../static/eff_img/xg0.jpg",text:"7.7米 X 6.6米的大箱子7.7米 ",
					lsrc:"../../../static/eff_img/xg1.jpg",ltext:"晴天家具城",rtext:"80",rtexts:"⭐"},
				]
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 1500upx;
		background: #F1F1F1;
	}
	/* @import url("@/pages/static/css/eff.css"); */
	/* @import url("../../../static/css/eff.css"); */
</style>
