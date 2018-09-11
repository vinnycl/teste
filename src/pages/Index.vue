<template>
  <div id="vitrine-digital">
    <my-header 
      :name="dataServer.name"
      :logo="dataServer.logo"
      :telephone="dataServer.attendanceTelephone" />
    <main>
      <!--div v-for="data in dataServer">{{data}}</div-->
      <main-title :title="dataServer.title" />
      <products>
        <ul v-for="data in dataServer.bids" >
          <li :class="{'spotlight--best-choice': data.betterChoice }" >
            <h3>{{ data.title }}</h3>
            <p>{{ data.subtitle }}</p>
            <img :src="`${data.imageLink}`" :alt="`${data.titlePack}`" />
            <div class="price price--main">
              <span class="price price--currency">R$</span>
              <span class="price price--cash">{{ data.priceMoney }}</span>
              <span class="price price--time">{{ data.priceTime }}</span>
            </div>
            <a 
              :href="`${data.buttonlink}`" 
              :style="`color: ${data.buttonTextColor} ; background-color: ${data.buttonColor} ;`"
              class="button button--red">
                {{ data.buttonText }}
              </a>
              <button class="button button--benefits-show " onclick="toggle();">Ver lista de benefícios</button>
              <ul class="section--product-benefits hidden">
                <li  v-for="dataInner in data.advantages">{{ dataInner }}</li>
              </ul>
          </li>
        </ul>
      </products>
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
