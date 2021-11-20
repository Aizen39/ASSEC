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
        <h1 class="display-2 font-weight-bold mb-3">Bienvenue sur Mon élevage</h1>
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
        <p class="subheading font-weight-regular">please join our online</p>
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

  data: () => ({}),
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