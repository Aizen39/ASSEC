<template>
  <v-layout class="formulaire_evaluation" justify-center>
    <v-flex>
      <v-form>
        <v-text-field
          v-model="name"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          label="Item"
          required
        ></v-select>
        <v-checkbox
          v-model="checkbox"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-text-field
          label="Outlined"
          placeholder="Placeholder"
          outlined
        ></v-text-field>

        <v-btn class="mr-4" @click="submit" to="/dashboard"> Valider </v-btn>
        <v-btn @click="clear"> Réinitialiser </v-btn>
      </v-form>
    </v-flex>
  </v-layout>

  
</template>

<script>
export default {
  name: "form",

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>

<script>
export default {};
</script>

<style>
.formulaire_evaluation{
  width: 10px;
  height: 10px;
}
</style>