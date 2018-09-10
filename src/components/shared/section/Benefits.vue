<template>
  <section class="section section--benefits">
    <h3>{{ text }}</h3>
    <ul>
      <li>
        <img :src="`${imageLink}`" :alt="`${title}`" />
        <h4>{{ title }}</h4>
        <p>{{ details }}</p>
      </li>
      <li>
        <img src="../../../assets/images/icon-content.svg" alt="Conteúdo" />
        <h4>Conteúdo</h4>
        <p>Cobertura completa e atualizada dos fatos que marcaram agronegócio.</p>
      </li>
      <li>
        <img src="../../../assets/images/icon-quality.svg" alt="Qualidade" />
        <h4>Qualidade</h4>
        <p>Conteúdo exclusivo, com a qualidade Globo, para você estar sempre atualizado sobre o agronegócio.</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['text', 'imageLink', 'details', 'title']
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/section--benefits';
</style>