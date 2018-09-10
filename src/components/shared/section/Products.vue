<template>
    <section class="section section--products">
        <ul>
          <li :class="{'spotlight--best-choice': betterChoice }">
            <h3>{{ title }}</h3>
            <p>{{ subtitle }}</p>
            <img :src="`${imageLink}`" :alt="`${titlePack}`" />
            <div class="price price--main">
              <span class="price price--currency">R$</span>
              <span class="price price--cash">{{ priceMoney }}</span>
              <span class="price price--time">{{ priceTime }}</span>
            </div>
            <a 
            :href="`${buttonlink}`" 
            :style="`color: ${buttonTextColor} ; background-color: ${buttonColor} ;`"
            class="button button--red">
              {{ buttonText }}
            </a>
            <button class="button button--benefits-show " onclick="toggle();">Ver lista de benefícios</button>
            <ul class="section--product-benefits hidden">
              <li>
                {{ advantages }}
              </li>
            </ul>
          </li>
          <li class="spotlight--best-choice">
            <h3>Globo +</h3>
            <p>Acesso ao conteúdo de todas as marcas da Editora Globo</p>
            <img src="../../../assets/images/devices.png" alt="Tipos de dispositivos que você pode usar ler nosso conteúdo" />
            <div class="price price--main">
              <span class="price price--currency">R$</span>
              <span class="price price--cash">29,90</span>
              <span class="price price--time">/mês</span>
            </div>
            <a href="#" class="button button--red">Quero assinar</a>
            <button class="button button--benefits-show" onclick="toggle();">Ver lista de benefícios</button>
            <ul class="section--product-benefits hidden">
              <li>
                Neque corro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </li>
              <li>
                Neque corro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </li>
              <li>
                Neque corro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </li>
            </ul>
          </li>
          <li>
            <h3>Auto Esporte Plus</h3>
            <p>Acesso a todo conteúdo digital + revista física</p>
            <img src="../../../assets/images/devices-e-revistas.png" alt="Tipos de dispositivos que você pode usar ler nosso conteúdo" />
            <div class="price price--main">
              <span class="price price--currency">R$</span>
              <span class="price price--cash">12,90</span>
              <span class="price price--time">/mês</span>
            </div>
            <a href="#" class="button button--red">Quero assinar</a>
            <button class="button button--benefits-show" onclick="toggle();">Ver lista de benefícios</button>
            <ul class="section--product-benefits hidden">
              <li>
                Neque corro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </li>
              <li>
                Neque corro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </li>
              <li>
                Neque corro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </li>
            </ul>
          </li>
        </ul>
      </section>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'imageLink', 'buttonText',   'buttonColor', 'buttonTextColor', 
  'buttonlink', 'betterChoice', 'advantages', 'titlePack', 'priceMoney', 'priceTime' ]
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/section--products';
</style>