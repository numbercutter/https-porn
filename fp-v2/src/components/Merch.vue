<template>
  <body>
    <div id="merch"> 
      <div class="outer">
        <!--
        <GetCesspoolPriceVue />
        <Cess4cess />
        <CessLp />
        <button @click="goToSite('https://pancakeswap.finance/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x40e8b78546fc1f38758799858742950654e7364b')">Buy</button>
        -->
        <section class="top">
          <div class="blink">
            <div>
            <p ><img src="./assets/img/octopirate.webp" alt="demongraphic" width="100px">MERCH<img src="./assets/img/octopirate.webp" alt="demongraphic" width="100px"></p>

            </div>
            <hr>
            <div class="lane ">
              <br>
              <a href="https://www.etsy.com/shop/TERRIBLEMERCH" target="_blank">FAKE STORE/MERCH</a>
              <br>
          </div>
          </div>
        </section>
        <!--
        <div id="grid">
          <img src="./assets/img/GTM15.webp" alt="demongraphic" width="200" class="grid-item">
          <img src="./assets/img/GTM3.webp" alt="demongraphic" width="200" class="grid-item">
        </div>
        -->
        
      </div>
      
    </div>
  </body>
</template>

<script>

import { ref } from 'vue'



export default {
  name: 'Merch',

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

#merch {
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

.blink {
animation: blinker 2s step-start infinite;

}

@keyframes blinker {
50% {
opacity: .8;
}
}
.rotate {

  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  /* transform: rotate(3deg); */
   /* transform: rotate(0.3rad);/ */
   /* transform: rotate(3grad); */ 
   /* transform: rotate(.03turn);  */
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
.outer {
  padding: 100px 20px 100px;
  //background-image: url('~@/assets/img/ab.png');
  background-position: cover;
  background-repeat: repeat;
  background-size: 50px;
  color: black
}
.top {
  //background-image: linear-gradient(rgba(255, 255, 255, 0.705), rgb(0, 0, 0));
  background-color: rgb(0, 0, 0);
  width: 100%;
  padding: 20px 0px 40px;
  color: #ff00aa;
  
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
    font-family: myFirstFont;
    font-size: 2em;
    text-shadow: grey;
    @media (min-width: 400px) {
        font-size: 3em;
      }
    @media (min-width: 750px) {
      font-size: 5em;
    }
  }
  img {
    width: 50px;
    text-shadow: grey;
    @media (min-width: 400px) {
        width: 100px;
      }
    @media (min-width: 750px) {
      width: 150px;
    }
  }
}
.lane {
padding: 30px;
margin-top: 20px;
filter: invert(1);
}
a {
color: rgb(0, 247, 255);
font-size: 4vw;
font-family: linkFont;

}
a:hover {
color: rgb(205, 50, 184);
}
#grid {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  background-color: rgba(0, 0, 0, 0);
  padding: 40px;

  img {
    width: 100px;
    @media (min-width: 400px) {
      width: 150px;
    }
    @media (min-width: 750px) {
      width: 300px;
    }
  }
}

</style>