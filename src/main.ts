import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./apollo-client";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(router);

app.mount("#app");
