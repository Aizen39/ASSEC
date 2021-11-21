<template>
  <v-app-bar app color="#1155A3" dark>
    <div class="d-flex align-center">
      
      <router-link class="rlink" to="/"><h1 id="title" >Agr'eau Durable</h1></router-link>
      
    </div>

    <v-spacer></v-spacer>

    <div class="menu">
      <router-link class="rlink" to="/dashboard"><span class="link mr-2">Tableau de bord</span></router-link>
      <router-link class="rlink" to="/formulaire"><span class="link mr-2">Mes informations</span></router-link>
      <router-link class="rlink" to="/recommendation"><span class="link mr-2">Mes recommandations</span></router-link>
      <router-link  class="rlink" to="/prevision"><span class="link mr-2">Prévisionnel</span></router-link>

    </div>

    <v-spacer></v-spacer>

    <div>
      <router-link class="rlink" to="/login">
        <span style='white-space: nowrap;' class="login mr-2">Se connecter</span
        ><span class="login mr-2">|</span></router-link
      ><router-link class="rlink" to="/register">
        <span style='white-space: nowrap;' class="login mr-2">S'enregistrer</span>
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
.link{
  font-size: 18px;
  
  color:white;
  margin-left: 20px;
}

#title{
  font-size: 32px;
  text-decoration: none;
  color:white;
  text-transform: none;
  background-color:#1255A3 ;
}


.link:hover {
   border-color: red; 
}

.rlink{
text-decoration: none;
}

</style>