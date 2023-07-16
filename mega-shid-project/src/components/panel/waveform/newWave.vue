<template>
    <div>
        <div  class="d1  border row m-0">
            <div class="col-12 col-md-5 p-0">
                <analogGauge :value="waveSpecifications.frequency"/>
                <p class="d-inline ms-">frequency:</p>
<!--                <input type="range" style="width: 100px;"  id="customRange1" v-model="waveSpecifications.frequency">-->
                    <knob v-model="waveSpecifications.frequency" value-color="#3b5998"/>
                <div class="gauge">
                    <div class="gauge__value">{{ waveSpecifications.frequency }}</div>
                </div>
            </div>
            <div class="col-12  col-md-5 p-0">
                <analogGauge :value="waveSpecifications.domain"/>
                <p class="d-inline ms-">domain:</p>
<!--                <input type="range" style="width: 100px"  id="customRange1" v-model="waveSpecifications.domain">-->
                <knob v-model="waveSpecifications.domain" value-color="#3b5998"/>

                <div class="gauge">
                    <div class="gauge__value">{{ waveSpecifications.domain }}</div>
                </div>
            </div>
            <div class="col-12 col-md-2 p-0 ">
                <div style="margin: 20%">
                    <div class="form-floating">
                        <select v-model="waveSpecifications.waveType" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option value="1">Sinusoidal</option>
                            <option value="2">Square</option>
                            <option value="3">Triangular</option>
                        </select>
                        <label for="floatingSelect">select Wave Type</label>
                    </div>
                    <div class="card flex justify-content-center">
                    </div>
                    {{this.waveSpecifications.waveType}}
                </div>
            </div>
        </div>
        <chartApp :frequencyArr="waveSpecifications.frequencyArr" :domain="waveSpecifications.domainArr"/>
    </div>
</template>
<script>
import chartApp from "@/components/panel/waveform/chart.vue";
import analogGauge from "@/components/panel/waveform/analogGauge.vue";
import knob  from 'primevue/knob';
export default {
    name:"waveForm",
    components:{
        analogGauge,
        chartApp,
        knob,


    },

    data(){
        return{
            waveSpecifications:{
                frequency:0,
                domain:0,
                frequencyArr:  [],
                domainArr:[],
                waveType:null

            },
        }
    },
    mounted() {
        // Generate the frequency and domain arrays
        this.generateArrays();
    },
    methods: {
        generateArrays() {
            // Generate the frequency array
            this.frequencyArr = Array.from({ length: this.frequency }, (_, i) => i + 1);

            // Generate the domain array
            this.domainArr = Array.from({ length: this.domain }, (_, i) => i + 1);
        }
    },
    watch: {
        frequency() {
            // Regenerate the arrays when the frequency or domain value changes
            this.generateArrays();
        },
        domain() {
            // Regenerate the arrays when the frequency or domain value changes
            this.generateArrays();
        }
    }
}
</script>

<style scoped>
input[type=range] {
    direction: rtl;
}
.gauge {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.gauge__value {
    font-size: 24px;
}
.d1{
    /* From https://css.glass */
    background: rgba(76, 189, 255, 0.29);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid rgba(76, 189, 255, 0.3);
}

</style>