<template>
  <v-layout>
    <v-flex>
      <v-col cols="6" style="margin: auto">
        <v-card
          class="justify-center"
          style="margin: 50px; background-color: #757575; color: white"
        >
          <v-card-title class="justify-center">Tableau de bord</v-card-title>
        </v-card>
      </v-col>

      <v-row>
        <v-col cols="4" style="margin:auto; text-align:center;">
          <h3>Sélectionner une période</h3>
        </v-col>
      </v-row>
      <v-row>
        
       <v-col cols="3"></v-col>
        <v-col cols="3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Date de début"
                placeholder="(JJ/MM/AAAA)"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-spacer></v-spacer>
        <v-col cols="3">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Date de fin"
                placeholder="(JJ/MM/AAAA)"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>

      <!-- <v-row justify="space-around">
        <v-col>
          <p>Effectif Total : 467</p>
        </v-col>
        <v-col>
          <p>Comsommation d'eau : 105 m3</p>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="6">
          <v-card
            elevation="2"
            shaped
            class="vcard"
            style="width: 60%; margin-left: 35%"
          >
            <v-toolbar color="#f39200">
              <v-card-title style="color: black"
                >Volume d'eau à optimiser : 980m3</v-card-title
              >
            </v-toolbar>

            <v-card-subtitle>
              <p>Réglementation déclaration fonction des prélèvements</p>
              <p>Filtration et traitement obligatoire</p>
              <p>Vigilance sanitaire</p>
            </v-card-subtitle>

            <v-row justify="center">
              <v-dialog v-model="analyse" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="#25a856" dark v-bind="attrs" v-on="on">
                    En savoir plus
                  </v-btn>
                </template>
                <v-card>
                  <v-container>
                    <v-img
                      :src="require('../assets/Analyse_.png')"
                      class="my-3"
                      contain
                      height="200%"
                    />
                  </v-container>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="analyse = false">
                      Close
                    </v-btn>
                    <!-- <v-btn color="blue darken-1" text @click="dialog = false">
                      Save
                    </v-btn> -->
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-card>

          
        </v-col>

        <v-col cols="6">
          <v-card
            elevation="2"
            shaped
            class="vcard"
            style="width: 60%; margin-right: 30%"
          >
            <v-toolbar color="#f39200">
              <v-card-title style="color: black">
                Moyenne matière sèche ingérée / Eau bue par vache et par jour :
                21kg / 55L
              </v-card-title>
            </v-toolbar>
            <v-card-subtitle>
              <p>Surveillance propreté</p>
              <p>Zone pas ou peu électromagnétisme</p>
              <p>Température de l'eau inférieur à 15°C</p>
            </v-card-subtitle>
            <v-row justify="center">
              <v-dialog v-model="courbe" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="#25a856" dark v-bind="attrs" v-on="on">
                    En savoir plus
                  </v-btn>
                </template>
                <v-card>
                  <v-container>
                    <v-img
                      :src="require('../assets/graphique.png')"
                      class="my-3"
                      contain
                      height="200%"
                    />
                  </v-container>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="courbe = false">
                      Close
                    </v-btn>
                    <!-- <v-btn color="blue darken-1" text @click="dialog = false">
                      Save
                    </v-btn> -->
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "DashBoard",

  data: () => ({
    analyse: false,
    courbe: false,
    mdr: false,
    activePicker: null,
    date: null,
    menu: false,
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>

<style>
</style>