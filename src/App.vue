<template>
  <div id="app">
    <router-link to="/buttons">buttons</router-link>
    <router-link to="/collapse">collapse</router-link>
    <router-link to="/popup">popup</router-link>
    <router-link to="/tooltip">tooltip</router-link>
    <router-link to="/filters">filters</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  > * {
    margin-right: 5px;
  }
}
</style>
