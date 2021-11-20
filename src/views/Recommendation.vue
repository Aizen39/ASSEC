<template>
    <div>
        <TypeRessourceReco/>
        <VigilanceReco />
        <DisponibiliteReco />
        <SanitaireReco />
        <ClimatReco />
    </div>
</template>

<script>
import TypeRessourceReco from '../components/typeRessourceReco.vue'
import VigilanceReco from '../components/vigilanceReco.vue'
import DisponibiliteReco from '../components/disponibiliteReco.vue'
import SanitaireReco from '../components/sanitaireReco.vue'
import ClimatReco from '../components/climatReco.vue'

export default ({
    name: 'Recommendation',
    components: {
        TypeRessourceReco,
        VigilanceReco,
        DisponibiliteReco,
        SanitaireReco,
        ClimatReco
    },
    data: () => ({

    })
})
</script>

<style>

</style>
