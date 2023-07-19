<template>
    <div>
        <panelLayout>
            <select class="form-select w-25 m-3" v-model="nextCard" @change="addSelectedCard" multiple aria-label="Default select example">
                <option disabled value="">Open this select menu</option>
                <option v-for="(card, key) in cardInfo" :key="key" :value="card">
                    {{ card.type }}
                </option>
            </select>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col" v-for="cardKey in selectedCards" :key="cardKey">
                    <div class="card">
                        {{selectedCards.frequency}}
                        <newWave :fre="0.25" :dom="0.259"  />
                    </div>
                </div>
            </div>
        </panelLayout>
    </div>
</template>

<script>
import newWave from '@/components/panel/waveform/newWave.vue'
import panelLayout from '@/layout/userPanel.vue'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
    name: "userDashboard",
    components: {
        newWave,
        panelLayout
    },
    data() {
        return {
             cookies : {
                 cookie: ''
             },
            cardInfo: [

            ],
            selectedCards: [],
            nextCard: null
        }
    },
    created() {

        this.cookies.cookie = Cookies.get('reza@gmail.com')
        console.log(this.cookies.cookie)
        axios.post("http://192.168.1.10:3000/senddata",this.cookies).then((response) => {
            // console.log(response.data)
            this.cardInfo = response.data
            console.log(this.cardInfo)
        }).catch(  (error) => {
            console.log(error)
        })
        // console.log(this.cardInfo[0].frequency)
            },
    methods: {
        addSelectedCard() {
            console.log(this.selectedCards.frequency)
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
