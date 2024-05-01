<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      backgroundColor: 'white',
      data: [900, 700, 400, 1000, 800]
    }
  ]
}
const options = {
  responsive: true,
  maintainAspectRatio: false,
  barThickness: 5,
  borderRadius: 5,
  borderSkipped: false,
  tension: 0.4,
  scales: {
    x: {
      grid: {
        drawOnChartArea: false
      },
      ticks: {
        color: '#fff'
      }
    },
    y: {
      grid: {
        color: '#ffffff33'
      },
      border: {
        display: false,

        dash: [5, 5]
      },
      ticks: {
        color: '#fff'
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
  <div class="bg-primary-500 h-[340px] rounded-xl p-4 pt-6">
    <div class="h-[200px]">
      <Bar :data="data" :options="options" />
    </div>
    <div class="text-white mt-10">
      <h4 class="h4-semibold">New Users</h4>
      <div class="mt-2"><span class="font-bold">(+23%) </span>than last week</div>
    </div>
  </div>
</template>
