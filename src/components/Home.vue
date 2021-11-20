<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="logo">
        <v-img
          alt="assecc logo"
          class="logo-img"
          :src="require('../assets/Logos-Pictos/ASSECC-VF.png')"
        ></v-img>
      </v-col>
      <v-col cols="6" class="logo">
        <v-img
          alt="crabfc logo"
          class="logo-img"
          :src="require('../assets/Logos-Pictos/Logo_CRABFC-S-VF.png')"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenue sur Agr'eau Durable
        </h1>
      </v-col>
    </v-row>

    <v-row style="text-align: center">
      <v-col cols="4">
        <v-img
          :src="require('../assets/btlLait.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="4" class="mb-4">
        <v-img
          :src="require('../assets/vache.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="4">
        <v-img
          :src="require('../assets/abreuvoir.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <v-row>
      <p class="text-solution-home">Solutions et ressources en élevage face au changement climatique.</p>
    </v-row>
    <v-row>
      <p class="text-solution-home">Pour assurer performances, santé, bien-être, il est nécessaire de garantir un abreuvement suffisant et de qualité.</p>
    </v-row>
    <v-row>
      <p class="text-solution-home">Agr'eau durable est la solution qui vous permet de maîtriser votre consommation d'eau.</p>
    </v-row>

    <v-row>
      <v-col cols="12">
        <p></p>
      </v-col>
      <v-col cols="6"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {};
  },
};
</script>

<style>
.logo {
  margin: auto;
}
.logo .logo-img {
  width: 40vh;
  margin: auto;
}
.text-solution-home {
  margin: auto;
  color: #f39200;
  font-weight: bold;
}
</style>