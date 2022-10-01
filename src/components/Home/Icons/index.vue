<template>
    <ul class="icons">
        <li v-for="item in iconsList" :key="item.id">
            <img v-lazy="item.imgUrl" alt="">
            <span>{{item.title}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name:'Icon',
	props:{
		iconsList:Array
	}
}
</script>

<style>
.icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .4rem;
}

.icons li {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.icons img{
	width: 1.013333rem;
	height: 1.013333rem;
}
.icons span{
    padding: .2667rem 0;
    font-size:0.426666rem;
}

img[lazy=loading] {
  background-color: rgb(227, 225, 225);
}
</style>