<template>
    <header class="header header--state-magazines">
      <h1>
        <img src="../../../assets/images/logo-autoesporte.svg" alt="Auto Esporte" />
      </h1>
      <a class="link link--telephone" :href="`tel:${telephone}`" >{{ telephone }}</a>
    </header>
</template>

<script>
export default {
    props: ['telephone']
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/header';
</style>