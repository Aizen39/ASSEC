<template>
  <div>
    <section>
        <v-row>
            <h1 class="h1-style">Eaux de profondeur :</h1>
        </v-row>
        <v-row>
            <v-col class="style-text" cols="12">
                <h2>Forages</h2>
                <p>
                Les prélèvements d'eau peuvent être des points d'entrées de
                pollutions de la nappe et exercent une pression non négligeable
                sur la ressource en réduisant notamment les débit des petits cours
                d'eau situés en aval, des sources et autres captages existants.
                </p>
                <p>
                Les pompages doivent être cohérents avec la ressource notamment
                réglementations encardent la création et l'utilisation de ces
                ouvrages.
                </p>
            </v-col>
            <v-col class="style-text" cols="12">
                <h2>réglementation</h2>
                <p>
                Si Prélèvement &lt; 1000 m3/an, le forage est déclaré en mairie
                <br />Si le prélèvement &gt; 1000 m3 : déclaration auprès de la
                police de l'eau <br />Si profondeu &gt; 10m déclaration
                obligatoire à la DREAL
                </p>
            </v-col>
            <v-col class="style-text" cols="12">
                <h2>Problèmes sanitaires</h2>
                <p>
                fer et manganèse <br />
                conseil : une analyse par an et un traitement
                </p>
            </v-col>
            <v-col class="style-text" cols="12">
                <h2>Dispositifs d'aide</h2>
                <p>
                Possible dans PCAE BOURGOGNE! <br />Dispositif de traitement
                finançable
                </p>
            </v-col>
        </v-row>
    </section>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {};
</script>

<style>
.h1-style{
    font-size: 3em;
    color: #1155a3;
    margin: auto; 
    margin-top: 5%;
}
.style-text h2{
    font-size: 2em;
    color: #f39200;
}
.style-text{
    padding-top: 2%; 
    padding-bottom: 2%; 
    padding-left: 15%; 
    padding-right: 15%
}
</style>