<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="logo">
        <v-img alt="assecc logo" class="logo-img" :src="require('../assets/Logos-Pictos/ASSECC-VF.png')"></v-img>
      </v-col>
      <v-col cols="6" class="logo">
        <v-img alt="crabfc logo" class="logo-img" :src="require('../assets/Logos-Pictos/Logo_CRABFC-S-VF.png')"></v-img>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">Bienvenue sur Agr'eau Durable</h1>
      </v-col>
    </v-row>

    <v-row style="text-align: center;">
      <v-col cols="12" class="mb-4">
        <v-img
          :src="require('../assets/vache.jpg')"
          class="my-3"
          contain
          height="200"
        />
        <p class="subheading font-weight-regular">Solutions et ressources en élevage face au changement climatique.</p>
        <p class="subheading font-weight-regular">Pour assurer performances, santé, bien-être, il est nécessaire de garantir un abreuvement suffisant</p>
        <p class="subheading font-weight-regular">et de qualité. Agr'eau durable est la solution qui vous permet de maîtriser votre consommation d'eau.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <p></p>
      </v-col>
      <v-col cols="6">
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data(){
    return{

    }
  },
};
</script>

<style>
.logo{
  margin: auto;
}
.logo .logo-img{
  width: 40vh;
  margin: auto;
}
</style>