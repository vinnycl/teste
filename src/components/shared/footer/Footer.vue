<template>
    <footer class="footer footer--state-magazines">
        <h2>Televendas <a class="link link--telephone" :href="`tel:${telephone}`" >{{ telephone }}</a> </h2>
        <p class="footer--assistance-service">{{ officeHours }}</p>
        <hr />
        <p>Assinatura O GLOBO DIGITAL - Oferta válida somente para novos assinantes/pessoa física. O valor de R$ 1,90 será cobrado no primeiro mês de assinatura do pacote digital light. A partir do segundo mês, pague apenas R$ 9,90/mês. Aplicativo O GLOBO NOTÍCIAS disponível para smartphones compatíveis com os sistemas iOS (a partir da versão 8.1) e Android (a partir da versão 4.0.3). Informamos que os descontos são em relação ao preço padrão vigente. Pagamento somente no cartão de crédito ou débito em conta corrente. Para novos assinantes, ao escolher a opção de débito automático no ITAÚ, no primeiro mês de uso você precisará liberá-lo para concluir a operação. Essa autorização pode ser feita através dos canais: internet, caixas eletrônicos ou aplicativo Itaú. Cancele quando quiser através da nossa Central de Relacionamento.</p>
        <p>Assinatura O GLOBO DIGITAL PREMIUM - Oferta válida somente para novos assinantes/pessoa física. O valor de R$ 5,90 será cobrado nos três primeiros meses de assinatura do GLOBO DIGITAL PREMIUM. A partir do quarto mês, pague apenas R$ 29,90/mês, preço padrão vigente. Aplicativo GLOBO MAIS e Jornal digital  (através do aplicativo O GLOBO) disponíveis para smartphones e tablets compatíveis com os sistemas iOS (a partir da versão 8.1) e Android (a partir da versão 4.4), e para computadores. Aplicativo O GLOBO NOTÍCIAS disponível para smartphones compatíveis com os sistemas iOS (a partir da versão 8.1) e Android (a partir da versão 4.0.3). Informamos que os descontos são em relação ao preço padrão vigente. Pagamento somente no cartão de crédito ou débito em conta corrente. Para novos assinantes, ao escolher a opção de débito automático no ITAÚ, no primeiro mês de uso você precisará liberá-lo para concluir a operação. Essa autorização pode ser feita através dos canais: internet, caixas eletrônicos ou aplicativo Itaú. Cancele quando quiser através da nossa Central de Relacionamento.</p>
    </footer>
</template>

<script>
export default {
    props: ['telephone', 'officeHours']
}
</script>

<style lang="scss" type="text/scss">
    @import '../../../assets/stylesheets/components/footer';
</style>