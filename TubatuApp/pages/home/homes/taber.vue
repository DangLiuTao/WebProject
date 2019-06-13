<template>
	<view class="content">
		<view>
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#005A5B"></uni-segmented-control>
			<view class="content">
				<view v-show="current === 0">
					<recommend></recommend>
				</view>
				<view v-show="current === 1">
					<eff></eff>
					<!-- <view class="app">
						<waterfall-flow :list="list" :loading="loading" @click="choose"></waterfall-flow>
					</view> -->
				</view>
				<view v-show="current === 2">
					看方案
				</view>
				<view v-show="current === 3">
					问答
				</view>
				<view v-show="current === 4">
					攻略
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	import eff from "@/pages/home/homes/eff.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import recommend from "@/pages/home/homes/recommend.vue"
	export default {
		components: {
			uniSegmentedControl,
			recommend,
			eff
		},
		data() {
			return {
				items: ['推荐', '效果图', '看方案', '问答', '攻略'],
				current: 0
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			}
		}
	}
</script>

<style>
	/* @import url("../../static/css/index.css"); */
</style>
