<template>
  <div>
    <Navigation />
    <SafariToken id="About"/>
    <Tokenomics id="Tokenomics"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import SafariToken from './components/SafariToken.vue'
import Tokenomics from './components/Tokenomics.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    SafariToken,
    Tokenomics
  }
}
</script>

<style lang="scss">

@import "./assets/style/main.scss";

</style>
