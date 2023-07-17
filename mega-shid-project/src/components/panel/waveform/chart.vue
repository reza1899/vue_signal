<template>
    <div>
        <div ref="plot"></div>
<!--        <input v-model="" type="range" min="40" max="80" step="1" />-->
<!--        <input v-model="" type="range" min="40" max="80" step="1" />-->
    </div>
</template>

<script>
import Plotly from 'plotly.js-dist';

export default {
    name: 'chartApp',
    props: {
        frequencyArr: {
            type: Array,
            required: true,
        },
        domainArr: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            arr: [],
            arrt: [],
            range: 1,
            rangeb: 1,
            plotData: [
                {
                    x: [],
                    y: [],
                },
            ],
            plotLayout: {
                margin: { t: 0 },
            },
        };
    },

    mounted() {
        Plotly.newPlot(this.$refs.plot, this.plotData, this.plotLayout);
    },

    watch: {
        range(newRange) {
            this.plotData[0].x = [...this.domainArr, newRange];
            console.log("arrDomain", this.domainArr);
        },
        rangeb(newRangeb) {
            this.plotData[0].y = [...this.frequencyArr, newRangeb];
            Plotly.update(this.$refs.plot, this.plotData, this.plotLayout);
            console.log("arrFre", this.frequencyArr);
        },
    },
};
</script>

<style>
</style>
