<template>
	<div class='like'>
		<!-- 插槽 -->
		<Card>
			<span>猜你喜欢</span>
		</Card>
		<ul>
			<li 
				v-for='(item,index) in likeList'
				:key='index'
				@click="goDetail(item.id)"
			>
				<h2>
					<img v-lazy="item.imgUrl" alt="">
				</h2>
				<h3>{{item.name}}</h3>
				<div>
					<span>¥</span>
					<b>{{item.price}}</b>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Card from '@/components/Home/Card'
export default{
    name:'Like',
	props:{
		likeList:Array
	},
	components:{
		Card
	},
	methods:{
		goDetail(id){
			this.$router.push({
				name:'Detail',
				// 显式			地址栏可以看到
				query:{
					id
				},
				// 隐式
				// params:{id}
			})
		}
	}
}
</script>

<style scoped>
.like ul{
	display: flex;
	flex-wrap: wrap;
}
.like ul li{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	margin-bottom: .2667rem;
}
.like h3{
	padding:0 0.16rem;
	width: 93%;
	font-size:0.373333rem;
	font-weight: 400;
	color:#222;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.like ul li > div{
	width: 93%;
	padding: 0.16rem;
	text-align: left;
	color:#FF0000;
}
.like ul li > div span{
	font-size:0.32rem;
}
.like ul li > div b{
	font-weight: 600;
	font-size:0.426666rem;
}
.like img{
	width: 4.693333rem;
	height: 4.693333rem;
}

img[lazy=loading] {
  background-color: rgb(227, 225, 225);
}
</style>
