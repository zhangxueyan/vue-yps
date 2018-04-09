<template>
<div class="wrap">
  <h2 class="head">专题<i class="iconfont icon-search1"></i></h2>
  <div class="cont">
    <div class="filbtns clearfix">
      <a href="javascript:;" class="filbtn"v-for="(filbtn,index) in filbtns" :class="{active:filbtn.isActive,noBorder:filbtn.noBorder}" @click="toggleStyle(filbtn,index)">{{filbtn.name}}<i class="iconfont" :class="{'icon-xiangxia':filbtn.type === 'down','icon-shouqi':filbtn.type === 'up'}"></i>
      </a>
      <div class="dropmenus">
       <div class="dropmenu" v-for="(dropmenu,index) in dropmenus" v-if="dropmenu.isShow">
         <p class="dropmenup" v-for="dropmenup in dropmenu.desc">{{dropmenup.name}}</p>
       </div>
      </div>
    </div>
    <div class="clapics clearfix">
      <div class="clapic" v-for="clapic in clapics" :class="{fl:clapic.type==='type1',fr:clapic.type==='type2'}">
        <img :src="clapic.imageUrl" alt="ysp">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      filbtns:[
      {name:"全部品牌",isActive:false,noBorder:true,type:'down'},
      {name:"全部品类",isActive:false,noBorder:false,type:'down'},
      {name:"全部价格",isActive:false,noBorder:false,type:'down'}
      ],
      clapics:[
        {imageUrl:"static/images/yps_06.jpg",type:'type1'},
        {imageUrl:"static/images/yps_06.jpg",type:'type2'},
        {imageUrl:"static/images/yps_06.jpg",type:'type1'},
        {imageUrl:"static/images/yps_06.jpg",type:'type2'},
        {imageUrl:"static/images/yps_06.jpg",type:'type1'},
        {imageUrl:"static/images/yps_06.jpg",type:'type2'},
        {imageUrl:"static/images/yps_06.jpg",type:'type1'},
        {imageUrl:"static/images/yps_06.jpg",type:'type2'},
        {imageUrl:"static/images/yps_06.jpg",type:'type1'},
        {imageUrl:"static/images/yps_06.jpg",type:'type2'}
      ],
      dropmenus:[
       {
        isShow:false,
        desc:[
        {name:"BOTTEGA VENETA0"},
        {name:"BOTTEGA VENETA1"},
        {name:"BOTTEGA VENETA1"},
        {name:"BOTTEGA VENETA1"}
        ]
       },
       {
        isShow:false,
        desc:[
        {name:"BOTTEGA VENETA1"},
        {name:"BOTTEGA VENETA1"},
        {name:"BOTTEGA VENETA1"},
        {name:"BOTTEGA VENETA1"}
        ]
       },
       {
        isShow:false,
        desc:[
        {name:"BOTTEGA VENETA2"},
        {name:"BOTTEGA VENETA1"},
        {name:"BOTTEGA VENETA1"},
        {name:"BOTTEGA VENETA1"}
        ]
       }
      ]
    }
  },
  methods:{
    toggleStyle:function(item,idx){
      item.isActive = !item.isActive
      if(item.type = "down"){
        item.type = "up"
      }else{
        item.type = "down"
      }
      this.dropmenus.forEach(function(item){
        item.isShow=false
      })
      console.log(this.dropmenus)
      this.dropmenus[idx].isShow = true
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
  z-index: 100;
}
.head .icon-search1{
  width: 1rem;
  height: 1rem;
  position: absolute;
  right:0;
  top:0;
}
.filbtns{
  position: relative;
}
.filbtn{
  display: block;
  width: 2.5rem;
  float: left;
  font-size: 0.36rem;
  color: #000;
  text-align: center;
  line-height: 1.0rem;
  border-left: 1px solid #e1e1e1;
}
.filbtn.active{
  color: red;
}
.dropmenus{
  width: 100%;
  background: #fff;
  border: 1px solid red;
  position: absolute;
  left: 0;
  top:1rem;
  padding: 0 0.1rem;
}
.dropmenu{
  position: absolute;
  left: 0;
  top:0;
  background: #fff;
  width: 100%;
  border: 1px solid red;
}
.dropmenup{
  font-size: 0.24rem;
  color: #333;
  padding-left: 0.2rem;
  line-height: 0.5rem;
  border-bottom: 1px solid #ededed;
}
.noBorder{
  border-left: none;
}
.clapics{
  padding: 0 0.1rem;
}
.clapic{
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 0.2rem;
}
</style>
