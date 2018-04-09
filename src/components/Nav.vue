<template>
  <div class="nav">
    <div class="clearfix">
      <router-link :to="{name:item.url}" class="nav-a" v-for="item in nav" :key="item.id">
        <i  class="iconfont" :class="{'icon-shouye':item.type ==='type1','icon-zhuanti':item.type==='type2','icon-leimupinleifenleileibie':item.type==='type3','icon-gouwuchekong':item.type==='type4','icon-wode':item.type==='type5'}"></i>
        <span>{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nav:[
       {name:'首页',url:'home',type:"type1"},
       {name:'专题',url:'subject',type:"type2"},
       {name:'分类',url:'classify',type:"type3"},
       {name:'购物车',url:'cart',type:"type4"},
       {name:'我',url:'me',type:"type5"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../assets/css/nav.css);
</style>
