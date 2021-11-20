<template>
    <v-container>
        <v-row>
            <v-col cols="7">
                <h1>Réduire votre consommation d'eau</h1>
                <p>Adapter votre <span class="text-important">consommation d'eau</span> à vos besoins</p>
                <p>Prévoir les <span class="text-important">risques sanitaires</span></p>
            </v-col>
            <v-col cols="5">
                <v-img
                    :src="require('../assets/Logos-Pictos/Pictos/Pictogrammes_eau.png')"
                    class="my-3"
                    contain
                    height="200"
                />
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
