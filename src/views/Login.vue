<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-form>
        <v-card class="elevation-8">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Accéder à mon espace</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              id="email"
              required
              prepend-icon="mdi-email"
              name="email"
              label="Email"
              type="text"
            ></v-text-field>
            <v-text-field
              required
              id="password"
              prepend-icon="mdi-lock"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              :type="show1 ? 'text' : 'password'"
              name="password"
              label="Mot de passe"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" elevation="3"> Valider </v-btn>
            <!-- to="/project" -->
          </v-card-actions>
          <p class="forgotPassword text-right mt-2 mb-4">
            <router-link to="/register">Créer un compte</router-link>
            ou
            <router-link to="/forgotPassword">Mot de passe oublié ?</router-link>
          </p>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>


export default {
  name: "Login",

  data() {
    return {
        email: undefined,
        password: undefined,
        show1: false,
  }
  },
  mounted() {

  }
  
}
</script>

<style>
.v-application p.forgotPassword {
  font-size: 14px;
  padding: 8px;
  /* text-decoration: none;
  text-decoration-line: none; */
}

</style>