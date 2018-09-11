<template>
  <section class="section section--banner" :style="`background-image: url(${backgroundImage}) ;`">
    <h3>{{ text }}</h3>
    <a :href="`${buttonlink}`" class="button button--red button--red-inverted"
      :style="`color: ${buttonTextColor} ; background-color: ${buttonColor} ;`" >
        {{ buttonText }}
    </a>
    <a :href="`${link}`" class="section--banner-image">
      <img :src="`${images}`" :alt="`${text}`" />
    </a>
  </section>
</template>

<script>
export default {
  props: ['text', 'buttonText', 'buttonColor', 'buttonTextColor', 'buttonlink', 'backgroundImage', 
  'images', 'link']
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/section--banner';
</style>