<script setup lang="ts">
import ClockIcon from '@/components/icons/ClockIcon.vue'
import DoubleCheck from '@/components/icons/DoubleCheck.vue'
import UsersIcon from '@/components/icons/UsersIcon.vue'
import TreasureBox from '@/components/icons/TreasureBox.vue'
import StatcardComponent from '@/components/shared/cards/StatcardComponent.vue'
// defineProps<{}>()

interface AppRequest {
  title: number
  subtitle: string
  footer: {
    percentage: number
    period: string
  }
}

const appRequest: AppRequest[] = [
  {
    title: 1478286,
    subtitle: 'pending requests',
    footer: {
      percentage: 4.07,
      period: 'last month'
    }
  },
  {
    title: 478520,
    subtitle: 'approved requests',
    footer: {
      percentage: 0.24,
      period: 'last month'
    }
  },
  {
    title: 154872,
    subtitle: 'total agents',
    footer: {
      percentage: 1.64,
      period: 'last month'
    }
  },
  {
    title: 167,
    subtitle: 'total user',
    footer: {
      percentage: 0.0,
      period: 'last month'
    }
  }
]
</script>

<template>
  <div class="bg-gray-100 w-full">
    <div class="flex gap-6 pt-6 px-4 flex-wrap justify-center">
      <div class="" v-for="item of appRequest" :key="item.title">
        <StatcardComponent :item="item">
          <template #main-icon>
            <ClockIcon v-if="item.subtitle === 'pending requests'" />
            <DoubleCheck v-else-if="item.subtitle === 'approved requests'" />
            <UsersIcon v-else-if="item.subtitle === 'total user'" />
            <TreasureBox v-else />
          </template>
          <template #footer-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="vector-effect: non-scaling-stroke"
              stroke="null"
              viewBox="209.06 323.52 49.51 34.06"
              width="15"
              :class="item.subtitle === 'total user' ? 'text-yellow-500' : 'text-green-400'"
              v-if="item.subtitle !== 'total agents'"
            >
              <g stroke="null">
                <title stroke="null">Layer 1</title>
                <g id="svg_56">
                  <line
                    stroke-width="6"
                    id="svg_43"
                    y2="339.58287"
                    x2="231.05552"
                    y1="354.58287"
                    x1="212.05552"
                    stroke="currentColor"
                    fill="none"
                  ></line>
                  <path
                    id="svg_45"
                    d="m227.51126,339.16691l9,8"
                    opacity="undefined"
                    stroke-width="5"
                    stroke="currentColor"
                    fill="none"
                  ></path>
                  <line
                    stroke-width="5"
                    id="svg_46"
                    y2="332.05162"
                    x2="252.44546"
                    y1="347.05162"
                    x1="233.44546"
                    stroke="currentColor"
                    fill="none"
                  ></line>
                  <g id="svg_55">
                    <path
                      transform="rotate(-6 254.622 335.873)"
                      id="svg_52"
                      d="m254.96546,328.37266l-0.6875,15"
                      opacity="undefined"
                      stroke-width="5"
                      stroke="currentColor"
                      fill="none"
                    ></path>
                    <path
                      transform="rotate(12 247.651 328.277)"
                      stroke-width="5"
                      id="svg_53"
                      d="m256.15082,328.77677l-17,-1"
                      opacity="undefined"
                      stroke="currentColor"
                      fill="none"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="vector-effect: non-scaling-stroke"
              stroke="null"
              class="text-red-500"
              v-else
              viewBox="198.5 307.62 36.84 30.89"
              width="15"
            >
              <g stroke="null">
                <title stroke="null">Layer 1</title>
                <g stroke="null" id="svg_57">
                  <line
                    stroke="currentColor"
                    stroke-width="6"
                    id="svg_43"
                    y2="333.6228"
                    x2="227.99983"
                    y1="319.07389"
                    x1="216.10662"
                    fill="none"
                  ></line>
                  <path
                    stroke="currentColor"
                    id="svg_45"
                    d="m219.39649,318.81802l-8.90778,6.39784"
                    opacity="undefined"
                    stroke-width="5"
                    fill="none"
                  ></path>
                  <line
                    stroke="currentColor"
                    stroke-width="5"
                    id="svg_46"
                    y2="325.08426"
                    x2="213.18972"
                    y1="310.11847"
                    x1="201.00103"
                    fill="none"
                  ></line>
                  <g stroke="null" id="svg_55">
                    <path
                      stroke="currentColor"
                      id="svg_52"
                      d="m230.87161,334.94155l-12.54769,0.56242"
                      opacity="undefined"
                      stroke-width="5"
                      fill="none"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="5"
                      id="svg_53"
                      d="m229.06744,336.01114l3.77748,-10.44493"
                      opacity="undefined"
                      fill="none"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </template>
        </StatcardComponent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
