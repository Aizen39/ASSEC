<template>
    <v-container>
        <v-row>
            <v-col cols="5">
                <v-img
                    :src="require('../assets/Logos-Pictos/Pictos/Pictogrammes_veau.png')"
                    class="my-3"
                    contain
                    height="200"
                />

            </v-col>
            <v-col cols="7">
                <h1>Prendre soin de votre élevage</h1>
                <p>Viser <span class="text-important">la satisfaction</span> des besoins de vos animaux</p>
                <p>Assurer <span class="text-important">une qualité d'eau</span> comforme aux exigences sanitaires</p>
                <p>Optimiser votre <span class="text-important">production</span></p>
            </v-col>
        </v-row>
        
    </v-container>
    
</template>

<script>

export default ({
   
      
})
</script>

<style>
.text-important{
    color: #f39200;
    font-weight: bold;
}
</style>