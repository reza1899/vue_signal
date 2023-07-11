<template>
    <div>
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    name:"chartApp",
    data() {
        return {
            myChart: null,
            dadash: 30,
            reza: [20,25,26,24],
        }
    },

    mounted() {
        const ctx = document.getElementById('myChart');
        const domain = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        const data = {
            labels: domain,
            datasets: [{
                label: 'My First Dataset',
                data: this.reza,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 1
            }]
        };
        this.myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

    },
    props: {
        frequencyArr:Array,
    },
    computed: {
        waveSpecifications() {
            return {
                frequency: this.frequency,
                domain: this.domain,
                waveType: this.waveType
            }
        }
    },
    }
</script>
<style>

</style>
