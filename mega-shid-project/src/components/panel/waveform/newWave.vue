<template>
    <div>
        <div  class="d1  border row m-0">
            <div class="col-12 col-md-4 p-0">
                <analogGauge :value="frequency" :max="1" :min="0" :step="0.01"/>
                <p class="d-inline ms-">frequency:</p>
<!--                <input type="range" style="width: 100px;"  id="customRange1" v-model="waveSpecifications.frequency">-->
                    <knob v-model="this.frequency" :max="1" :min="0" :step="0.01" value-color="#3b5998"/>

            </div>
            <div class="col-12  col-md-4 p-0">
                <analogGauge :value="domain" :max="10" :min="0" :step="0.1"/>
                <p class="d-inline ms-">domain:</p>
<!--                <input type="range" style="width: 100px"  id="customRange1" v-model="waveSpecifications.domain">-->
                <knob v-model="this.domain" :max="10" :min="0" :step="0.1" value-color="#3b5998"/>


            </div>
            <div class="col-12 col-md-4 p-0 ">
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
<!--        <chartApp :frequencyArr="waveSpecifications.frequencyArr" :domain="waveSpecifications.domainArr"/>-->
        <div ref="plot"></div>

    </div>
</template>
<script>
import Plotly from 'plotly.js-dist';
import analogGauge from "@/components/panel/waveform/analogGauge.vue";
import knob  from 'primevue/knob';
export default {
    name:"newWave",
    components:{
        analogGauge,
        knob,


    },

    data(){
        return{
            frequency:0,
            domain:0,
            frequencyArr:  [],
            domainArr:[],
            plotData: [
                {
                    x: [],
                    y: [],
                },
            ],
            plotLayout: {
                margin: { t: 0 },
            },
            waveSpecifications:{
                waveType:null

            },
        }
    },
    mounted() {
        Plotly.newPlot(this.$refs.plot, this.plotData, this.plotLayout);
    },

    watch: {
        domain(newDomain) {
            this.domainArr.push(newDomain);
            this.plotData[0].x = this.domainArr; // Update the x values of the first trace
            Plotly.update(this.$refs.plot, this.plotData, this.plotLayout);
        },
        frequency(newFrequency) {
            this.frequencyArr.push(newFrequency)
            this.plotData[0].y = this.frequencyArr; // Update the y values of the first trace
            Plotly.update(this.$refs.plot, this.plotData, this.plotLayout);
        },
    },

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
    background: rgba(76, 189, 255, 0.29);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid rgba(76, 189, 255, 0.3);
}

</style>