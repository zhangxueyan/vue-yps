<template>
  <div class="wrap">
  	<div class="head">
  		<div class="search-box">
  			<i class="iconfont icon-search1"></i>
  			<input type="text" placeholder="请输入搜索内容" maxlength="30" class="search-input">
  		</div>
  	</div>
  	<div class="cont">
  		<div class="tabs clearfix">
  			<a href="javascript:;" class="tab" :class="{active:tab.isActive}" v-for="(tab,index) in tabs" @click="showTabBox(tab,index)">{{tab.cate}}</a>
  		</div>
  		<div class="tab-cont">
  			<swiper :options="swiperOption1" ref="mySwiper1">
  				<!-- slides -->
  				<swiper-slide>
  				  <div class="banner">
  						<swiper :options="swiperOption2" ref="mySwiper2">
  							<swiper-slide v-for="banner in banners" :key="banner.id">
					          <router-link :to="{name:'home'}">
					            <img :src="banner.imageUrl" alt="">
					          </router-link>
  							</swiper-slide>
  						    <div class="swiper-pagination"  slot="pagination"></div>
  						</swiper>
  				  </div>
  				  <div class="products">
  				  	<div class="s-titl">商品区</div>
  				  	<ul class="clearfix">
  				  		<li v-for="product in products" class="product" :class="{fl:product.type ==='type1',fr:product.type ==='type2'}">
  				  			<img :src="product.imageUrl" alt="成人学历教育">
  				  			<h5>{{product.name}}</h5>
  				  			<p>¥{{product.price}}</p>
  				  		</li>
  				  	</ul>
  				  </div>
  				</swiper-slide>
  				<swiper-slide>
  					<ul class="clearfix">
  						<li v-for="product in products" class="product" :class="{fl:product.type ==='type1',fr:product.type ==='type2'}">
  							<img :src="product.imageUrl" alt="成人学历教育">
  							<h5>{{product.name}}</h5>
  							<p>¥{{product.price}}</p>
  						</li>
  					</ul>
  				</swiper-slide>
  				<swiper-slide>
  					<ul class="clearfix">
  						<li v-for="product in products" class="product" :class="{fl:product.type ==='type1',fr:product.type ==='type2'}">
  							<img :src="product.imageUrl" alt="成人学历教育">
  							<h5>{{product.name}}</h5>
  							<p>¥{{product.price}}</p>
  						</li>
  					</ul>
  				</swiper-slide>
  				<swiper-slide>
  					<ul class="clearfix">
  						<li v-for="product in products" class="product" :class="{fl:product.type ==='type1',fr:product.type ==='type2'}">
  							<img :src="product.imageUrl" alt="成人学历教育">
  							<h5>{{product.name}}</h5>
  							<p>¥{{product.price}}</p>
  						</li>
  					</ul>
  				</swiper-slide>
  				<swiper-slide>
  					<ul class="clearfix">
  						<li v-for="product in products" class="product" :class="{fl:product.type ==='type1',fr:product.type ==='type2'}">
  							<img :src="product.imageUrl" alt="成人学历教育">
  							<h5>{{product.name}}</h5>
  							<p>¥{{product.price}}</p>
  						</li>
  					</ul>
  				</swiper-slide>
  				<swiper-slide>
  					<ul class="clearfix">
  						<li v-for="product in products" class="product" :class="{fl:product.type ==='type1',fr:product.type ==='type2'}">
  							<img :src="product.imageUrl" alt="成人学历教育">
  							<h5>{{product.name}}</h5>
  							<p>¥{{product.price}}</p>
  						</li>
  					</ul>
  				</swiper-slide>
  			</swiper>
  		</div>
  	</div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import appNav from '../components/Nav'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tabs:[
      {cate:"推荐",isActive:true},
      {cate:"服装",isActive:false},
      {cate:"箱包",isActive:false},
      {cate:"鞋子",isActive:false},
      {cate:"配饰",isActive:false},
      {cate:"日用品",isActive:false},
      ],
      banners:[
      {imageUrl:"static/images/yps_01.jpg"},
      {imageUrl:"static/images/yps_02.jpg"},
      {imageUrl:"static/images/yps_01.jpg"}
      ],
      products:[
	      { 
	      	type:"type1",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      {
	      	type:"type2",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      { 
	      	type:"type1",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      {
	      	type:"type2",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      { 
	      	type:"type1",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      {
	      	type:"type2",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      { 
	      	type:"type1",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      {
	      	type:"type2",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      { 
	      	type:"type1",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      {
	      	type:"type2",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      { 
	      	type:"type1",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      },
	      {
	      	type:"type2",
	      	imageUrl:"static/images/yps_03.jpg",
	        name:"Burberry博柏利男士V领混纺板球羊绒针织衫",
	        price:5399.00
	      }
      ],
      notNextTick: true,
      swiperOption1: {
        noSwiping : true,
        autoHeight: true
      },
      swiperOption2: {
        autoplay : 5000,
        // 用户操作之后是否停止自动播放 true为停止
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
   },
  components: {
  	swiper,
  	swiperSlide,
  	appNav
  },
  computed: {
      swiper1() {
        return this.$refs.mySwiper1.swiper
      },
      swiper2() {
      	return this.$refs.mySwiper2.swiper
      }
  },
  methods:{
  	showTabBox(item,idx) {
  		this.tabs.forEach(function(item){
          item.isActive =false
  		})
  		item.isActive = true
  		this.swiper1.slideTo(idx, 1000, false)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../assets/css/home.css);
</style>
