<template>
  <v-app>
    <Toolbar />

    <v-main>
      <v-container fluid fill-height class="pa-0">
        <Home v-if="homePage()"/>
        <hr v-if="homePage()"/>
        <HomeConsoEau v-if="homePage()"/>
        <hr v-if="homePage()"/>
        <HomeElevage v-if="homePage()"/>
        <hr v-if="homePage()"/>
        <HomeGestionRessource v-if="homePage()"/>
        <hr v-if="homePage()"/>
        <HomeSecheresse v-if="homePage()"/>
        <hr v-if="homePage()"/>
        <HomeBio />
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Home from "./components/Home";

import HomeConsoEau from './components/homeConsoEau.vue';
import HomeElevage from './components/homeElevage.vue';
import HomeGestionRessource from './components/homeGestionRessource.vue';
import HomeSecheresse from './components/homeSecheresse.vue';
import HomeBio from './components/homeBio.vue';
import Footer from "./components/Footer.vue";


export default {
  name: "App",

  components: {
    Home,
    HomeConsoEau,
    HomeElevage,
    HomeGestionRessource,
    HomeSecheresse,
    HomeBio,
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

<style>
hr{
  width: 100%;
}

</style>