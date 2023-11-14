<template>
  <div id="app">
    <CitiesTable/>
  </div>
</template>

<script>
import CitiesTable from './components/CitiesTable.vue';

export default {
  name: 'App',
  components: {
    CitiesTable
  }
}
</script>

<style>
@import "./assets/styles/main.css";
</style>
