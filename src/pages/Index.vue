<template>
  <div id="vitrine-digital">
    <my-header 
      :telephone="'4002-5300'" >
    </my-header> 
    <main>
      <main-title>
      </main-title> 
      <products>
      </products>
      <benefits>
      </benefits>
      <banner>
      </banner>
      <products-copy>
      </products-copy>
    </main>
    <my-footer 
    :telephone="'4002-5300'" 
    :officeHours="'2ª a 6ª: 8h às 19h | Sábados: 8h às 14h'" >
    </my-footer> 
    
  </div>
</template>

<script>

import Header from '../components/shared/header/Header.vue'
import Footer from '../components/shared/footer/Footer.vue'
import MainTitle from '../components/shared/section/Main-title.vue'
import Products from '../components/shared/section/Products.vue'
import Benefits from '../components/shared/section/Benefits.vue'
import Banner from '../components/shared/section/Banner.vue'
import ProductsCopy from '../components/shared/section/Products-copy.vue'

export default {
  components: {
    'my-footer': Footer,
    'my-header': Header,
    'main-title': MainTitle,
    'products': Products,
    'benefits': Benefits,
    'banner': Banner,
    'products-copy': ProductsCopy
  }
}
</script>
