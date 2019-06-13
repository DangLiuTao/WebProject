<template>
	<view class="content">
		<!-- 猜你喜欢 -->
		<view style="width: 100%; height: 100upx; border: 0.5px solid #DDDDDD;margin-top: -35upx; padding: 25upx; border-left: none; border-right: none;">
			<text style="font-weight:500; font-size: 42upx; float: left;">猜你喜欢</text>
			<text style="font-size: 25upx; float: left; margin-left: -168upx;margin-top: 60upx;">根据你的个人信息生成，每日6:00更新</text>
		</view>
		<!-- body -->
		<view style="width: 95%;height: 800upx;padding: 18upx;" v-for="(item,index) in arr">
			<!-- 套图 -->
			<view style="width: 99%; height: 48%; margin-left: 4upx;">
				<!-- head -->
				<text style="font-weight:500; font-size: 42upx;float: left;">{{item.text1}}</text>
				<view style="width: 50upx; height: 30upx; border: 1upx solid #585858; 
				float: right;margin-top:19upx; margin-right: 30upx; font-size: 25upx;line-height: 30upx;font-weight: 400;">
					{{item.text1s}}
				</view>
				<!-- heads-->
				<view style="width: 100%; height: 48upx; margin-top: 55upx; line-height: 48upx;">
					<text style="float: left; font-size: 25upx;">{{item.username1}}</text>
					<text style="float: left; font-size: 25upx; margin-left: 25upx;">{{item.time1}}</text>
				</view>
				<!-- img -->
				<image :src="item.src" style="width: 100%; height: 280upx;"></image>
			</view>
			<!-- 知识 -->
			<view style="width: 99%; height: 24%; margin-left: 4upx; margin-top: 25upx;">
				<!-- head -->
				<text style="font-weight:500; font-size: 42upx;float: left;">{{item.text2}}</text>
				<view style="width: 50upx; height: 30upx; border: 1upx solid #585858; 
				float: right;margin-top:19upx; margin-right: 30upx; font-size: 25upx;line-height: 30upx;font-weight: 400;">
					{{item.text2s}}
				</view>
				<!-- heads-->
				<view style="width: 100%; height: 48upx; margin-top: 55upx; line-height: 48upx;">
					<text style="float: left; font-size: 25upx;">{{item.username2}}</text>
					<text style="float: left; font-size: 25upx; margin-left: 25upx;">{{item.time2}}</text>
				</view>
				<!-- content -->
				<text style="font-size: 27upx; float: left;margin-left: -10upx;font-weight: 300;">
					{{item.content1}}
				</text>
			</view>
			<!-- 专题 -->
			<view style="width: 99%; height: 24%; margin-left: 4upx; margin-top: 18upx;">
				<!-- head -->
				<text style="font-weight:500; font-size: 42upx;float: left;">{{item.text3}}</text>
				<view style="width: 50upx; height: 30upx; border: 1upx solid #585858; 
				float: right;margin-top:19upx; margin-right: 30upx; font-size: 25upx;line-height: 30upx;">
					{{item.text3s}}
				</view>
				<!-- heads-->
				<view style="width: 100%; height: 48upx; margin-top: 55upx; line-height: 48upx;">
					<text style="float: left; font-size: 25upx;">{{item.username3}}</text>
					<text style="float: left; font-size: 25upx; margin-left: 25upx;">{{item.time3}}</text>
				</view>
				<!-- content -->
				<text style="font-size: 27upx; float: left; margin-left: -10upx;font-weight: 300;">
					{{item.content2}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data:function() {
			return{
				arr:[
						{
							text1:"现代新古典三室两厅卧室   (6张)",
							text1s:"套图",
							username1:"戴锐达",
							time1:"39分钟前",
							src:"../../static/trim_img/8.jpg",
							text2:"网友总结装修后悔血泪史 越早....",
							text2s:"知识",
							username2:"小宝",
							time2:"56分钟前",
							content1:"有人说装修是门遗憾的艺术，装修的时候，都会出现很多波折，发生很多意外，那些烦心事呀，也会...",
							text3:"北欧简约舒适公寓",
							text3s:"专题",
							username3:"Yoyo",
							time3:"26分钟前",
							content2:"在城市忙碌的我们渴望一份悠然，用最简单朴素的方式打造一个具有深远意境的家。来自于瑞典的北欧..."
						},
						{
							text1:"璞趣江南往家案",
							text1s:"专题",
							username1:"Ryba.guo",
							time1:"44分钟前",
							src:"../../static/trim_img/4.jpg",
							text2:"让我超级后悔的75条家装细节....",
							text2s:"知识",
							username2:"小宝",
							time2:"1小时前",
							content1:"自己装修过，帮朋友做过参谋也做过监工，总结一下最让大家心中万匹草泥马的事儿...",
							text3:"史上最全面的家装施工工艺流程",
							text3s:"知识",
							username3:"Lorou",
							time3:"6天前",
							content2:"家装的施工工艺流程一般来分的话有基础的工程，水电方面的工程，泥木工程，木工工程涂饰方面的....",
							// 这是一座大隐于市的正宗古宅，它身上有着苏州辉煌的过往，也走进了繁华的当下
						}
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
		margin-top: 50upx;
		text-align: center;
		height: 400upx;
		
	}
	.content view{
		 border: 1upx solid #FFFFFF; 
	}
</style>
