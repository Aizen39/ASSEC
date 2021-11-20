<template>
  <v-app-bar app color="#1155A3" dark>
    <div class="d-flex align-center">
      <!-- <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/logoMicro.png')"
        transition="scale-transition"
        width="40"
      /> -->
      <h1>Mon élevage</h1>

    </div>

    <v-spacer></v-spacer>

    <div class="menu">
        <span class="link mr-2">Tableau de bord</span>
        <span class="link mr-2">Mes informations</span>
        <span class="link mr-2">Mes recommandations</span>
        <span class="link mr-2">Prévisionnel</span>

    </div>

    <v-spacer></v-spacer>

    <div>
      <router-link to="/login">
        <span class="login mr-2">Se connecter</span
        ><span class="login mr-2">|</span></router-link
      ><router-link to="/register">
        <span class="login mr-2">S'enregistrer</span>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>


export default {
  name: "Toolbar",
  props: {
 
  },
  components: {
  },
  data() {
    return {
      
    };
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.v-application span.login {
  color: white;
  margin-left: 4px;
}

@media screen and (max-width: 440px) {
  h1{
    font-size: 16px;
  }
}

.menu{
  margin-top: 50px;
  margin-bottom: 15px;
  
}
.link{
  font-size: 18px;
  margin-left: 20px;
}

.link:hover {
   border-color: red; 
}

</style>