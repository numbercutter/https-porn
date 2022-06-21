<template>
  <body>
    <div id="safaritoken"> 
      <div class="outer">
        <!--
        <GetCesspoolPriceVue />
        <Cess4cess />
        <CessLp />
        <button @click="goToSite('https://pancakeswap.finance/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x40e8b78546fc1f38758799858742950654e7364b')">Buy</button>
        -->
        <section class="top">
          <div>
            <h1>GAME PARK TOKEN</h1>
            <p>Revolutionizing real world wildlife with onChain integration</p>
            <button>Claim your Animal</button>
          </div>
        </section>
        <section class="middle">
          <div>
            <h1>HOW TO PLAY</h1>
            <p></p>
          </div>
        </section>
        <section class="bottom">
          <div>
            <h1>CLAIM REWARDS</h1>
            <p></p>
          </div>
        </section>
        
      </div>
      
    </div>
  </body>
</template>

<script>

import { ref } from 'vue'



export default {
  name: 'SafariToken',

  setup() {
    const showModal = ref(false)
    const goToSite = (producturl) => {
      window.open(producturl,'_blank');
    }

    return { goToSite, showModal }
  }
}
</script>

<style lang="scss" scoped>

#safaritoken {
  display: inline;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: honeydew;
  
  li {
    list-style: none;
    text-decoration: none;
  }
}
.outer {
  padding: 100px 20px 100px;
  background-image: url('~@/assets/img/ab.jpg');
  background-size: fill; 
  background-repeat: round; 
  background-attachment: fixed;
  color: black
}
.top {
  //background-image: linear-gradient(rgba(255, 255, 255, 0.705), rgb(0, 0, 0));
  background-color: rgb(0, 0, 0);
  width: 100%;
  padding: 20px 0px 40px;
  color: rgb(255, 78, 47);
  
  h1 {
    font-family: headerFont;
    font-size: 1.5em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 2em;
      }
    @media (min-width: 750px) {
      font-size: 3em;
    }
  }
  p {
    font-family: pFont;
    font-size: .7em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}
.middle {
  background-image: linear-gradient(rgba(255, 255, 255, 0.705), rgba(255, 94, 0, 0.705));
  width: 100%;
  padding: 20px 0px 40px;
  h1 {
    font-family: headerFont;
    font-size: 1.5em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 2em;
      }
    @media (min-width: 750px) {
      font-size: 3em;
    }
  }
  p {
    font-family: pFont;
    font-size: .7em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}
.bottom {
  background-image: linear-gradient(rgba(255, 94, 0, 0.705), rgb(0, 225, 255));
  width: 100%;
  padding: 20px 0px 40px;
  h1 {
    font-family: headerFont;
    font-size: 1.5em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 2em;
      }
    @media (min-width: 750px) {
      font-size: 3em;
    }
  }
  p {
    font-family: pFont;
    font-size: .7em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}



</style>