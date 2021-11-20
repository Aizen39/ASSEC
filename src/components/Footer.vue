<template>
  <v-footer app color="#1155A3" >
    <v-row justify="center" no-gutters>
      <v-col class="py-4 text-center white--text" cols="12">
        Created By <strong>SushiTeam</strong> ©{{ new Date().getFullYear() }} —
        All rights reserved
      </v-col>
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