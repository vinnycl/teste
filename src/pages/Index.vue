<template>
  <div id="vitrine-digital">
    <my-header 
      :name="dataServer.name"
      :logo="dataServer.logo"
      :telephone="dataServer.attendanceTelephone" />
    <main>
      <!--div v-for="data in dataServer">{{data}}</div-->
      <main-title :title="dataServer.title" />
      <products
        :title="dataServer.bids[0].title"
        :subtitle="dataServer.bids[0].subtitle"
        :imageLink="dataServer.bids[0].imageLink"
        :buttonText="dataServer.bids[0].buttonText"
        :buttonColor="dataServer.bids[0].buttonColor"
        :buttonTextColor="dataServer.bids[0].buttonTextColor"
        :buttonlink="dataServer.bids[0].buttonlink"
        :betterChoice="dataServer.bids[0].betterChoice"
        :advantages="dataServer.bids[0].advantages[0]"
        :titlePack="dataServer.bids[0].titlePack"
        :priceMoney="dataServer.bids[0].priceMoney"
        :priceTime="dataServer.bids[0].priceTime"
      />
      <benefits
        :text="dataServer.advantageConfiguration.text"
        :imageLink="dataServer.advantageConfiguration.advantages[0].imageLink"
        :title="dataServer.advantageConfiguration.advantages[0].title"
        :details="dataServer.advantageConfiguration.advantages[0].details" />
      <banner/>
      <products-copy/>
    </main>
    <my-footer 
    :telephone="dataServer.attendanceTelephone" 
    :officeHours="dataServer.attendanceText"
    :legalText="dataServer.walls[0].legalText"/> 
    
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
import json from '../../static/data.json'

export default {
  components: {
    'my-footer': Footer,
    'my-header': Header,
    'main-title': MainTitle,
    'products': Products,
    'benefits': Benefits,
    'banner': Banner,
    'products-copy': ProductsCopy
  },
    data() {

      return {
        dataServer: json
      }
  }
}
</script>
