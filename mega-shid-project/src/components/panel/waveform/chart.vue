<template>
    <div>
        <div ref="plot"></div>
        <input v-model="range" type="range" min="40" max="80" step="1" />
        <input v-model="rangeb" type="range" min="40" max="80" step="1" />
    </div>
</template>

<script>
import Plotly from 'plotly.js-dist';

export default {
    name: 'chartApp',
    data() {
        return {
            arr:[],
            arrt:[],
            range: 1,
            rangeb: 1,
            plotData: [
                {
                    x: [],
                    y: [],
                }
            ],
            plotLayout: {
                margin: { t: 0 }
            }
        };
    },

    mounted() {
        Plotly.newPlot(this.$refs.plot, this.plotData, this.plotLayout);
    },

    watch: {
        range(newRange) {
            this.plotData[0].x=this.arr
            // console.log(newRange);
            this.arr.push(newRange)
            console.log("arr1",this.arr)
        },
        rangeb(newRangeb) {
            this.plotData[0].y = this.arrt
            Plotly.update(this.$refs.plot, this.plotData, this.plotLayout);
            this.arrt.push(newRangeb)
            console.log("arr2",this.arrt)
        }
    }
};
</script>

<style>
</style>
