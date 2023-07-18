<template>
    <div>
        <svg viewBox="0 0 100 100" width="5cm" height="5cm">
            <circle cx="50" cy="50" r="45" fill="#e3f2fd" />
            <path
                style="fill:none;stroke:#3b5998;stroke-width:2.5"
                    :d="gaugePath"
                    fill="#3b5998"
                    stroke="#333"
                    stroke-width="2.5"
            />
            <polygon
                    :points="needlePoints"
                    fill="#3b5998"
            />

            <!-- Graded numbers -->
            <text
                    style="font-size: 8px"
                    v-for="(number, index) in numbers"
                    :key="index"
                    :x="number.x"
                    :y="number.y"
                    text-anchor="middle"
                    alignment-baseline="central"
            >
                {{ number.value }}
            </text>
        </svg>
    </div>
</template>

<script>
export default {
    name: "AnalogGauge",
    props: {
        value: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        }
    },
    computed: {
        gaugePath() {
            const startAngle = -Math.PI * 0.8;
            const endAngle = -startAngle;
            const valueAngle =
                startAngle +
                ((this.value - this.min) / (this.max - this.min)) *
                (endAngle - startAngle);
            const startX = 50 + 40 * Math.cos(startAngle);
            const startY = 50 + 40 * Math.sin(startAngle);
            const endX = 50 + 40 * Math.cos(valueAngle);
            const endY = 50 + 40 * Math.sin(valueAngle);
            const largeArcFlag = valueAngle - startAngle <= Math.PI ? 0 : 1;
            return `M ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY}`;
        },
        needlePoints() {
            const angle =
                -Math.PI * 0.8 +
                ((this.value - this.min) / (this.max - this.min)) * Math.PI * 1.6;
            const tipX = 50 + 40 * Math.cos(angle);
            const tipY = 50 + 40 * Math.sin(angle);
            const leftX = 50 + 5 * Math.cos(angle - Math.PI / 2);
            const leftY = 50 + 5 * Math.sin(angle - Math.PI / 2);
            const rightX = 50 + 5 * Math.cos(angle + Math.PI / 2);
            const rightY = 50 + 5 * Math.sin(angle + Math.PI / 2);
            return `${leftX},${leftY} ${tipX},${tipY} ${rightX},${rightY}`;
        },
        numbers() {
            // Add this computed property to calculate the positions of the numbers
            const startAngle = -Math.PI * 0.8;
            const endAngle = -startAngle;
            const range = this.max - this.min;
            const step = range / (this.max/1); // Change this to control how many numbers are displayed
            const radius = 35; // Change this to control the distance of the numbers from the center
            const numbers = [];
            for (let i = this.min; i <= this.max; i += step) {
                const valueAngle =
                    startAngle +
                    ((i - this.min) / range) *
                    (endAngle - startAngle);
                const x = 50 + radius * Math.cos(valueAngle);
                const y = 50 + radius * Math.sin(valueAngle);
                numbers.push({ value: i, x, y });
            }
            return numbers;
        }
    }
};
</script>
<style>

</style>