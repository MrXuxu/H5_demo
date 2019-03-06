<template>
  <div class="home">
    <FullPage>
      <template slot="homePage"><HomePage></HomePage></template>
      <template slot="caseShowPage"><HomePage></HomePage></template>
      <template slot="productsPage"><HomePage></HomePage></template>
      <template slot="aboutUsPage"><HomePage></HomePage></template>
    </FullPage>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FullPage from '../components/FullPage.vue';

import HomePage from '../components/subcomponents/HomePage.vue'
import CaseShowPage from '../components/subcomponents/CaseShowPage.vue'
import ProductsPage from '../components/subcomponents/ProductsPage.vue'
import AboutUsPage from '../components/subcomponents/AboutUsPage.vue'

export default {
  name: 'home',
  components: {
    FullPage,
    HomePage,
    CaseShowPage,
    ProductsPage,
    AboutUsPage
  }
}
</script>
