<template>
  <div id="app">
    <div id="nav">
      <div>DESENSITIZE</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/whitepaper">Whitepaper</router-link>
      <template v-if="isAuthenticated">
        <button @click="logout">logout</button>
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
    <router-view />
  </div>
</template>
<script>
import { onMounted, inject, computed} from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'devsfuck',

  setup() {
    const store = useStore()
    const $moralis = inject('$moralis')
    

    const setUser = (payload) => store.commit('setUser', payload)
    const setAccountAddress = (address) => store.commit('setAccountAddress', address)

    const metaLogin = async () => {
      const user = await $moralis.Web3.authenticate()
      const address = user.get('ethAddress')
      setUser(user)
      setAccountAddress(address)
    }
    const walletLogin = async () => {
      const user = await $moralis.authenticate({ provider: "walletconnect", chainId: 56 })
      const address = user.get('ethAddress')
      setUser(user)
      setAccountAddress(address)
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
    

    onMounted(() => {
      handleCurrentUser()
    })

    return {
      metaLogin,
      walletLogin,
      logout,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0),
      user: computed(() => store.state.user),
      address: computed(() => store.state.address),
    }
  }
}
</script>
<style lang="scss">

@import "./assets/style/main.scss";
</style>
