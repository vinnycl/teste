<template>
    <footer class="footer footer--state-magazines">
            <div class="grid">
            <h2>Televendas <a class="link link--telephone" :href="`tel:${telephone}`" >{{ telephone }}</a> </h2>
            <p class="footer--assistance-service">{{ officeHours }}</p>
            <hr />
            <p v-html="legalText" ></p>
        </div>
    </footer>
</template>

<script>
export default {
    props: ['telephone', 'officeHours', 'legalText']
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/footer';
</style>