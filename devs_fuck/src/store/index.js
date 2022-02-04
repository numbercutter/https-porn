import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: {},
      address: '',
      nfts: [],
      txn: []
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAccountAddress (state, address) {
      state.address = address
    },
    setUserNfts (state, nfts) {
      state.nfts = nfts
    },
    setTxnHistory (state, txn) {
      state.txn = txn
    },

  }
})

export default store
