<template>
    <header class="header header--state-magazines">
        <div class="grid">
            <h1>
                <img :src="`${logoCompany}`" :alt="`${descCompany}`" class="logo-company" />
                <img :src="`${logo}`" :alt="`${name}`"  />
            </h1>
            <a class="link link--telephone" :href="`tel:${telephone}`" >{{ telephone }}</a>
        </div>
    </header>
</template>

<script>
export default {
    props: ['telephone', 'name', 'logo', 'logoCompany', 'descCompany']
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/header';
</style>