<template>
  <v-layout class="formstyle" align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-form ref="form" @submit="veriform">
        <v-card class="elevation-8">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Formulaire d'évaluation</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-autocomplete
              class="stade"
              v-model="stadeModel"
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
              v-model="poidsModel"
              label="Poids animal"
              suffix="kg"
              counter
              maxlength="3"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              class="prodLait"
              v-model="prodModel"
              label="Objectifs de production laitière"
              outlined
              dense
            ></v-text-field>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">

                  <v-text-field
                    v-model="champModel"
                    label="Nombre de jours au champ"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">

                  <v-text-field
                    label="Nombre de jours en bâtiment"
                    v-model="batModel"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-text-field
              label="Proportion de fourrage"
              v-model="fourrageModel"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              label="Matière sèche ingérée"
              v-model="secheingereeModel"
              outlined
              dense
            ></v-text-field>

            <v-text-field
        
              label="Pourcentage matière sèche dans la ration"
              v-model="matieresecheModel"
              suffix="%"
              outlined
              dense
            ></v-text-field>

            <v-text-field
            
              :rules="[rules.required, rules.temp]"
              label="Température extérieure"
              suffix="°C"
              outlined
              dense
            ></v-text-field>

            <div class="text-center">
              <v-btn @click="submit" color="success" dark> VISUALISER </v-btn>
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
      temp: (value) =>
        value < 25 || "La température ne doit pas être supérieure 25°C",
    },
    
    stadeModel: '',
    poidsModel:'',
    prodModel:'',
    champModel:'',
    batModel:'',
    fourrageModel:'',
    secheingereeModel:'',
    matieresecheModel:'',

  }),

  methods: {
      veriform(){
        if(this.stadeModel == '' || this.poidsModel == '' || this.prodModel == ''|| this.champModel== '' || this.batModel=='' || this.fourrageModel=='' || this.secheingereeModel=='' || this.matieresecheModel==''){
          alert('un champs non rempli');
        }
      }
    },
};
</script>

<style>
.stade {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.formstyle {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>