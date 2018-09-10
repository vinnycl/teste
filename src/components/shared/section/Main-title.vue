<template>
    <section class="section section--main-title">
        <h2 v-html="title" ></h2>
      </section>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/section--main-title';
</style>