<template>
  <v-footer app color="primary" dark padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
        href="/"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      links: ["Page d'accueil", "Tableau de bord", "Mes recommandations",  "Prévisions été"],
      }
  },
};
</script>

<style>
</style>

<style>

</style>