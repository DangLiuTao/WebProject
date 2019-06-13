<template>
	<view class="content">
		<view style="width: 100%; height: 360upx; border-top: 0.5upx solid #DDDDDD; border-bottom: 10upx solid #DDDDDD;margin-top: -38upx;">
			<view style="width: 100%;height: 99upx; border-bottom: 0.5px solid #DDDDDD;">
				<view style="background: #16dbd2; width: 70upx; height: 70upx; margin-top: 22upx;margin-left: 15upx; border-radius: 10upx;">
					<image src="../../static/11.png" style="width: 80%; height: 80%; margin-top: 6upx;"></image>
				</view>
				<view style="width: 85%; height: 75upx;float: left;margin-top: -72upx;margin-left: 100upx;">
					<text style="font-size: 22upx; float: left;">
						历史消息
					</text>
					<text style="float: left;font-size: 20upx;margin-top: 43upx;;margin-left: -85upx;">
						没有更多消息。。。
					</text>
				</view>
			</view>
			<view style="width: 100%;height: 99upx; border-bottom: 0.5px solid #DDDDDD;">
				<view style="background: #32de91; width: 70upx; height: 70upx; margin-top: 22upx;margin-left: 15upx; border-radius: 10upx;">
					<image src="../../static/22.png" style="width: 80%; height: 80%; margin-top: 6upx;"></image>
				</view>
				<view style="width: 85%; height: 75upx; float: left;margin-top: -72upx;margin-left: 100upx;">
					<text style="font-size: 22upx; float: left;">
						系统消息
					</text>
					<text style="float: left;font-size: 20upx;margin-top: 43upx;margin-left: -85upx;">
						没有更多消息。。。
					</text>
				</view>
			</view>
			<view style="width: 100%;height: 99upx;">
				<view style="background: #639fff; width: 70upx; height: 70upx; margin-top: 22upx;float: left;margin-left: 15upx; border-radius: 10upx; display: inline-block;">
					<image src="../../static/33.png" style="width: 80%; height: 80%; margin-top: 6upx;"></image>
				</view>
				<view style="width: 85%; height: 75upx;display: inline-block; margin-top: 25upx;
				">
					<text style="font-size: 22upx; float: left;">
						系统消息
					</text>
					<text style="float: right;font-size: 22upx;">
						11:52
					</text>
					<text style="float: left;font-size: 20upx;margin-top: 38upx;margin-left: -85upx;">
						你身着锦绣绫罗绸缎生的依旧好看
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data:function() {
			return{
				title:"消息"
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
</style>
