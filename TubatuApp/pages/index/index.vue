<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view>
			<shophome></shophome>
			<tabBer></tabBer>
		</view>
	</view>
</template>

<script>
	import shophome from "../HM-shophome/HM-shophome.vue"
	import tabBer from "../home/homes/taber.vue"
	export default {
		components:{shophome,tabBer},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
