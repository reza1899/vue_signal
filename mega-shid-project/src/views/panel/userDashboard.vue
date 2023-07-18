<template>
    <div>
        <panelLayout>
<!--            <div class="container">-->
<!--                <div class="row">-->
<!--                    <div class="col-md-6">-->
<!--                        <newWave :value="82"></newWave>-->
<!--                    </div>-->
<!--                    <div class="col-md-6">-->
<!--                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            <select class="form-select w-25 m-3" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col"
                     v-for="card in cardInfo"
                     :key="card.id"
                >
                    <div class="card">
                        <img src="#" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{card.name}}</h5>
                            <p class="card-text">{{card.id}}</p>
                        </div>
                    </div>
                </div>

            </div>
        </panelLayout>
    </div>
</template>

<script>
// import axios from "axios";
// import newWave from '@/components/panel/waveform/newWave.vue'
import panelLayout from '@/layout/userPanel.vue'

export default {
    name: "userDashboard",
    data() {
        return {
            cardInfo: {
                card1 :  {
                    name: "reza",
                    id : null
                },
                card2 :  {
                    name: "reza",
                    id : null
                },
                card3 :  {
                    name: "reza",
                    id : null
                },
            }

        }
    },
    // created() {
    //         axios.get("").then ( (res) => {
    //             console.log(res)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // },
    components: {
        // newWave,
        panelLayout
    },
}
</script>

<style scoped>

</style>
