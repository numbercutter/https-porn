<template>
  <body>
    <div id="tokenomics"> 
      <div class="outer">
        <!--
        <GetCesspoolPriceVue />
        <Cess4cess />
        <CessLp />
        <button @click="goToSite('https://pancakeswap.finance/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x40e8b78546fc1f38758799858742950654e7364b')">Buy</button>
        -->
        <section class="top">
          <div class="blink">
            <img src="./assets/img/fp.png" alt="demongraphic" width="60%">
            <img src="./assets/img/transtoad.webp" alt="demongraphic" width="30%" >
            <h1>KATY PERRYS GHOSTWRITER</h1>
          </div>
        </section>

      </div>
      
    </div>
  </body>
</template>

<script>

import { ref } from 'vue'



export default {
  name: 'Tokenomics',

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

#tokenomics {
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
  background-image: url('~@/assets/img/deer.jpg');
  background-size: fill; 
  background-repeat: round; 
  background-attachment: fixed;
  color: black
}
.blink {
animation: blinker .6s step-start infinite;
}

@keyframes blinker {
50% {
opacity: .3;
}
}
.top {
  //background-image: linear-gradient(rgba(255, 255, 255, 0.705), rgb(0, 0, 0));
  background-color: rgb(0, 0, 0);
  width: 100%;
  display: inline-block;
  align-content: center;
  padding: 20px 0px 40px;
  color: rgb(255, 255, 255);
  
  h1 {
    font-family: headerFont;
    font-size: 1.5em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 2em;
      }
    @media (min-width: 750px) {
      font-size: 2em;
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
  background-color: rgb(0, 0, 0);
  width: 100%;
  padding: 20px 0px 40px;
  color: rgb(255, 255, 255);
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
  background-color: rgb(0, 0, 0);
  width: 100%;
  padding: 20px 0px 40px;
  color: rgb(255, 255, 255);
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