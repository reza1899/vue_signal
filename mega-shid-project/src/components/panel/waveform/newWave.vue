<template>
    <div>
        <div class="d1 border row m-0">
            <div class="col-12 col-md-4 p-0">
                <analogGauge :value="this.frequency" :max="1" :min="0" :step="0.01" />
                <p class="d-inline ms-">frequency:</p>
                <knob v-model="this.frequency" :max="1" :min="0" :step="0.01" value-color="#3b5998" />
            </div>
            <div class="col-12 col-md-4 p-0">
                <analogGauge :value="this.domain" :max="10" :min="0" :step="0.1" />
                <p class="d-inline ms-">domain:</p>
                <knob v-model="this.domain" :max="10" :min="0" :step="0.1" value-color="#3b5998" />
            </div>
            <div class="col-12 col-md-4 p-0">
                <div style="margin: 20%">
                    <div class="form-floating">
                        <select v-model="waveSpecifications.waveType" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option value="1">Sinusoidal</option>
                            <option value="2">Square</option>
                            <option value="3">Triangular</option>
                        </select>
                        <label for="floatingSelect">Select Wave Type</label>
                    </div>
                    <div class="card flex justify-content-center">
                    </div>
                    {{ waveSpecifications.waveType }}
                </div>
            </div>
        </div>
        <div ref="plot"></div>
    </div>
</template>

<script>
import Plotly from 'plotly.js-dist';
import analogGauge from "@/components/panel/waveform/analogGauge.vue";
import knob from 'primevue/knob';
// import axios from 'axios';
// import Cookies from "js-cookie";
export default {
    name: "newWave",
    components: {
        analogGauge,
        knob,
    },
    props: {
        fre: {
            type: Number,
            required: true
        },
        dom: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            messages :[],
            cookies: {
                cookie: '',
            },
            frequency: this.$props.fre,
            domain: this.$props.dom,
            frequencyArr: [],
            domainArr: [],
            plotData: [{
                x: [],
                y: [],
            }],
            plotLayout: {
                margin: { t: 0 },
            },
            waveSpecifications: {
                waveType: null
            },
        }
    },
    created() {
        // this.cookies.cookie = Cookies.get('reza@gmail.com')
        // axios.post("http://192.168.1.10:3000/mic1/send", this.cookies).then((response) => {
        //     console.log("this is response of mic1",response)
        // }).catch((error) => {
        //     console.log(error)
        // })
        // axios.get("http://192.168.1.10:5000").then((response) => {
        //     console.log("this is response of port 5000",response)
        // }).catch((error) => {
        //     console.log(error)
        // })
    },
    mounted() {
       const eventSource = new EventSource("");
       eventSource.addEventListener('message', (event) => {
           const data = JSON.parse(event.data);
           this.messages.push(data.message)
       })
        Plotly.newPlot(this.$refs.plot, this.plotData, this.plotLayout);
        // setInterval(() => {
        //     this.domainArr.push(this.domainArr.length + 1);
        //     this.plotData[0].x = this.domainArr; // Update the x values of the first trace
        //     Plotly.update(this.$refs.plot, this.plotData, this.plotLayout);
        // }, 1000);
    },
    watch: {
        // domain(newDomain) {
        //     this.domainArr.push(newDomain);
        //     this.plotData[0].x = this.domainArr; // Update the x values of the first trace
        //     Plotly.update(this.$refs.plot, this.plotData, this.plotLayout);
        // },
        frequency(newFrequency) {
            this.frequencyArr.push(newFrequency);
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

.d1 {
    background: rgba(76, 189, 255, 0.29);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid rgba(76, 189, 255, 0.3);
}
</style>
