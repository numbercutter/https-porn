import Moralis from "moralis";

const VUE_APP_MORALIS_APP_ID='OaSfF2itwQzLMO4az61L8OyZOtnhw230WhKQTrUO';
const VUE_APP_MORALIS_SERVER_URL='https://tfcxs2umznsi.usemoralis.com:2053/server';
Moralis.start({
  serverUrl: VUE_APP_MORALIS_SERVER_URL,
  appId: VUE_APP_MORALIS_APP_ID,
});


export default Moralis;