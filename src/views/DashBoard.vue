<template>
  <v-layout>
    <v-flex>
      <v-row justify="center">
        <h1>
          Tableau de bord
        </h1>
      </v-row>
      <v-row justify="space-around">
        <v-col>
          <p>Effectif Total : 467</p>
        </v-col>
        <v-col>
          <p>Comsommation d'eau : 105 m3</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
        <v-img
          :src="require('../assets/Courbe1.png')"
          class="my-3"
          contain
          height="200"
        />
        <v-img
          :src="require('../assets/Analyse.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "DashBoard",
};
</script>

<style>
</style>