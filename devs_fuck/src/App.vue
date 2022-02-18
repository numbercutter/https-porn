<template>
  <div id="app">
    <VueFinalModal
        v-model="modal.loginModal"
        classes="modal-container-login"
        content-class="modal-content-login"
      >
        <div class="modal__content">
          <p>You must be logged in to experience Cess World</p>
        </div>
    </VueFinalModal>
    <VueFinalModal
      v-model="modal.messageModal.status"
      classes="modal-container"
      content-class="modal-content-transfer"
    >
      <span class="modal__title">MESSAGE</span>
      <div class="modal__content">
        <p>{{modal.messageModal.message}}</p>
        
      </div>
    </VueFinalModal>
    <div id="app-container">
      <template v-if="isAuthenticated">
        <div id="router-container">
          <router-view />
        </div>
        <Navigation />
        <VueFinalModal
          v-model="modal.txnModal.status"
          classes="modal-container"
          content-class="modal-content-transfer"
        >
          <span class="modal__title">SucCESS!</span>
          <div class="modal__content">
            <p>Please allow up to 24 hours for Cess World to display changes</p>
            <a v-bind:href="modal.txnModal.hash" target="_blank">View Transaction</a>
            
          </div>
        </VueFinalModal>
        
        <VueFinalModal
          v-model="modal.loadingModal"
          classes="modal-container"
          content-class="modal-content-loading"
        >
          <span class="modal__title">This may take a minute...</span>
          <div class="modal__content">
            <div class="center">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
        </VueFinalModal>
        <VueFinalModal
          v-model="modal.errorModal"
          classes="modal-container"
          content-class="modal-content-transfer"
        >
          <span class="modal__title">Error</span>
          <div class="modal__content">
            <p>Something has gone wrong, please try again...</p>
          </div>
        </VueFinalModal>
      </template>
      <template v-else>
        <div class="login-container">
          <button @click="metaLogin">MetaMask</button>
        </div>
        <div class="login-container">
          <button @click="walletLogin">Wallet Connect</button>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { onMounted, inject, computed } from 'vue'
import { useStore } from 'vuex'
import { VueFinalModal } from "vue-final-modal";
//import Web3 from "web3"



export default {
  name: 'App',
  components: {

    VueFinalModal
  },
  setup() {
    const store = useStore()
    const $moralis = inject('$moralis')
    const unsubscribe = $moralis.onWeb3Enabled((result) => {
      console.log(result)
    });
    const modals = {
      loadingModal: false,
      errorModal: false,
      txnModal: {status: false, hash: ''},
      messageModal: {status: false, message: ''},
      loginModal: false
    }

    const setUser = (payload) => store.commit('setUser', payload)
    const setAccountAddress = (address) => store.commit('setAccountAddress', address)
    const setModal = (modal) => store.commit('setModal', modal)
    setModal(modals)
    const metaLogin = async () => {
      try {
        await $moralis.enableWeb3()
        const chainId = await $moralis.chainId;
        console.log(chainId)

        if ( chainId != 97 ) {
            store.state.modal["messageModal"]["message"] = "switching network...";
            store.state.modal["messageModal"]["status"] = true;
            const newId = 97;
            await $moralis.switchNetwork(newId);
            store.state.modal["messageModal"]["status"] = false;
            const user = await $moralis.Web3.authenticate()
            const address = user.get('ethAddress')
            setUser(user)
            setAccountAddress(address)
            getUserNfts()
            return
        }
        const user = await $moralis.Web3.authenticate()
        const address = user.get('ethAddress')
        setUser(user)
        setAccountAddress(address)
        getUserNfts()
      
      } catch (error) {
        console.log(error)
        store.state.modal["loginModal"] = true
      }
    }
    const walletLogin = async () => {
      try {
      const user = await $moralis.authenticate({ provider: "walletconnect", chainId: 97 })
      const address = user.get('ethAddress')
      setUser(user)
      setAccountAddress(address)
      getUserNfts()
      } catch (error) {
        console.log(error)
        store.state.modal["loginModal"] = true
      }
    }

    const logout = async () => {
      await $moralis.User.logOut()
      setUser({})
      setAccountAddress({})
    }

    const handleCurrentUser = () => {
      const user = $moralis.User.current()
      if (user) {
        const address = user.get('ethAddress')
        setUser(user)
        setAccountAddress(address)

      }
    }
    const setUserNfts = (nfts) => store.commit("setUserNfts", nfts);
    
    const getUserNfts = async () => {
      if (store.state.address != null) {
        const nft_options = { chain: "bsc testnet", address: store.state.address };
        const nfts = await $moralis.Web3API.account.getNFTs(nft_options);
        const nft_list = [];
        console.log("get nfts you cunt")
        const fetchIPFSDoc = async (ipfsHash) => {
          try {
            const url = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
            const response = await fetch(url);
            return await response.json();
          } catch (error) {
            console.log(error)
          }
        }
        const fetchIPFSImg = async (ipfsHash) => {
          try {
            const url = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
            const response = await fetch(url);
            return response
          } catch (error) {
            console.log(error)
          }
        }
        for (let i = 0; i < nfts.result.length; i++) {
          if (nfts.result[i]['token_uri'] != null || nfts.result[i]['token_uri'] != undefined) {
            try {
              {
                const slice = nfts.result[i]['token_uri'].slice(34);
                const linky = fetchIPFSDoc(slice)
                
                linky.then(
                  function(value) {
                  const nft_json = value;
                  const img_slice = nft_json["image"].slice(7)
                  const img = fetchIPFSImg(img_slice);
                  img.then(
                    function(value) {
                      const meta = value["url"]
                      const name = nft_json["name"];
                      const tokenId = nft_json["edition"];
                      const tokenAddress = nfts.result[i]["token_address"];
                      const nft_info = {
                        name: name,
                        metadata: meta,
                        imgModal: false,
                        detailsModal: false,
                        tokenId: tokenId,
                        tokenAddress: tokenAddress,
                      };
                      nft_list.push(nft_info);
                    }
                  )
                })
              }
            } catch (error) {
              console.error(error);
            }
          }
        }
        setUserNfts(nft_list);
        console.log(nft_list)
      }
    }
    
    onMounted(() => {
      handleCurrentUser()
      //setInterval(getUserNfts, 10000);
      getUserNfts()
    })

    return {
      metaLogin,
      walletLogin,
      logout,
      unsubscribe,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0),
      user: computed(() => store.state.user),
      address: computed(() => store.state.address),
      nfts: computed(() => store.state.nfts),
      modal: computed(() => store.state.modal),
    }
  }
}
</script>
<style lang="scss">

@import "./assets/style/main.scss";

</style>
