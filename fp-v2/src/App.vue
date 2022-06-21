<template>
  <div>
    
    <Tokenomics id="About"/>
    <SafariToken id="Tokenomics"/>
    <Merch id="Merch"/>
    <Contact id="Contact"/>
    <Navigation />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import SafariToken from './components/SafariToken.vue'
import Tokenomics from './components/Tokenomics.vue'
import Merch from './components/Merch.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    SafariToken,
    Tokenomics,
    Merch,
    Contact
  }
}
</script>

<style lang="scss">

@import "./assets/style/main.scss";

</style>
