<template>
<div class="wrap">
  <h2 class="head">专题<i class="iconfont icon-search1"></i></h2>
  <div class="cont">
      <div class="sub-cate" v-for="item in subProducts">
    <div class="banner">
      <img :src="item.imageUrl" alt="">
    </div>
    <ul class="sub-ul clearfix">
      <li class="sub-li" v-for="childItem in item.brief" :class="{noml:childItem.noMl}">
        <img :src="childItem.imageUrl" alt="">
        <h5>{{childItem.name}}</h5>
        <p>{{childItem.price}}</p>
      </li>
    </ul>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      subProducts:[
      	 {
      	 imageUrl:"static/images/yps_04.jpg",
      	 brief:[
      	  {imageUrl:"static/images/yps_05.jpg",
      	   name:'Moncler盟可莱男士白色雪人羽绒服',price:16999.00,noMl:true},
      	  {imageUrl:"static/images/yps_05.jpg",
      	  name:'Moncler盟可莱男士白色雪人羽绒服',price:16999.00,noMl:false},
      	  {imageUrl:"static/images/yps_05.jpg",
      	  name:'Moncler盟可莱男士白色雪人羽绒服',price:16999.00,noMl:false},
      	 ]
         },
      	 {
      	 imageUrl:"static/images/yps_04.jpg",
      	 brief:[
      	  {imageUrl:"static/images/yps_05.jpg",
      	   name:'Moncler盟可莱男士白色雪人羽绒服',price:16999.00,noMl:true},
      	  {imageUrl:"static/images/yps_05.jpg",
      	  name:'Moncler盟可莱男士白色雪人羽绒服',price:16999.00,noMl:false},
      	  {imageUrl:"static/images/yps_05.jpg",
      	  name:'Moncler盟可莱男士白色雪人羽绒服',price:16999.00,noMl:false},
      	 ]
         }
      ] 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont{
	padding: 1rem 0 1.4rem;
}
.head{
	width: 100%;
	font-size: 0.36rem;
	color: #fff;
	text-align: center;
	line-height: 1.0rem;
	background: #e61118;
	position: fixed;
	left: 0;
	top:0;
}
.head .icon-search1{
	width: 1rem;
	height: 1rem;
	position: absolute;
	right:0;
	top:0;
}
.banner{
	height: 4.5rem;
	overflow: hidden;
}
.banner img{
	width: 100%;
}
.sub-ul{
	padding: 0 0.2rem;
}
.sub-li{
	width: 2.3rem;
	float: left;
	margin: 0.2rem 0 0 0.1rem;
}
.sub-li h5{
    font-size: 0.24rem;
    color: #000;
    padding: 0.1rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;	
}
.sub-li p{
	color: #dd2936;
    text-align: center;
    font-size: .3rem;
}
</style>
