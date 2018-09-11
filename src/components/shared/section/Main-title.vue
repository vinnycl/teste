<template>
    <section class="section section--main-title">
        <div class="grid">
            <h2 v-html="title" ></h2>
        </div>        
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