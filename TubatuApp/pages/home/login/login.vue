<template>
	<view class="content">
		<view class="login-bg">
			<view class="login-card">
				<view class="login-head">请输入你的账户</view>
				<view class="login-input login-margin-b">
					<input type="text" placeholder="用户名" v-model="phones"/>
				</view>
				<view class="login-input">
					<input type="password" placeholder="请输入密码(8-16位)" v-model="password"/>
				</view>
				<view class="login-function">
					<view class="login-forget" @click="go_forget">忘记密码?</view>
					<view class="login-register" @click="go_register">快速注册></view>
				</view>
			</view>
		</view>
		<view class="login-btn">
			<button class="landing" type="primary" @click="LoginSkip">登陆</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				phones:"张彤彤",
				password:"123"
			}
		},
		onLoad() {

		},
		methods: {
			go_forget(){
				uni.navigateTo({
				    url: '../forget/forget'
				})
			},
			go_register(){
				uni.navigateTo({
					url: '../register/register'
				})
			},LoginSkip(){
				if(this.phones=="张彤彤"&&this.password=="123"){
					uni.switchTab({
						url:"../../index/index"
					})
				}else{
					
				}
			}
			
		}
	}
</script>

<style>
	.landing{
		height: 84upx;
		line-height: 84upx;
		border-radius: 44upx;
		font-size: 32upx;
		background: linear-gradient(left,#005a5b, #6666CC);
	}
	.login-btn{
		padding: 10upx 20upx;
		margin-top: 350upx;
	}
	.login-function{
		overflow: auto;
		padding: 20upx 20upx 30upx 20upx;
	}
	.login-forget{
		float: left;
		font-size: 26upx;
		color: #ffffff;
	}
	.login-register{
		color: #F0F0F0;
		float: right;
		font-size: 26upx;

	}
	.login-input input{
		background: #fff;
		font-size: 32upx;
		padding: 10upx 25upx;
		height: 62upx;
		line-height: 62upx;
		border-radius: 8upx;
		color: #000000;
		font-weight: 500;
	}
	.login-margin-b{
		margin-bottom: 25upx;
	}
	.login-input{
		padding: 10upx 20upx;
	}
	.login-head{
		font-size: 46upx;
		text-align: center;
		padding: 25upx 10upx 55upx 10upx;
		color: #CCCCFF;
	}
	.login-card{
		background:linear-gradient(left,#6666CC, #005a5b);
		border-radius: 12upx;
		padding: 10upx 25upx;
		box-shadow: 0 6upx 18upx rgba(0,0,0,0.12);
		position: relative;
		margin-top: 120upx;
	}
	.login-bg {
		height: 260upx;
		padding: 25upx;
		background: linear-gradient(#005a5b, #6666CC);
	}
</style>
