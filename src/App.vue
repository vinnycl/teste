<template>
  <router-view></router-view>
</template>

<script>
  import router from './router'
  export default {
    router,
    // if your server is capable of this (all pages as default html)
    mode: 'history'
  }
</script>
