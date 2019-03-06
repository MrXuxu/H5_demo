<template>
  <div>
    <full-page :options="options">
      <div class="section"><slot name="homePage"></slot></div>
      <div class="section"><slot name="caseShowPage"></slot></div>
      <div class="section"><slot name="productsPage"></slot></div>
      <div class="section"><slot name="aboutUsPage"></slot></div>
    </full-page>
  </div>
</template>
<script>

export default {
  name: 'fullpage',
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['home', 'caseShow', 'products', 'aboutUs'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401'],
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // afterLoad: '',
        scrollBar: false,
        autoScrolling: true,
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>


