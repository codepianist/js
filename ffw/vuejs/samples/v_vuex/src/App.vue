<template>
  <div id="app">
    <counter></counter>
    <result></result>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';

export default {
  name: 'app',
  components: {
    counter: Counter,
    result: Result
  }
}
</script>

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
