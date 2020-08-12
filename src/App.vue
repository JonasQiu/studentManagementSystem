<template>
  <div id="app" class="wrapper">
        <header-system></header-system>

        <left-menu></left-menu>

        <div class="right-content">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
    import HeaderSystem from './components/Header';
    import LeftMenu from './components/LeftMenu';
    export default {
        name: 'App',
        components: {
            HeaderSystem,
            LeftMenu
        }
    }
</script>

<style>
    @import './assets/css/index.css';
</style>