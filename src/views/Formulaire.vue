<template>
  <v-layout class="formstyle" align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-form ref="form" @submit="veriform">
        <v-card class="elevation-8">
          <v-toolbar dark color="#1155A3">
            <v-toolbar-title>Formulaire d'évaluation</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            

            <v-row>
              <v-container>
      
                <v-col cols="1" sm="6">
                  <h1>Période</h1>
                </v-col>
              
            </v-container>
              <v-col cols="4" sm="6" md="4">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
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
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>

              <v-spacer></v-spacer>
              <v-col cols="7" sm="6" md="4">
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
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <h1>Élevage</h1>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="champModel"
                    label="Vaches"
                    placeholder="Veuillez tapez le nombre"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Taureaux et génisses > 2 ans"
                    placeholder="Veuillez tapez le nombre"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Génisses entre 1 et 2 ans"
                    placeholder="Veuillez tapez le nombre"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Femelles inférieur à 12 mois"
                    placeholder="Veuillez tapez le nombre"
                    v-model="batModel"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Veaux"
                    placeholder="Veuillez tapez le nombre"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Poids moyen"
                    placeholder="Veuillez tapez le nombre"
                    suffix="kg"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Nombre de jours au champs"
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

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <h1>Alimentation</h1>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Proportion de fourrage"
                    placeholder="Veuillez saisir un nombre"
                    suffix="%"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Matière sèche ingérée"
                    suffix="kg"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Matière sèche ration humide"
                    placeholder="Veuillez saisir un nombre"
                    suffix="%"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Matière sèche ration fourrage sec"
                    suffix="%"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Matière sèche ration pâture"
                    placeholder="Veuillez saisir un nombre"
                    suffix="%"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <h1>Exploitation</h1>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Superfice du terrain"
                    suffix="ha"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Superficie des toits"
                    suffix="m2"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>

                <v-radio-group v-model="row" row>
                  <v-col cols="12" style="text-align: center">
                    <v-checkbox
                      class="quanti"
                      v-model="bio"
                      label="Agriculture biologique"
                      color="success"
                      value="success"
                      hide-details
                    ></v-checkbox>
                  </v-col>
                </v-radio-group>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <h1>Type de ressources</h1>
                </v-col>
              </v-row>
            </v-container>

            <v-card flat>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="4" md="4">
                      <v-checkbox
                        class="quanti"
                        v-model="textarea"
                        label="Récupération eaux de pluie"
                        color="success"
                        hide-details
                      ></v-checkbox>

                      <v-text-field
                        class="quantity"
                        v-if="textarea"
                        label="Quantité"
                        suffix="m3"
                        dense
                      ></v-text-field>

                      <v-checkbox
                        class="quanti"
                        v-model="eauprofond"
                        label="Eaux de profondeur: puits, forages, sources"
                        color="success"
                        value="success"
                        hide-details
                      ></v-checkbox>

                      <v-text-field
                        class="quantity"
                        v-if="eauprofond"
                        label="Quantité"
                        suffix="m3"
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                      <v-checkbox
                        class="quanti"
                        v-model="captage"
                        label="Captages de sources et prélèvements cours d'eau"
                        color="#25a856"
                        value="success"
                        hide-details
                      ></v-checkbox>

                      <v-text-field
                        class="quantity"
                        v-if="captage"
                        label="Quantité"
                        suffix="m3"
                        dense
                      ></v-text-field>

                      <v-checkbox
                        class="quanti"
                        v-model="retenues"
                        label="Retenues"
                        color="success"
                        value="success"
                        hide-details
                      ></v-checkbox>

                      <v-text-field
                        class="quantity"
                        v-if="retenues"
                        label="Quantité"
                        suffix="m3"
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                      <v-checkbox
                        class="quanti"
                        v-model="EAP"
                        label="Prélèvements sur réseau eau potable"
                        color="success"
                        value="success"
                        hide-details
                      ></v-checkbox>

                      <v-text-field
                        class="quantity"
                        v-if="EAP"
                        label="Quantité"
                        suffix="m3"
                        dense
                      ></v-text-field>

                      <v-checkbox
                        class="quanti"
                        v-model="etangs"
                        label="Eaux stagnantes, mares et étangs"
                        color="success"
                        value="success"
                        hide-details
                      ></v-checkbox>

                      <v-text-field
                        class="quantity"
                        v-if="etangs"
                        label="Quantité"
                        suffix="m3"
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <h2>Production journalière moyenne :</h2>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field outlined dense suffix="L/jour"> </v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <div class="text-center">
              <v-btn @click="submit" color="#25a856" dark> Enregistrer </v-btn>
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

    menu1: false,
    menu2: false,
    textarea: false,
    eauprofond: false,
    captage: false,
    retenues: false,
    EAP: false,
    etangs: false,
    stadeModel: "",
    poidsModel: "",
    prodModel: "",
    champModel: "",
    batModel: "",
    fourrageModel: "",
    secheingereeModel: "",
    matieresecheModel: "",
  }),

  date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10),
  menu: false,
  modal: false,
  menu2: false,

  // methods: {
  //     veriform(){
  //       if(this.stadeModel == '' || this.poidsModel == '' || this.prodModel == ''|| this.champModel== '' || this.batModel=='' || this.fourrageModel=='' || this.secheingereeModel=='' || this.matieresecheModel==''){
  //         alert('un champs non rempli');
  //       }
  //     }
  //   },
};
</script>

<style>
.stade {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.formstyle {
  margin-bottom: 80px;
}

.quanti {
  margin-bottom: 10px;
}
</style>