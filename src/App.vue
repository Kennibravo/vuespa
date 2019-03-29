<template>
  <div id="app">
  <!-- the router outlet, where all matched components would ber viewed -->
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link>
  <router-link to="/foo">Foo</router-link>
  <router-link to="/bar">Bar</router-link>
  <router-link :to="{ name: 'user', params: {id: 123 }}">User</router-link>

  <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  name: 'app',
}

</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>