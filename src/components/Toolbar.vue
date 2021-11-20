<template>
  <v-app-bar app color="primary" dark>
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
</style>