<template>
  <div id="app">
    <router-view/>
    <appNav></appNav>
  </div>
</template>
<script>
import appNav from './components/Nav'
export default {
  name: 'app',
   data(){
  	return {
     msg: 'Welcome to Your Vue.js App',
  	}
  },
  components: {
  	appNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 7.5rem;
  margin:0 auto;
}
</style>
