<template>
    <div>
        <panelLayout>
            <select class="form-select w-25 m-3" v-model="nextCard" @change="addSelectedCard" multiple aria-label="Default select example">
                <option disabled value="">Open this select menu</option>
                <option v-for="(card, key) in cardInfo" :key="key" :value="key">
                    {{ card.name }}
                </option>
            </select>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col" v-for="cardKey in selectedCards" :key="cardKey">
                    <div class="card">
                       
                        <newWave />
                    </div>
                </div>
            </div>
        </panelLayout>
    </div>
</template>

<script>
import newWave from '@/components/panel/waveform/newWave.vue'
import panelLayout from '@/layout/userPanel.vue'

export default {
    name: "userDashboard",
    components: {
        newWave,
        panelLayout
    },
    data() {
        return {
            cardInfo: {
                card1: {
                    name: "reza",
                    id: 5
                },
                card2: {
                    name: "reza",
                    id: 3
                },
                card3: {
                    name: "reza",
                    id: 9
                },
            },
            selectedCards: [],
            nextCard: null
        }
    },
    methods: {
        addSelectedCard() {
            console.log(this.nextCard)
            if (this.nextCard && this.selectedCards.length < 3) {
                this.selectedCards.push(this.nextCard);
            }
            this.nextCard = null; // Reset the nextCard value
        }
    }
}
</script>

<style scoped>

</style>
