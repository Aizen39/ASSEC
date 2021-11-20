<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-form ref="form" @submit.prevent="register">
        <v-card class="elevation-8">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Formulaire d'évaluation</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-autocomplete
              class="stade"
              v-model="values"
              :items="items"
              outlined
              dense
              chips
              small-chips
              label="Stade physiologique"
              multiple
            ></v-autocomplete>
            <v-text-field
              class="poidsAnimal"
              label="Poids animal"
              suffix="kg"
              counter
              maxlength="3"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              class="prodLait"
              label="Objectifs de production laitière"
              outlined
              dense
            ></v-text-field>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="first"
                    label="Nombre de jours au champ"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Nombre de jours en bâtiment"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-text-field
              label="Proportion de fourrage"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Matière sèche ingérée"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Pourcentage matière sèche dans la ration"
              suffix="%"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="temp"
              :rules="[rules.required, rules.temp]"
              label="Température extérieure"
              suffix="°C"
              outlined
              dense
            ></v-text-field>
            <div class="text-center">
            <v-btn
              x-large
              color="success"
              dark
              
            >
              VISUALISER
            </v-btn>
          </div>
          </v-card-text>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: ["1", "2", "3", "4"],
    values: ["2-4 mois", "Phase pré-pubère", "Phase post-pubère", "Gestation"],
    rules: {
      required: (value) => !!value || "Required.",
      temp: (value) => value < 25 || "La températoire ne doit pas excéder 25°C",
    },
  }),
};
</script>

<style>
.stade {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>