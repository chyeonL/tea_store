<template>
  <div class="title">
        <slot>
            <span>a</span>
        </slot>
    </div>
</template>

<script>
export default {
    name:'Card',
}
</script>

<style scoped>
.title {
	padding:0.266666rem 0;
	width: 100%;
	text-align: center;
	font-size: 0.426666rem;
}

.title span{
    position: relative;
}

.title span::before{
    content: '';
    position: absolute;
    background-color: #d4c0a7;
    top: .1067rem;
    left: -0.4533rem;
    width: .2133rem;
    height: .2133rem;
    border-radius: .2667rem;
}

.title span::after{
    content: '';
    position: absolute;
    background-color: #d4c0a7;
    top: .1067rem;
    right: -0.4533rem;
    width: .2133rem;
    height: .2133rem;
    border-radius: .2667rem;
}

</style>