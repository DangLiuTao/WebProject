<template>
	<view class="content">
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="input" style="width: 95%;margin-left: 15upx;">
				<view class="icon search"></view>
				<input placeholder="10秒装修报价" @tap="toSearch()" />
			</view>
		</view>
		<view class="category" style="margin-top: 80upx;">
			<view class="box">
				<swiper	class="swiper" duration="500" :style="{ height: categoryHeight }" @change="categoryChange">
					<swiper-item v-for="(page, pageindex) in categoryList" :key="pageindex" >
						<view class="category-list">
							<view class="icon" v-for="category in page" :key="category.cat_id" @tap="toCategory(category)">
								<view :style="{background: category.backgrounds}" style="width: 80upx; height: 80upx; border-radius: 50%; ">
									<image mode="widthFix" :src="category.img" @load="categoryImgLoad"></image>
								</view>
								<view>{{ category.title }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<!-- <view class="dots">
					<view v-for="(page, pageindex) in categoryList" :key="pageindex" :class="{ active: pageindex == currentPageindex }"></view>
				</view> -->
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="swiper-view">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" indicator-active-color="#ffffff">
				<swiper-item v-for="swiper in swiperList" :key="swiper.sid" @tap="toSwiper(swiper)">
					<image mode="aspectFill" :src="swiper.img"></image>
				</swiper-item>
			</swiper>
			<view class="keep-out"></view>
		</view>
		<!-- HR -->
		<view style="width: 100%; border-bottom: 0.5px solid #DDDDDD; margin-top: 10upx;">
		</view>
		<!-- 三个下拉框 -->
		<view style="width: 85%;height: 70upx; margin-left: 50upx; margin-top: 15upx;">
			<view style="width: 15%;height: 100%;margin-left: 20upx;float: left; font-size: 26upx; font-weight: 500;line-height: 100%;">
					<text style="margin-top: 18upx; float: left;">综合</text>
					 <image src="../../static/trim_img/sanjiao.png" style="width:9px;height: 9upx; margin-top: 27upx;"></image>
			</view>	
			<view style="width: 15%;height: 100%;margin-left: 160upx;float: left; font-size: 26upx; font-weight: 500;line-height: 100%;">
					<text style="margin-top: 18upx; float: left;">区域</text>
					 <image src="../../static/trim_img/sanjiao.png" style="width:9px;height: 9upx; margin-top: 27upx;"></image>
			</view>	
			<view style="width: 15%;height: 100%;margin-left: 160upx;float: left; font-size: 26upx; font-weight: 500;line-height: 100%;">
					<text style="margin-top: 18upx; float: left;">更多</text>
					 <image src="../../static/trim_img/sanjiao.png" style="width:9px;height: 9upx; margin-top: 27upx;"></image>
			</view>	
		</view>
		<!-- 下拉框结束 灰色div 布局开始 -->
		<view style="background: #EEEEEE;width: 100%;height:100%; padding: 1upx 10upx 0upx 10upx;">
			<view style="border-radius: 5px; width: 96%; margin-left: 2%;height: 340upx;
			background: #FFFFFF;margin-left: 6upx;margin-top: 20upx;
			padding: 10upx;
			" v-for="(item,index) in arrs" :key="index">
				<!-- head -->
				<view style="width: 95%; height:60upx;margin-left: 15upx; margin-top: 10upx;">
					<!-- logo -->
					<image style="float: left; width: 50upx; height:50upx; border-radius: 50%; margin-top: 8upx;":src="item.logo"></image>
					<text style="font-size: 28upx;margin-left: 5upx;">{{item.name}}</text>
					<text style="font-size: 23upx;float: right;margin-top: 10upx;">{{item.km}}</text>
				</view>
				<!-- 中间一行 -->
				<view style="width: 95%; height:35upx;margin-left: 15upx; margin-top: 10upx;">
					<text style="font-size: 23upx; float: left;">案例&nbsp;:&nbsp;&nbsp;{{item.al}}</text>
					<text style="font-size: 23upx; float: left; margin-left: 10upx;">工地&nbsp;:&nbsp;&nbsp;{{item.gd}}</text>
				</view>
				<!-- 图片展示 -->
				<view style="width: 95%;height:190upx; margin-left: 15upx; margin-top: 15upx;">
					<image style="width: 32%;height: 98%; border-radius: 8upx;" :src="item.src1"></image>
					<image style="width: 32%;height: 98%; border-radius: 8upx; margin-left: 2%;" :src="item.src2"></image>
					<image style="width: 32%;height: 98%; border-radius: 8upx; margin-left: 2%;" :src="item.src3"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data:function() {
			return{
				arrs:[
					{name:"远丰装饰",logo:"../../static/trim_img/logo.jpg",km:"26.3km",al:"4",gd:"4",
					src1:"../../static/trim_img/1.jpg",src2:"../../static/trim_img/2.jpg",src3:"../../static/trim_img/3.jpg"},
					{name:"周口海权装饰",logo:"../../static/trim_img/logo.jpg",km:"6.9km",al:"4",gd:"3",
					src1:"../../static/trim_img/4.jpg",src2:"../../static/trim_img/5.jpg",src3:"../../static/trim_img/6.jpg"},
					{name:"火花装饰",logo:"../../static/trim_img/logo.jpg",km:"2.5km",al:"4",gd:"1",
					src1:"../../static/trim_img/7.jpg",src2:"../../static/trim_img/8.jpg",src3:"../../static/trim_img/9.jpg"},
					{name:"浩天装饰",logo:"../../static/trim_img/logo.jpg",km:"3.7km",al:"4",gd:"2",
					src1:"../../static/trim_img/7.jpg",src2:"../../static/trim_img/8.jpg",src3:"../../static/trim_img/10.jpg"}
				],
				categoryList: [
					[//第一页
						{ cat_id: 0, img: '../../static/HM-shophome/category-imgs/0.png', title: '全程质检' ,backgrounds:"#fb853d"},
						{ cat_id: 1, img: '../../static/HM-shophome/category-imgs/1.png', title: '全屋定制' ,backgrounds:"#639dfe"},
						{ cat_id: 2, img: '../../static/HM-shophome/category-imgs/2.png', title: '上门量房' ,backgrounds:"#ffbe22"},
						{ cat_id: 3, img: '../../static/HM-shophome/category-imgs/3.png', title: '家居商城' ,backgrounds:"#ff6275"},
					]
				],
				swiperList:[
					{sid:0,src:'自定义src0',img:'../../static/HM-shophome/swiper-img/0.jpg'},
					{sid:1,src:'自定义src1',img:'../../static/HM-shophome/swiper-img/1.jpg'},
					{sid:2,src:'自定义src2',img:'../../static/HM-shophome/swiper-img/2.jpg'},
					{sid:3,src:'自定义src3',img:'../../static/HM-shophome/swiper-img/3.jpg'},
					{sid:4,src:'自定义src4',img:'../../static/HM-shophome/swiper-img/4.jpg'},
					{sid:5,src:'自定义src5',img:'../../static/HM-shophome/swiper-img/5.jpg'}
				]
			}
		},
		mounted() {
			
		},
		methods:{
			toCategory(e){
				uni.showToast({title: e.title});
			},//更新分类指示器
		categoryChange(event) {
			this.currentPageindex = event.detail.current;
		},
		//分类图片加载完毕
		categoryImgLoad(e){
			this.categoryImg = this.categoryImg?this.categoryImg+1:1;
			//完成加载11个分类图片开始计算分类高度，若分类图片不足10个则修改此处的10。
			if(this.categoryImg==10){
				this.getCategoryHeight();
			}
		},toSwiper(e){
			uni.showToast({title: e.src});
		}
		//更新分类高度
		// getCategoryHeight() {
		// 	let view = uni.createSelectorQuery().select('.category-list');
		// 	view.fields(
		// 		{
		// 			size: true
		// 		},
		// 		data => {
		// 			this.categoryHeight = data.height + 'px';
		// 		}
		// 	).exec();
		// }
		}
	}
