<template>
    <v-container>
        <v-row>
            <v-col cols="5">
                <v-img
                    :src="require('../assets/Logos-Pictos/Pictos/Pictogrammes_liste.png')"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>
            <v-col cols="7">
                <h1>Anticiper les besoins de votre exploitation</h1> 
                <p>Prévoir les périodes de <span class="text-important">sécheresse</span></p>
                <p>Analyser l'évolution de l'exploitation de <span class="text-important">vos ressources</span></p>
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