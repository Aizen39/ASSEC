<template>
    <v-container>
        <v-row>
            <v-col cols="7">
                <h1>Evaluer vos ressources en eau disponible</h1> 
                <p><span class="text-important">Optimiser l'exploitation</span> de vos ressources</p>
                <p>Choisir des <span class="text-important">systèmes appropriés</span></p>

            </v-col>
            <v-col cols="5">
                <v-img
                    :src="require('../assets/Logos-Pictos/Pictos/Pictogrammes_nuage.png')"
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