</script>

<style lang="scss">
@font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACFwAAAOwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEEINSATYCJAMQCwoABCAFhG0HTxtLBxHVmzvJfhS4scOeC1v4zNNRK/hO5b0IHqg/8838ye5XsIDanmAkhZ1NSZygm4SsbYYkp17ICsOUxIP/ZZm9xejtQAD8zzX10geY387mEtXapUd7A5xF6oAi2pJoE8YNY1dexGkIwCSZQoiq1es2RUdhTBKA6N2jWwf0lAlVky3QEYSUrFSIOTjQ5VR5GZjt/168obDQQeLQMGY27FqtMxWf5z5fpgWCgdYugng8B8DWgQYUAhSI7qWujmhhqBAaptJfURzQ0ZEwVkfB58uCQSTZi0o3//JAItBAhGBk2gAURUrtxMQ2BQnPC1IQ8HyZmpvE1XgdMIDtwHVEJt4qkThsZwFPVHiEFTHKtWBBYGGUe/HmsZu6TluCStw+fXGMY9GyUb4b133Xrze9etV77VqzxcuXbYq8bF6/7rtxo5lY6A1cLcuCQJS3oXHswOYKUSaI71xkXr3ayZy2SIix0YumRS6AwEnLmr58WS9z2pKlYcJCCGzcXOU81Xuhp1osIWbBiUQWehda7lTvaNeCJX0WbYgksMA0hdlLo6zDp1PEomIdVu7YE4wN7nH7uGPdHXz2R3uHnX68tcP6SPE5ZSdObNpN/9dybtfmr6tHoy6+rN+DqdvnW9lUbkHTdcUWfKp1yzVr5Ag5HCqGU0Hca3jpAt2GiWFRwxYvdpYFo2b3tN/HvLeFd+BAr5Bu7CXnzKFlJb8dtP3ucx1djc+589Pep+W7X706stfvml+7i8fsWunxp7/f/uzsrgzj9Sv3p+6T7yqwvrfdy3nk/J6eZ84fnHp2lSvf/m/7H7569dDvuY/fTX+Mwdog+QVAGyB/IHmGyK8/exQrX13Maucu+y23rrbi5tQ1T3yTor3oj4kV8a8VtyxSqtQwKyXLbJF2kaI5DgAkYGICPzQG4dwfQxPVOhMEOlExSEJJAg2dTFSRhcCBRVEIQacCmBSkxnqLCAaiIZQBFGAiAIGH3SBxcRo0PFxBFXkPHETzDkLwCA1MfCJiR4tswStWxeEccIPlAbXSxS1rYEH2G0U8ZpeU+sw/Oq+80JR1NjrghW6MOT6JNgQO3NEJPTgPj4PAONK4hlKGYLqq4mVvKlc6M0YVh3PADZYH1EoXd8sHlvv+G0U8ZldDq/D+0XnVPTRl3QIdVFcr2rX090m0IXA8jjs6oYcOPMwQgSkfpnENpewRMF2FSvG2qnJ+zfmE6wATY6YSUmhCCQehg9V8advwun0+nHuJ0VP0kYrcz/Qox5hl') format('woff2');}
.icon {
	font-family:"HMfont-home" !important;
	font-size:60upx;
	font-style:normal;
	color:#ffffff;
	&.scan {
		&:before{content:"\e69a";}
	}
	&.menu {
		&:before{content:"\e62b";}
	}
	&.search {
		&:before{content:"\e628";}
	}
}
page {
	background-color: #fff;
}
.status {
	width: 100%;
	height: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height);
	/*  #endif  */
	background-color: #005A5B;
	position: fixed;
	top: 0;
	z-index: 999;
}
.header {
	width: 100%;
	height: 100upx;
	background-color: #fff;
	display: flex;
	position: fixed;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	
	z-index: 996;
	.scan {
		width: 100upx;
		height: 100upx;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.input {
		width: calc(100% - 200upx);
		display: flex;
		justify-content: center;
		align-items: center;
		position:relative;
		input {
			width: calc(100% - 60upx);
			height: 60upx;
			background-color: #f1f1f1;
			border-radius: 60upx;
			padding-left: 60upx;
			font-size: 30upx;
			
		}
		.icon{
			width: 60upx;
			height: 60upx;
			position: absolute;
			color: #a18090;
			z-index: 996;
			top: 20upx;
			left: 0;
			font-size: 40upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.menu {
		width: 100upx;
		height: 100upx;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			width: 60upx;
			height: 60upx;
			border-radius: 60upx;
		}
	}
}
.place{
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
	background-color: #ffffff;
	height: 100upx;
}
.swiper-view {
	.swiper {
		width: 95%;
		margin-top: -148upx;
		margin-left: 20upx;
		height: 200upx;
		image {
			width: 100%;
			height: 200upx;
			border-radius: 10upx;
		}
	}
	.keep-out {
		width: 100%;
		height: 0upx;
		border-radius: 100% 100% 0 0;
		background-color: #ffffff;
		margin-top: -15upx;
		position: absolute;
	}
}
.category {
	width: 95%;
	padding: 2.5vw 2.5vw;
	background-color: #ffffff;
	.box {
		width: 100%;
		border-radius: 20upx;
		background-color: #ffffff;
		.dots {
			display: flex;
			justify-content: center;
			height: 15upx;
			width: 100%;
			view{
				width: 30upx;
				height: 5upx;
				background-color: rgba(0, 0, 0, 0.2);
				&.active {
					background-color: #ffffff;
				}
			}
		}
		.swiper {
			width: 100%;
			padding: 10upx 0;
			.uni-swiper-dot {
				width: 20upx;
			}
			.category-list {
				width: 100%;
				height: auto;
				display: flex;
				justify-content: flex-start;
				padding: 10upx 0;
				flex-flow: wrap;
				.icon {
					width: 20%;
					display: flex;
					flex-flow: wrap;
					justify-content: center;
					font-size: 22upx;
					color: #666;
					margin-left:30upx;
					image {
						width: 70%;
						height: 13.3vw;
						margin-top: 15upx;
						
					}
					view{
						width: 100%;
						display: flex;
						justify-content: center;
					}
				}
			}
		}
	}
}
.pick{
	width: 95%;
	padding: 0 2.5vw 2.5vw 2.5vw;
	background: linear-gradient(to bottom, #ffffff 0%,#ffffff 105%);
	.box{
		width: 100%;
		border-radius: 20upx;
		background-color: #ffffff;
		.title{
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			height: 60upx;
			border-bottom: solid 1upx #005A5B;
			padding-bottom: 10upx;
			.big{
				font-size: 34upx;
				padding-left: 20upx;
				color: #46434f;
			}
			.small{
				font-size:28upx;
				padding-left: 20upx;
				color: #827f8b;
				font-weight: 400;
			}
		}
		.product-list{
			padding: 15upx 20upx 15upx 20upx;
			column-count: 2;
			column-width: 50%;
			column-gap: 10upx;
			>view{
				display: flex;
				background-color: #f8f8f8;
				position:relative;
				&:nth-child(1){
					.price{
						color: #e65339;
						font-size: 30upx;
						position: absolute;
						bottom: 8upx;
						left: 8upx;
					}
					.slogan{
						color: #807c87;
						font-size: 30upx;
						position: absolute;
						bottom: 8upx;
						right: 8upx;
					}
					image{
						width: 100%;
					}
				}
				&:nth-child(2),&:nth-child(3){
					image{
						width: calc(100% - 5upx);
						// height: 300upx;
					}
					.price{
						position: absolute;
						top: 25%;
						left: 55%;
						color: #e65339;
						font-size: 30upx;
					}
					.slogan{
						position: absolute;
						top: 60%;
						left: 55%;
						color: #807c87;
						font-size: 20upx;
					}
				}
				&:nth-child(2){
					margin-bottom: 10upx;
				}
			}
		}
	}
}
.banner{
	image{
		width: 100%;
	}
}
.goods-list{
	background-color: #f4f4f4;
	.title{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	.loading-text{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	.product-list{
		width: 95%;
		padding: 0 2.5% 2.5vw 2.5%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.product{
			width: 48.75%;
			border-radius: 20upx;
			background-color: #fff;
			margin: 0 0 15upx 0;
			image{
				width: 100%;
				border-radius: 20upx 20upx 0 0;
			}
			.name{
				width: 92%;
				padding: 10upx 4%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-align: justify;
				overflow: hidden;
				font-size: 30upx;
			}
			.info{
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;
				
				.price{
					color: #e65339;
					font-size: 30upx;
					font-weight: 600;
				}
				.slogan{
					color: #807c87;
					font-size: 24upx;
				}
			}
		}
		
	}
}
.big image{
	width: 60upx;
	height:55upx;
}
</style>

