<template>
  <v-app>
    <Toolbar />

    <v-main>
      <v-container fluid fill-height class="pa-0">
        <Home v-if="homePage()"/>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Home from "./components/Home";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Home,
    Toolbar,
    Footer,
  },

  data: () => ({
    //
  }),

  methods:{
    homePage() {
      if (this.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
