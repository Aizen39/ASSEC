<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-form ref="form" @submit.prevent="register">
        <v-card class="elevation-8">
          <v-toolbar dark color="#1155A3">
            <v-toolbar-title>Inscription</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row
              ><v-col>
                <v-text-field
                  prepend-icon="mdi-account"
                  required
                  :rules="[rules.login]"
                  name="nom"
                  label="Nom"
                  type="text"
                ></v-text-field> </v-col
              ><v-col>
                <v-text-field
                  required
                  :rules="[rules.login]"
                  name="prenom"
                  label="Prénom"
                  type="text"
                ></v-text-field> </v-col
            ></v-row>
            <v-text-field
              required
              :rules="[rules.login]"
              name="raison"
              label="Raison sociale"
              type="text"
            ></v-text-field>
            <v-text-field
              required
              :rules="[rules.login]"
              name="siret"
              label="Siret"
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-post"
              required
              :rules="[rules.login]"
              name="adresse"
              label="Adresse"
              type="text"
            ></v-text-field>
            <v-row
              ><v-col>
                <v-text-field
                  prepend-icon="mdi-city"
                  required
                  :rules="[rules.login]"
                  name="ville"
                  label="Ville"
                  type="text"
                ></v-text-field> </v-col
              ><v-col>
                <v-text-field
                  required
                  :rules="[rules.login]"
                  name="cp"
                  label="Code postal"
                  type="text"
                ></v-text-field> </v-col
            ></v-row>
            <v-row
              ><v-col>
                <v-text-field
                  prepend-icon="mdi-email"
                  required
                  :rules="[rules.validateEmail]"
                  name="Email"
                  label="Email"
                  type="mail"
                  v-model="email"
                ></v-text-field> </v-col
              ><v-col>
                <v-text-field
                  prepend-icon="mdi-phone"
                  required
                  :rules="[rules.login]"
                  name="telephone"
                  label="Téléphone"
                  type="text"
                ></v-text-field> </v-col
            ></v-row>
            <v-row
              ><v-col>
                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  required
                  :rules="[rules.pwd]"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  :type="show1 ? 'text' : 'password'"
                  name="password"
                  label="Mot de passe"
                  v-model="password"
                ></v-text-field> </v-col
              ><v-col>
                <v-text-field
                  id="confirmPassword"
                  prepend-icon="mdi-lock-check"
                  required
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show2 = !show2"
                  :type="show2 ? 'text' : 'password'"
                  name="confirmPassword"
                  label="Confirmer mon mot de passe"
                  v-model="confirmPassword"
                ></v-text-field> </v-col
            ></v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              dark
              type="button"
              color="#f03a47"
              elevation="3"
              @click="cleanForm()"
              
            >
              Réinitialiser
            </v-btn>
            <v-btn dark type="submit" color="#25a856" elevation="3" to="/login"> Valider </v-btn>
            <!-- to="/login" -->
          </v-card-actions>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      login: null,
      email: null,
      password: null,
      confirmPassword: null,
      show1: false,
      show2: false,
      rules: {
        login: (login) =>
          /^[\w\d\-_]+$/.test(login) ||
          "Your login name must contain only letters, numbers, _ or -",
        pwd: (pwd) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(pwd) ||
          pwd === null ||
          "At least 8 characters with one number, one lower case, one upper case, and one special character minimum",
        validateEmail: (mail) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)+([.])[a-z]{2,3}$/.test(mail) ||
          mail === null ||
          "The mail entered is not correct",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>