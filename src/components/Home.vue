<template>
  <v-container>

    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/vache.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <v-row style="text-align: center;">
      <v-col cols="12" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Bienvenue sur Mon élevage</h1>


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


</style>