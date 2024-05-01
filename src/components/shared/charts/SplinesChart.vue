<script lang="ts" setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)
const data = {
  labels: ['Dec', 'Jan', 'Feb', 'Mar', 'May', 'Jun'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40],
      borderColor: '#3ded97',
      pointStyle: 'circle',
      radius: 0
    },
    {
      label: 'Data two',
      backgroundColor: 'blue',
      data: [30, 59, 20, 20, 69, 30, 90],
      borderColor: 'blue',
      pointStyle: 'circle',
      radius: 0
    }
  ]
}
const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.4,
  scales: {
    x: {
      ticks: {
        color: 'rgb(156 163 175)'
      },
      border: {
        color: 'transparent'
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false
      },
      ticks: {
        color: 'rgb(156 163 175)'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}
</script>

<template>
  <div class="bg-white h-[340px] rounded-xl p-4 pt-6">
    <Line :data="data" :options="options" />
  </div>
</template>
